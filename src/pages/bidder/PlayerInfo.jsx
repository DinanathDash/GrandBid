import React, { useState } from 'react';
import {
  Star,
  Clock,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  Trophy,
  Target,
  Activity,
  User,
  Flag,
  Heart,
  Eye,
  MoreHorizontal,
  ArrowLeft,
  Timer
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Progress } from '../../components/ui/progress';
import { Input } from '../../components/ui/input';
import { useNavigate } from 'react-router-dom';

export default function PlayerInfo() {
  const [activeTab, setActiveTab] = useState('overview');
  const [bidAmount, setBidAmount] = useState('');
  const navigate = useNavigate();

  // Mock wizard data
  const wizard = {
    id: 'WIZ902923',
    name: 'Hermione Granger',
    position: 'Spell Caster',
    house: 'Gryffindor',
    age: 25,
    avatar: '/hermione-granger-main.png',
    rating: 9.2,
    basePrice: 15000,
    currentBid: 18500,
    status: 'bidding',
    timeLeft: '8h 44m 14s',
    bids: 23,
    watchers: 156,
    auctionDate: '22/07/2025 02:00 PM',
    venue: 'Great Hall, Hogwarts',
    lastUpdate: '22/07/2025 01:55 PM'
  };

  const formatCurrency = (amount) => {
    return `${amount.toLocaleString()} Galleons`;
  };

  const stats = {
    spells: {
      mastered: 1326,
      accuracy: 98.67,
      power: 93.74,
      advanced: 47,
      defensive: 65
    },
    potions: {
      brewed: 184,
      success: 96.23,
      complexity: 84.8,
      signature: 'Polyjuice Potion'
    },
    knowledge: {
      books: 543,
      research: 12,
      discoveries: 3
    },
    achievements: {
      joined: '2018',
      tournaments: 292,
      victories: 267,
      titles: 8,
      honors: ['Order of Merlin Third Class', 'Outstanding Achievement in Academics', 'Best Young Witch Award']
    }
  };

  const recentBids = [
    { bidder: 'House Ravenclaw', amount: 18500, time: '2 mins ago' },
    { bidder: 'House Slytherin', amount: 18000, time: '15 mins ago' },
    { bidder: 'House Hufflepuff', amount: 17500, time: '32 mins ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigate('/bidder/players')}
        className="flex items-center space-x-2"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Wizard Roster</span>
      </Button>

      {/* Header with back button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">{wizard.name}</h1>
            <p className="text-gray-600">{wizard.position} • {wizard.house}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Heart className="h-4 w-4 mr-2" />
            Watchlist
          </Button>
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            {wizard.watchers}
          </Button>
        </div>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Bid</CardTitle>
            <DollarSign className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(wizard.currentBid)}</div>
            <p className="text-xs text-blue-100">{wizard.bids} bids placed</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Power Rating</CardTitle>
            <Star className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{wizard.rating}/10</div>
            <p className="text-xs text-green-100">Elite wizard</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Left</CardTitle>
            <Clock className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{wizard.timeLeft}</div>
            <p className="text-xs text-purple-100">Auction closing soon</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Base Price</CardTitle>
            <Target className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(wizard.basePrice)}</div>
            <p className="text-xs text-orange-100">Starting bid amount</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Wizard Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Wizard Hero Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={wizard.avatar} />
                    <AvatarFallback className="text-2xl">{wizard.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">{wizard.name}</h2>
                      <p className="text-gray-600">{wizard.position} • Age {wizard.age}</p>
                    </div>
                    <Badge
                      variant={wizard.status === 'bidding' ? 'default' : 'secondary'}
                      className="capitalize"
                    >
                      {wizard.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Flag className="h-6 w-6 mx-auto mb-1 text-blue-600" />
                      <p className="text-sm font-medium">{wizard.house}</p>
                      <p className="text-xs text-gray-600">House</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Trophy className="h-6 w-6 mx-auto mb-1 text-yellow-600" />
                      <p className="text-sm font-medium">#{stats.spells.accuracy}%</p>
                      <p className="text-xs text-gray-600">Accuracy</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <User className="h-6 w-6 mx-auto mb-1 text-green-600" />
                      <p className="text-sm font-medium">RHB</p>
                      <p className="text-xs text-gray-600">Style</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Calendar className="h-6 w-6 mx-auto mb-1 text-purple-600" />
                      <p className="text-sm font-medium">{stats.achievements.joined}</p>
                      <p className="text-xs text-gray-600">Joined</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Wizard Statistics</CardTitle>
              <CardDescription>Detailed magical performance metrics and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="spells">Spells</TabsTrigger>
                  <TabsTrigger value="potions">Potions</TabsTrigger>
                  <TabsTrigger value="knowledge">Knowledge</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Magical Achievements</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Total Tournaments</span>
                          <span className="text-blue-600 font-bold">{stats.achievements.tournaments}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="font-medium">Victories</span>
                          <span className="text-green-600 font-bold">{stats.achievements.victories.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                          <span className="font-medium">Titles Won</span>
                          <span className="text-purple-600 font-bold">{stats.achievements.titles}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Honors & Recognition</h4>
                      <div className="space-y-2">
                        {stats.achievements.honors.map((honor, index) => (
                          <div key={index} className="flex items-center space-x-2 p-2 bg-yellow-50 rounded-lg">
                            <Trophy className="h-4 w-4 text-yellow-600" />
                            <span className="text-sm font-medium">{honor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="spells" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Activity className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                        <div className="text-2xl font-bold">{stats.spells.mastered.toLocaleString()}</div>
                        <p className="text-sm text-gray-600">Spells Mastered</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
                        <div className="text-2xl font-bold">{stats.spells.accuracy}%</div>
                        <p className="text-sm text-gray-600">Accuracy</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                        <div className="text-2xl font-bold">{stats.spells.advanced}</div>
                        <p className="text-sm text-gray-600">Advanced Spells</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="potions" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Target className="h-8 w-8 mx-auto mb-2 text-red-600" />
                        <div className="text-2xl font-bold">{stats.potions.brewed}</div>
                        <p className="text-sm text-gray-600">Potions Brewed</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Activity className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                        <div className="text-2xl font-bold">{stats.potions.success}%</div>
                        <p className="text-sm text-gray-600">Success Rate</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="knowledge" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <User className="h-8 w-8 mx-auto mb-2 text-green-600" />
                        <div className="text-2xl font-bold">{stats.knowledge.books}</div>
                        <p className="text-sm text-gray-600">Books Read</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Activity className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                        <div className="text-2xl font-bold">{stats.knowledge.research}</div>
                        <p className="text-sm text-gray-600">Research Papers</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Star className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                        <div className="text-2xl font-bold">{stats.knowledge.discoveries}</div>
                        <p className="text-sm text-gray-600">New Discoveries</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Auction Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Auction Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Wizard ID</span>
                  <span className="font-medium">{wizard.id}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Auction Date</span>
                  <span className="font-medium">{wizard.auctionDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Venue</span>
                  <span className="font-medium text-right">{wizard.venue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Update</span>
                  <span className="font-medium">{wizard.lastUpdate}</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <Clock className="h-3 w-3 mr-1" />
                    Live Auction
                  </Badge>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">{wizard.timeLeft}</div>
                    <div className="text-xs text-gray-500">Time remaining</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bidding Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                <span>Place Your Bid</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Bid Amount (INR)</label>
                <Input
                  type="number"
                  placeholder="Enter your bid amount"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="text-lg"
                  min={wizard.currentBid + 500}
                  step={500}
                  required
                />
                <p className="text-xs text-gray-500">
                  Minimum bid: {formatCurrency(wizard.currentBid + 500)}
                </p>
              </div>

              <Button className="w-full" size="lg">
                <DollarSign className="h-4 w-4 mr-2" />
                Place Bid
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Every bid is legally binding and final.
                <Button variant="link" className="p-0 h-auto text-xs text-blue-600">
                  Learn more
                </Button>
              </p>
            </CardContent>
          </Card>

          {/* Recent Bids */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Recent Bids</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentBids.map((bid, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{bid.bidder}</p>
                      <p className="text-xs text-gray-500">{bid.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{formatCurrency(bid.amount)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
