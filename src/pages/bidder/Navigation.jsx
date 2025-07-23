import React, { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    Home,
    Users,
    Bell,
    Search,
    Settings,
    ChevronRight,
    ChevronLeft,
    LogOut
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Toaster } from '../../components/ui/sonner';
import { useAuth } from '../../contexts/AuthContext';
import { signOut_ } from '../../lib/auth';
import { toast } from 'sonner';
import { useProfileImage } from '../../hooks/use-profile-image';
import logo from '../../assets/logo.png';

export default function BidderNavigation({ children }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { currentUser, userData } = useAuth();
    const { imageUrl, handleImageError, handleImageLoad } = useProfileImage(userData, currentUser);

    const sidebarItems = [
        {
            id: 'dashboard',
            label: 'House Dashboard',
            icon: Home,
            path: '/bidder/dashboard'
        },
        {
            id: 'players',
            label: 'Wizard Roster',
            icon: Users,
            path: '/bidder/players'
        }
    ];

    const getCurrentActiveTab = () => {
        const currentPath = location.pathname;
        if (currentPath.includes('/dashboard')) return 'dashboard';
        if (currentPath.includes('/players')) return 'players';
        return 'dashboard';
    };

    const handleTabClick = (path) => {
        navigate(path);
    };

    const handleSignOut = async () => {
        try {
            await signOut_();
            toast.success('Signed out successfully');
            navigate('/');
        } catch (error) {
            console.error('Sign out error:', error);
            toast.error('Error signing out');
        }
    };

    const activeTab = getCurrentActiveTab();

    // Get user's initials for avatar fallback
    const getUserInitials = () => {
        if (userData?.displayName || userData?.name) {
            const name = userData.displayName || userData.name;
            return name.split(' ').map(n => n[0]).join('').toUpperCase();
        }
        if (currentUser?.email) {
            return currentUser.email[0].toUpperCase();
        }
        return 'U';
    };

    // Format user's display name
    const getDisplayName = () => {
        return userData?.displayName || userData?.name || 'User';
    };

    // Get user role/title
    const getUserRole = () => {
        return userData?.role === 'bidder' ? 'House Captain' : 'Team Leader';
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg transition-all duration-300 ease-in-out border-r border-gray-200 flex flex-col`}>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 h-18">
                    {!sidebarCollapsed && (
                        <div className="flex items-center">
                            <img src={logo} alt="GrandBid Logo" className="h-12" />
                        </div>
                    )}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="p-2 hover:bg-gray-100"
                    >
                        {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </Button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 flex flex-col mt-6 px-3">
                    <div className="flex-1">
                        {sidebarItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleTabClick(item.path)}
                                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors mb-2 ${isActive
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <Icon size={20} />
                                    {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
                                </button>
                            );
                        })}
                    </div>

                    {/* Sign Out Button */}
                    <div className="pb-6 border-t border-gray-200 pt-4">
                        <button
                            onClick={handleSignOut}
                            className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors text-red-600 hover:bg-red-50"
                        >
                            <LogOut size={20} />
                            {!sidebarCollapsed && <span className="font-medium">Sign Out</span>}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 h-18">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize">
                                {activeTab === 'dashboard' ? 'House Dashboard' : 'Wizard Roster'}
                            </h1>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                <Input
                                    placeholder="Search wizards..."
                                    className="pl-10 pr-4 py-2 w-64"
                                />
                            </div>

                            {/* Notifications */}
                            <Button variant="ghost" size="sm" className="relative p-2">
                                <Bell size={20} />
                                <Badge className="absolute top-0 right-0 w-4 h-4 p-0 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
                                    3
                                </Badge>
                            </Button>

                            {/* Settings */}
                            <Button variant="ghost" size="sm" className="p-2">
                                <Settings size={20} />
                            </Button>

                            {/* Profile */}
                            <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
                                <Avatar className="w-8 h-8">
                                    <AvatarImage 
                                        src={imageUrl} 
                                        onError={handleImageError}
                                        onLoad={handleImageLoad}
                                    />
                                    <AvatarFallback className="bg-blue-600 text-white">{getUserInitials()}</AvatarFallback>
                                </Avatar>
                                <div className="text-sm">
                                    <div className="font-medium text-gray-800">{getDisplayName()}</div>
                                    <div className="text-gray-500">{getUserRole()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
            <Toaster
                position="bottom-right"
                closeButton
                richColors
                theme="light"
                duration={3000}
                className="toast-container"
                toastOptions={{
                    style: {
                        background: '#FEF3C7',
                        color: '#92400E',
                        border: '2px solid #F59E0B',
                        fontSize: '0.875rem',
                        maxWidth: '90vw',
                        fontWeight: '500',
                        borderRadius: '12px',
                        backdropFilter: 'blur(8px)',
                    },
                    success: {
                        style: {
                            background: '#D1FAE5',
                            color: '#065F46',
                            border: '2px solid #10B981',
                        },
                    },
                    error: {
                        style: {
                            background: '#FEE2E2',
                            color: '#991B1B',
                            border: '2px solid #EF4444',
                        },
                    },
                    info: {
                        style: {
                            background: '#DBEAFE',
                            color: '#1E40AF',
                            border: '2px solid #3B82F6',
                        },
                    },
                }}
            />
        </div>
    );
}