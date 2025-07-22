import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  Eye, 
  Heart, 
  MoreHorizontal,
  Users,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Input } from '../../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

export default function BidderPlayers() {
  const [selectedTab, setSelectedTab] = useState('all');

  const wizards = [
    {
      id: 1,
      name: 'Hermione Granger',
      position: 'Spell Caster',
      house: 'Gryffindor',
      basePrice: 15000,
      currentBid: 18500,
      rating: 9.2,
      status: 'bidding',
      avatar: '/api/placeholder/60/60',
      stats: { spells: 254, accuracy: 98.2, power: 59.07 }
    },
    {
      id: 2,
      name: 'Harry Potter',
      position: 'Seeker',
      house: 'Gryffindor',
      basePrice: 12000,
      currentBid: 12000,
      rating: 8.9,
      status: 'owned',
      avatar: '/api/placeholder/60/60',
      stats: { matches: 350, catches: 287, speed: 95.5 }
    },
    {
      id: 3,
      name: 'Luna Lovegood',
      position: 'Mystic',
      house: 'Ravenclaw',
      basePrice: 14000,
      currentBid: 16800,
      rating: 8.7,
      status: 'available',
      avatar: '/api/placeholder/60/60',
      stats: { visions: 243, predictions: 189, accuracy: 78.2 }
    },
    {
      id: 4,
      name: 'Severus Snape',
      position: 'Potions Master',
      house: 'Slytherin',
      basePrice: 10000,
      currentBid: 13200,
      rating: 9.0,
      status: 'watchlist',
      avatar: '/api/placeholder/60/60',
      stats: { potions: 120, brews: 225, mastery: 95.8 }
    },
    {
      id: 5,
      name: 'Albus Dumbledore',
      position: 'Grandmaster Wizard',
      house: 'Gryffindor',
      basePrice: 16000,
      currentBid: 19500,
      rating: 9.4,
      status: 'bidding',
      avatar: '/api/placeholder/60/60',
      stats: { experience: 228, wisdom: 99.9, power: 98.5 }
    },
    {
      id: 6,
      name: 'Minerva McGonagall',
      position: 'Transfiguration Expert',
      house: 'Gryffindor',
      basePrice: 11000,
      currentBid: 11000,
      rating: 8.5,
      status: 'available',
      avatar: '/api/placeholder/60/60',
      stats: { transformations: 161, success: 94.2, complexity: 87.3 }
    }
  ];

  const formatCurrency = (amount) => {
    return `${amount.toLocaleString()} Galleons`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'owned':
        return 'bg-green-100 text-green-800';
      case 'bidding':
        return 'bg-blue-100 text-blue-800';
      case 'watchlist':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredWizards = selectedTab === 'all' 
    ? wizards 
    : wizards.filter(wizard => wizard.status === selectedTab);

  const stats = {
    totalWizards: wizards.length,
    ownedWizards: wizards.filter(w => w.status === 'owned').length,
    biddingWizards: wizards.filter(w => w.status === 'bidding').length,
    watchlistWizards: wizards.filter(w => w.status === 'watchlist').length,
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="text-gray-600">Manage your magical team and discover new talent for your house</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input
              placeholder="Search wizards..."
              className="pl-10 pr-4 py-2 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Wizards</p>
                <p className="text-2xl font-bold">{stats.totalWizards}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Acquired</p>
                <p className="text-2xl font-bold">{stats.ownedWizards}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Bidding</p>
                <p className="text-2xl font-bold">{stats.biddingWizards}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Watchlist</p>
                <p className="text-2xl font-bold">{stats.watchlistWizards}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Wizards Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Wizard Portfolio</CardTitle>
          <CardDescription>
            View and manage all wizards across different categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All Wizards</TabsTrigger>
              <TabsTrigger value="owned">Acquired</TabsTrigger>
              <TabsTrigger value="bidding">Bidding</TabsTrigger>
              <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
              <TabsTrigger value="available">Available</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedTab} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWizards.map((wizard) => (
                  <Card key={wizard.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={wizard.avatar} />
                            <AvatarFallback>{wizard.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-lg">{wizard.name}</h3>
                            <p className="text-sm text-gray-600">{wizard.position} • {wizard.house}</p>
                            <div className="flex items-center space-x-1 mt-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{wizard.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Base Price</span>
                          <span className="font-medium">{formatCurrency(wizard.basePrice)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Current Bid</span>
                          <span className="font-bold text-lg">{formatCurrency(wizard.currentBid)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Status</span>
                          <Badge className={getStatusColor(wizard.status)}>
                            {wizard.status.charAt(0).toUpperCase() + wizard.status.slice(1)}
                          </Badge>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>{Object.keys(wizard.stats)[0]}: {Object.values(wizard.stats)[0]}</span>
                          <span>{Object.keys(wizard.stats)[1]}: {Object.values(wizard.stats)[1]}</span>
                          <span>{Object.keys(wizard.stats)[2]}: {Object.values(wizard.stats)[2]}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1" onClick={() => {window.location.href = '/bidder/players/player-info/' + wizard.id}}>
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button 
                          variant={wizard.status === 'bidding' ? 'default' : 'outline'} 
                          size="sm" 
                          className="flex-1"
                        >
                          {wizard.status === 'owned' ? 'Acquired' : 
                           wizard.status === 'bidding' ? 'Bid Now' : 
                           wizard.status === 'watchlist' ? 'Watching' : 'Place Bid'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredWizards.length === 0 && (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No wizards found</h3>
                  <p className="text-gray-600">
                    {selectedTab === 'all' 
                      ? 'No wizards available at the moment.' 
                      : `No wizards in ${selectedTab} category.`
                    }
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
