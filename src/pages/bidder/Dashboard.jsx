import React from 'react';
import { 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Clock, 
  Trophy, 
  Star,
  Eye,
  MoreHorizontal,
  Filter
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';

export default function BidderDashboard() {
  // Mock data for the dashboard
  const auctionStats = {
    ongoing: 3,
    upcoming: 7,
    completed: 15,
    totalGalleons: 50000,
    spentGalleons: 32500,
    galleonsLeft: 17500
  };

  const topBidders = [
    { name: 'House Gryffindor', amount: 235, time: '9 hours ago', avatar: '/api/placeholder/32/32' },
    { name: 'House Ravenclaw', amount: 230, time: '12 hours ago', avatar: '/api/placeholder/32/32' },
    { name: 'House Slytherin', amount: 220, time: '20 hours ago', avatar: '/api/placeholder/32/32' },
    { name: 'House Hufflepuff', amount: 210, time: '22 hours ago', avatar: '/api/placeholder/32/32' }
  ];

  const myWizards = [
    { 
      id: 1, 
      name: 'Hermione Granger', 
      position: 'Spell Caster', 
      price: 15000, 
      status: 'Acquired', 
      rating: 9.2,
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: 2, 
      name: 'Harry Potter', 
      position: 'Seeker', 
      price: 12000, 
      status: 'Acquired', 
      rating: 8.9,
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: 3, 
      name: 'Ron Weasley', 
      position: 'Keeper', 
      price: 5500, 
      status: 'Bidding', 
      rating: 8.7,
      avatar: '/api/placeholder/40/40'
    }
  ];

  const upcomingAuctions = [
    {
      id: 1,
      title: 'Great Hall Wizard Auction 2025',
      date: '2025-07-25',
      time: '14:00',
      players: 150,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'International Magical Talents Auction',
      date: '2025-07-28',
      time: '16:30',
      players: 89,
      status: 'upcoming'
    }
  ];

  const formatCurrency = (amount) => {
    return `${amount.toLocaleString()} Galleons`;
  };

  const budgetUsedPercentage = (auctionStats.spentGalleons / auctionStats.totalGalleons) * 100;

  return (
    <div className="space-y-6">
      {/* Stats Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ongoing Auctions</CardTitle>
            <Clock className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{auctionStats.ongoing}</div>
            <p className="text-xs text-blue-100">Active magical auctions</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Auctions</CardTitle>
            <Calendar className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{auctionStats.upcoming}</div>
            <p className="text-xs text-green-100">Scheduled at the Great Hall</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Galleons Spent</CardTitle>
            <DollarSign className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(auctionStats.spentGalleons)}</div>
            <p className="text-xs text-purple-100">{budgetUsedPercentage.toFixed(1)}% of your treasury</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Galleons Left</CardTitle>
            <TrendingUp className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(auctionStats.galleonsLeft)}</div>
            <p className="text-xs text-orange-100">Available for bidding</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Budget Analysis */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Treasury Analysis
            </CardTitle>
            <CardDescription>
              Your galleon spending breakdown and remaining treasury
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Treasury</span>
                <span className="font-medium">{formatCurrency(auctionStats.totalGalleons)}</span>
              </div>
              <Progress value={100} className="h-2 bg-gray-100" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Galleons Used</span>
                <span className="font-medium text-red-600">{formatCurrency(auctionStats.spentGalleons)}</span>
              </div>
              <Progress value={budgetUsedPercentage} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Galleons Remaining</span>
                <span className="font-medium text-green-600">{formatCurrency(auctionStats.galleonsLeft)}</span>
              </div>
              <Progress value={100 - budgetUsedPercentage} className="h-2 bg-gray-100" />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{myWizards.length}</div>
                <div className="text-sm text-gray-600">Wizards Owned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{auctionStats.completed}</div>
                <div className="text-sm text-gray-600">Completed Auctions</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Houses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Leading Houses
            </CardTitle>
            <CardDescription>
              Top performing houses in recent auctions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topBidders.map((bidder, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={bidder.avatar} />
                      <AvatarFallback>{bidder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{bidder.name}</p>
                      <p className="text-xs text-gray-500">{bidder.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">{bidder.amount} Galleons</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* My Wizards Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 pb-2">
                <Users className="h-5 w-5" />
                My Wizards
              </CardTitle>
              <CardDescription>
                Wizards you've acquired and are currently bidding on
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm" onClick={() => {window.location.href = '/bidder/players'}}>
                <Eye className="h-4 w-4 mr-2" />
                View All
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Wizard</TableHead>
                <TableHead>Magical Specialty</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Power Rating</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myWizards.map((wizard) => (
                <TableRow key={wizard.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={wizard.avatar} />
                        <AvatarFallback>{wizard.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span>{wizard.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{wizard.position}</TableCell>
                  <TableCell>{formatCurrency(wizard.price)}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={wizard.status === 'Acquired' ? 'default' : 'secondary'}
                      className={wizard.status === 'Acquired' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                    >
                      {wizard.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{wizard.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Upcoming Magical Auctions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Magical Auctions
          </CardTitle>
          <CardDescription>
            Don't miss these upcoming auction sessions at the Great Hall
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingAuctions.map((auction) => (
              <div key={auction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{auction.title}</h4>
                    <p className="text-sm text-gray-600">
                      {new Date(auction.date).toLocaleDateString()} at {auction.time} • {auction.players} wizards
                    </p>
                  </div>
                </div>
                <Button size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}