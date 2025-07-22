import React, { useState } from 'react';
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
    ChevronLeft
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import logo from '../../assets/logo.png';

export default function BidderNavigation({ children }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const sidebarItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: Home,
            path: '/bidder/dashboard'
        },
        {
            id: 'players',
            label: 'Players',
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

    const activeTab = getCurrentActiveTab();

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg transition-all duration-300 ease-in-out border-r border-gray-200`}>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-2 border-b border-gray-200">
                    {!sidebarCollapsed && (
                        <div className="flex items-center space-x-2">
                            <img src={logo} alt="GrandBid Logo" className="h-14" />
                        </div>
                    )}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="p-2 hover:bg-gray-100"
                    >
                        {sidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                    </Button>
                </div>

                {/* Navigation Items */}
                <nav className="mt-6 px-3">
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
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize">
                                {activeTab}
                            </h1>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                <Input
                                    placeholder="Search..."
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
                                    <AvatarImage src="/api/placeholder/32/32" />
                                    <AvatarFallback className="bg-blue-600 text-white">BD</AvatarFallback>
                                </Avatar>
                                <div className="text-sm">
                                    <div className="font-medium text-gray-800">Bidder Name</div>
                                    <div className="text-gray-500">Team Manager</div>
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
        </div>
    );
}