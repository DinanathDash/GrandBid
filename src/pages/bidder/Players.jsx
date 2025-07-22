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

  const players = [
    {
      id: 1,
      name: 'Virat Kohli',
      position: 'Batsman',
      team: 'India',
      basePrice: 15000000,
      currentBid: 18500000,
      rating: 9.2,
      status: 'bidding',
      avatar: '/api/placeholder/60/60',
      stats: { matches: 254, runs: 12169, avg: 59.07 }
    },
    {
      id: 2,
      name: 'MS Dhoni',
      position: 'Wicket Keeper',
      team: 'India',
      basePrice: 12000000,
      currentBid: 12000000,
      rating: 8.9,
      status: 'owned',
      avatar: '/api/placeholder/60/60',
      stats: { matches: 350, runs: 10773, avg: 50.57 }
    },
    {
      id: 3,
      name: 'Rohit Sharma',
      position: 'Batsman',
      team: 'India',
      basePrice: 14000000,
      currentBid: 16800000,
      rating: 8.7,
      status: 'available',
      avatar: '/api/placeholder/60/60',
      stats: { matches: 243, runs: 9115, avg: 48.96 }
    },
    {
      id: 4,
      name: 'Jasprit Bumrah',
      position: 'Bowler',
      team: 'India',
      basePrice: 10000000,
      currentBid: 13200000,
      rating: 9.0,
      status: 'watchlist',
      avatar: '/api/placeholder/60/60',
      stats: { matches: 120, wickets: 225, avg: 20.06 }
    },
    {
      id: 5,
      name: 'AB de Villiers',
      position: 'Batsman',
      team: 'South Africa',
      basePrice: 16000000,
      currentBid: 19500000,
      rating: 9.4,
      status: 'bidding',
      avatar: '/api/placeholder/60/60',
      stats: { matches: 228, runs: 9577, avg: 53.50 }
    },
    {
      id: 6,
      name: 'David Warner',
      position: 'Batsman',
      team: 'Australia',
      basePrice: 11000000,
      currentBid: 11000000,
      rating: 8.5,
      status: 'available',
      avatar: '/api/placeholder/60/60',
      stats: { matches: 161, runs: 6932, avg: 44.89 }
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
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

  const filteredPlayers = selectedTab === 'all' 
    ? players 
    : players.filter(player => player.status === selectedTab);

  const stats = {
    totalPlayers: players.length,
    ownedPlayers: players.filter(p => p.status === 'owned').length,
    biddingPlayers: players.filter(p => p.status === 'bidding').length,
    watchlistPlayers: players.filter(p => p.status === 'watchlist').length,
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Players</h1>
          <p className="text-gray-600">Manage your player portfolio and discover new talent</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input
              placeholder="Search players..."
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
                <p className="text-sm font-medium text-gray-600">Total Players</p>
                <p className="text-2xl font-bold">{stats.totalPlayers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Owned</p>
                <p className="text-2xl font-bold">{stats.ownedPlayers}</p>
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
                <p className="text-2xl font-bold">{stats.biddingPlayers}</p>
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
                <p className="text-2xl font-bold">{stats.watchlistPlayers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Players Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Player Portfolio</CardTitle>
          <CardDescription>
            View and manage all players across different categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All Players</TabsTrigger>
              <TabsTrigger value="owned">Owned</TabsTrigger>
              <TabsTrigger value="bidding">Bidding</TabsTrigger>
              <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
              <TabsTrigger value="available">Available</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedTab} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlayers.map((player) => (
                  <Card key={player.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={player.avatar} />
                            <AvatarFallback>{player.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-lg">{player.name}</h3>
                            <p className="text-sm text-gray-600">{player.position} • {player.team}</p>
                            <div className="flex items-center space-x-1 mt-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{player.rating}</span>
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
                          <span className="font-medium">{formatCurrency(player.basePrice)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Current Bid</span>
                          <span className="font-bold text-lg">{formatCurrency(player.currentBid)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Status</span>
                          <Badge className={getStatusColor(player.status)}>
                            {player.status.charAt(0).toUpperCase() + player.status.slice(1)}
                          </Badge>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Matches: {player.stats.matches}</span>
                          <span>
                            {player.position === 'Bowler' 
                              ? `Wickets: ${player.stats.wickets}` 
                              : `Runs: ${player.stats.runs}`
                            }
                          </span>
                          <span>Avg: {player.stats.avg}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button 
                          variant={player.status === 'bidding' ? 'default' : 'outline'} 
                          size="sm" 
                          className="flex-1"
                        >
                          {player.status === 'owned' ? 'Owned' : 
                           player.status === 'bidding' ? 'Bid Now' : 
                           player.status === 'watchlist' ? 'Watching' : 'Place Bid'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredPlayers.length === 0 && (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No players found</h3>
                  <p className="text-gray-600">
                    {selectedTab === 'all' 
                      ? 'No players available at the moment.' 
                      : `No players in ${selectedTab} category.`
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
