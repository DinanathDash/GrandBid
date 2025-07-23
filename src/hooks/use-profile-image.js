import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook to handle profile image loading with error handling and fallbacks
 * Prevents 429 errors from Google's image service by implementing proper error handling
 */
export const useProfileImage = (userData, currentUser) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const errorCountRef = useRef(0);
  const lastErrorTimeRef = useRef(0);

  // Reset error state when user data changes
  useEffect(() => {
    setImageError(false);
    setImageLoaded(false);
    errorCountRef.current = 0;
  }, [userData?.photoURL, currentUser?.photoURL]);

  // Handle image loading errors with rate limiting
  const handleImageError = useCallback((event) => {
    const now = Date.now();
    
    // Log the error for debugging
    if (event?.target?.src) {
      console.warn('Profile image failed to load:', event.target.src);
      if (event.target.src.includes('googleusercontent.com')) {
        console.warn('Google profile image rate limited (429 error). Using fallback avatar.');
      }
    }
    
    // If we've had too many recent errors, stop trying
    if (errorCountRef.current >= 3 || (now - lastErrorTimeRef.current < 60000)) {
      setImageError(true);
      setImageLoaded(false);
      return;
    }
    
    errorCountRef.current += 1;
    lastErrorTimeRef.current = now;
    setImageError(true);
    setImageLoaded(false);
  }, []);

  // Handle successful image load
  const handleImageLoad = useCallback(() => {
    setImageError(false);
    setImageLoaded(true);
    errorCountRef.current = 0; // Reset error count on successful load
  }, []);

  // Get safe profile image URL with fallback logic
  const getProfileImageUrl = useCallback(() => {
    // If we've had too many errors, don't try to load images
    if (imageError && errorCountRef.current >= 2) return null;
    
    // Prefer custom uploaded photo over Google photo
    if (userData?.photoURL) {
      // Avoid Google photos entirely if we've had errors
      if (userData.photoURL.includes('googleusercontent.com')) {
        if (errorCountRef.current > 0) {
          return null; // Don't retry Google images after any error
        }
        // Add more conservative caching and size parameters
        try {
          const url = new URL(userData.photoURL);
          url.searchParams.set('sz', '64'); // Smaller size to reduce load
          url.searchParams.set('c', '1'); // Enable caching
          url.searchParams.set('_t', Math.floor(Date.now() / (1000 * 60 * 30))); // 30-minute cache
          return url.toString();
        } catch (e) {
          return null; // Invalid URL
        }
      }
      return userData.photoURL;
    }
    
    // Use Firebase Auth photo with error handling
    if (currentUser?.photoURL && !imageError) {
      // Avoid Google photos entirely if we've had errors
      if (currentUser.photoURL.includes('googleusercontent.com')) {
        if (errorCountRef.current > 0) {
          return null; // Don't retry Google images after any error
        }
        try {
          const url = new URL(currentUser.photoURL);
          url.searchParams.set('sz', '64'); // Smaller size
          url.searchParams.set('c', '1'); // Enable caching
          url.searchParams.set('_t', Math.floor(Date.now() / (1000 * 60 * 30))); // 30-minute cache
          return url.toString();
        } catch (e) {
          return null; // Invalid URL
        }
      }
      return currentUser.photoURL;
    }
    
    return null;
  }, [userData?.photoURL, currentUser?.photoURL, imageError]);

  return {
    imageUrl: getProfileImageUrl(),
    imageError,
    imageLoaded,
    handleImageError,
    handleImageLoad
  };
};
