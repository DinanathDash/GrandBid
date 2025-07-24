import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile 
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';
import { auth, db, storage } from './firebase';

// Create user document in Firestore
export const createUserDocument = async (user, additionalData = {}) => {
  if (!user) return;
  
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) {
    const { displayName, email, photoURL } = user;
    const createdAt = serverTimestamp();
    const lastLoginAt = serverTimestamp();
    
    try {
      await setDoc(userRef, {
        displayName: displayName || additionalData.name || '',
        email,
        photoURL: photoURL || additionalData.photoURL || '',
        createdAt,
        lastLoginAt,
        role: 'bidder', // Default role
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user document:', error);
      throw error;
    }
  } else {
    // Update last login time for existing users
    try {
      await updateDoc(userRef, {
        lastLoginAt: serverTimestamp()
      });
    } catch (error) {
      console.error('Error updating last login:', error);
    }
  }
  
  return userRef;
};

// Get user document from Firestore
export const getUserDocument = async (uid) => {
  if (!uid) return null;
  
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return { uid, ...userSnap.data() };
    }
    return null;
  } catch (error) {
    console.error('Error getting user document:', error);
    throw error;
  }
};

// Upload profile picture
export const uploadProfilePicture = async (file, uid) => {
  if (!file || !uid) return null;
  
  try {
    const fileRef = ref(storage, `profile-pictures/${uid}`);
    const snapshot = await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    // Update user profile in auth
    await updateProfile(auth.currentUser, {
      photoURL: downloadURL
    });
    
    // Update user document in Firestore
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      photoURL: downloadURL
    });
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    throw error;
  }
};

// Sign up with email and password
export const signUpWithEmailAndPassword = async (email, password, name, profilePicture = null) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    
    let photoURL = '';
    
    // Upload profile picture if provided
    if (profilePicture) {
      photoURL = await uploadProfilePicture(profilePicture, user.uid);
    }
    
    // Update auth profile
    await updateProfile(user, {
      displayName: name,
      photoURL
    });
    
    // Create user document in Firestore
    await createUserDocument(user, { 
      name,
      photoURL
    });
    
    return user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// Sign in with email and password
export const signInWithEmailAndPassword_ = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    
    // Update last login time
    await createUserDocument(user);
    
    return user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    
    // Create or update user document
    await createUserDocument(user);
    
    return user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

// Sign out
export const signOut_ = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

// Reset password
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (uid, updates) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};
