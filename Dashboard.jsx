import React, { useState, useEffect } from 'react';
import {
  TrendingUp, DollarSign, Briefcase, Star, Clock, Users,
  ArrowRight, ArrowUpRight, Calendar, MapPin, Eye, Send,
  Bookmark, CheckCircle, AlertCircle, Zap, Target, Award,
  BarChart3, MessageSquare, Plus, ExternalLink, Sparkles,
  Building, Globe, Shield, Heart, ChevronRight, Play,
  TrendingDown, Activity, Timer, FileText, Bell
} from 'lucide-react';

const Dashboard = ({ user, setActiveTab }) => {
  const [timeRange, setTimeRange] = useState('week');
  const [selectedCard, setSelectedCard] = useState(null);

  // Mock data
  const stats = {
    week: {
      revenue: { amount: 3200, change: 12, trend: 'up' },
      projects: { amount: 4, change: 25, trend: 'up' },
      proposals: { amount: 8, change: -5, trend: 'down' },
      rating: { amount: 4.9, change: 0.1, trend: 'up' }
    },
    month: {
      revenue: { amount: 12800, change: 18, trend: 'up' },
      projects: { amount: 12, change: 33, trend: 'up' },
      proposals: { amount: 24, change: 15, trend: 'up' },
      rating: { amount: 4.9, change: 0.2, trend: 'up' }
    }
  };

  const currentStats = stats[timeRange];

  const recommendedMissions = [
    {
      id: 1,
      title: "Refonte UX/UI d'une app de covoiturage éthique",
      company: "GreenMove",
      budget: "2,500 - 4,000€",
      duration: "3 semaines",
      tags: ["UX/UI", "Mobile", "Figma"],
      matchScore: 98,
      location: "Remote",
      postedTime: "2h",
      certified: "B-Corp",
      urgency: "Urgent",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Design system pour startup GreenTech",
      company: "EcoTech Solutions",
      budget: "3,000 - 5,500€",
      duration: "4 semaines",
      tags: ["Design System", "React", "Storybook"],
      matchScore: 94,
      location: "Paris",
      postedTime: "5h",
      certified: "Label NR",
      urgency: "Normal",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Interface dashboard IoT environnemental",
      company: "SmartEarth",
      budget: "1,800 - 3,200€",
      duration: "2 semaines",
      tags: ["Dashboard", "Vue.js", "Data Viz"],
      matchScore: 91,
      location: "Lyon",
      postedTime: "1j",
      certified: "ISO 26000",
      urgency: "Normal",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'project_completed',
      title: 'Projet terminé',
      description: 'EcoApp - Design d\'interface mobile',
      amount: '+2,500€',
      time: '2h',
      icon: CheckCircle,
      color: 'green'
    },
    {
      id: 2,
      type: 'proposal_sent',
      title: 'Candidature envoyée',
      description: 'Dashboard analytics pour GreenData',
      time: '4h',
      icon: Send,
      color: 'blue'
    },
    {
      id: 3,
      type: 'message_received',
      title: 'Nouveau message',
      description: 'Antoine Da Silva - Feedback sur le prototype',
      time: '6h',
      icon: MessageSquare,
      color: 'purple'
    },
    {
      id: 4,
      type: 'review_received',
      title: 'Nouvelle évaluation',
      description: '5 étoiles de Marie Laurent (EcoStart)',
      time: '1j',
      icon: Star,
      color: 'yellow'
    }
  ];

  const StatCard = ({ title, value, change, trend, icon: Icon, color, gradient, onClick }) => (
    <div 
      onClick={onClick}
      className={`
        relative p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-105
        ${selectedCard === title ? 'ring-2 ring-blue-500 shadow-2xl' : ''}
      `}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className={`flex items-center space-x-1 text-sm font-semibold ${trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
          {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {change > 0 ? '+' : ''}{change}%
        </div>
      </div>
      <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    </div>
  );

  const MissionCard = ({ mission, onClick }) => (
    <div className="bg-white rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-[1.02]">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-2 py-1 text-xs font-bold rounded-lg bg-gradient-to-r ${mission.gradient} text-white`}>
                {mission.matchScore}% Match
              </span>
              {mission.urgency === 'Urgent' && (
                <span className="px-2 py-1 text-xs font-bold bg-red-100 text-red-600 rounded-lg animate-pulse">
                  {mission.urgency}
                </span>
              )}
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-lg">
                {mission.certified}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
              {mission.title}
            </h3>
            <p className="text-gray-600 mb-3 flex items-center">
              <Building className="w-4 h-4 mr-1" />
              {mission.company}
            </p>
          </div>
          <button className="p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200">
            <Bookmark className="w-5 h-5 text-gray-400 hover:text-blue-500" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {mission.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <DollarSign className="w-4 h-4 mr-1 text-green-500" />
            {mission.budget}
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1 text-blue-500" />
            {mission.duration}
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1 text-purple-500" />
            {mission.location}
          </div>
          <div className="flex items-center text-gray-600">
            <Timer className="w-4 h-4 mr-1 text-orange-500" />
            Il y a {mission.postedTime}
          </div>
        </div>

        <div className="flex space-x-3">
          <button 
            onClick={() => onClick(mission)}
            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center group"
          >
            <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
            Postuler
          </button>
          <button className="px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <Eye className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bonjour {user.name.split(' ')[0]} ! 👋
          </h1>
          <p className="text-gray-600">
            Voici un aperçu de votre activité et de nouvelles opportunités qui vous attendent.
          </p>
        </div>
        
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="week">Cette semaine</option>
            <option value="month">Ce mois</option>
          </select>
          <button 
            onClick={() => setActiveTab('missions')}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nouvelle mission
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Revenus"
          value={`${currentStats.revenue.amount.toLocaleString()}€`}
          change={currentStats.revenue.change}
          trend={currentStats.revenue.trend}
          icon={DollarSign}
          gradient="from-green-500 to-emerald-500"
          onClick={() => setSelectedCard('Revenus')}
        />
        <StatCard
          title="Projets actifs"
          value={currentStats.projects.amount}
          change={currentStats.projects.change}
          trend={currentStats.projects.trend}
          icon={Briefcase}
          gradient="from-blue-500 to-cyan-500"
          onClick={() => setSelectedCard('Projets actifs')}
        />
        <StatCard
          title="Candidatures"
          value={currentStats.proposals.amount}
          change={currentStats.proposals.change}
          trend={currentStats.proposals.trend}
          icon={FileText}
          gradient="from-purple-500 to-pink-500"
          onClick={() => setSelectedCard('Candidatures')}
        />
        <StatCard
          title="Note moyenne"
          value={currentStats.rating.amount}
          change={currentStats.rating.change}
          trend={currentStats.rating.trend}
          icon={Star}
          gradient="from-yellow-500 to-orange-500"
          onClick={() => setSelectedCard('Note moyenne')}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recommended Missions */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-500" />
                Missions recommandées
              </h2>
              <p className="text-gray-600 mt-1">Sélectionnées par notre IA selon votre profil</p>
            </div>
            <button 
              onClick={() => setActiveTab('missions')}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              Voir tout
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="space-y-6">
            {recommendedMissions.map((mission) => (
              <MissionCard
                key={mission.id}
                mission={mission}
                onClick={(mission) => console.log('Postuler à', mission.title)}
              />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-blue-500" />
              Actions rapides
            </h3>
            <div className="space-y-3">
              <button 
                onClick={() => setActiveTab('profile')}
                className="w-full flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="font-medium text-gray-900">Optimiser profil</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-all duration-200 group">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium text-gray-900">Ajouter certification</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-200" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-all duration-200 group">
                <div className="flex items-center">
                  <BarChart3 className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="font-medium text-gray-900">Voir analytics</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-200" />
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-gray-600" />
              Activité récente
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activity.color === 'green' ? 'bg-green-100' :
                    activity.color === 'blue' ? 'bg-blue-100' :
                    activity.color === 'purple' ? 'bg-purple-100' :
                    'bg-yellow-100'
                  }`}>
                    <activity.icon className={`w-4 h-4 ${
                      activity.color === 'green' ? 'text-green-600' :
                      activity.color === 'blue' ? 'text-blue-600' :
                      activity.color === 'purple' ? 'text-purple-600' :
                      'text-yellow-600'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-600 truncate">{activity.description}</p>
                    {activity.amount && (
                      <p className="text-sm font-semibold text-green-600">{activity.amount}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">Il y a {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setActiveTab('messages')}
              className="w-full mt-4 text-center text-blue-600 hover:text-blue-700 font-medium text-sm py-2 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            >
              Voir toute l'activité
            </button>
          </div>

          {/* Performance Widget */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-purple-500" />
              Performance
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Taux de réussite</span>
                <span className="font-bold text-gray-900">87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '87%'}}></div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">4.9</p>
                  <p className="text-xs text-gray-500">Note client</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">97%</p>
                  <p className="text-xs text-gray-500">Livraison à temps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;