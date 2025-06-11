import React, { useState, useEffect } from 'react';
import {
  Search, Filter, SlidersHorizontal, MapPin, Clock, DollarSign,
  Building, Star, Bookmark, BookmarkCheck, Send, Eye, ArrowRight,
  Zap, Target, Award, ChevronDown, X, Plus, BarChart3, Globe,
  Calendar, Users, CheckCircle, AlertCircle, Sparkles, Heart,
  TrendingUp, Shield, Briefcase, Timer, ExternalLink, RefreshCw
} from 'lucide-react';

const Missions = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    budget: '',
    duration: '',
    location: '',
    skills: [],
    certifications: [],
    urgency: '',
    company_size: ''
  });
  const [sortBy, setSortBy] = useState('match_score');
  const [savedMissions, setSavedMissions] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const missions = [
    {
      id: 1,
      title: "Refonte UX/UI d'une app de covoiturage éthique",
      company: "GreenMove",
      company_logo: "GM",
      budget: { min: 2500, max: 4000 },
      duration: "3 semaines",
      location: "Remote",
      posted_time: "2h",
      description: "Nous recherchons un designer UX/UI expérimenté pour repenser complètement l'interface de notre application de covoiturage éthique. Le projet inclut la recherche utilisateur, le prototypage et la création d'un design system.",
      skills: ["UX/UI", "Figma", "Mobile Design", "Design System"],
      company_certifications: ["B-Corp", "Label NR"],
      urgency: "Urgent",
      match_score: 98,
      applicants: 3,
      company_size: "50-100 employés",
      company_rating: 4.8,
      gradient: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      id: 2,
      title: "Design system pour startup GreenTech",
      company: "EcoTech Solutions",
      company_logo: "ET",
      budget: { min: 3000, max: 5500 },
      duration: "4 semaines",
      location: "Paris",
      posted_time: "5h",
      description: "Création d'un design system complet pour notre suite d'applications environnementales. Inclut tokens, composants React et documentation.",
      skills: ["Design System", "React", "Storybook", "Tokens"],
      company_certifications: ["ISO 26000", "LUCIE"],
      urgency: "Normal",
      match_score: 94,
      applicants: 7,
      company_size: "10-50 employés",
      company_rating: 4.6,
      gradient: "from-green-500 to-emerald-500",
      featured: false
    },
    {
      id: 3,
      title: "Interface dashboard IoT environnemental",
      company: "SmartEarth",
      company_logo: "SE",
      budget: { min: 1800, max: 3200 },
      duration: "2 semaines",
      location: "Lyon",
      posted_time: "1j",
      description: "Interface de visualisation de données IoT pour le monitoring environnemental en temps réel. Dashboard complexe avec charts et alertes.",
      skills: ["Dashboard", "Vue.js", "D3.js", "Data Viz"],
      company_certifications: ["B-Corp"],
      urgency: "Normal",
      match_score: 91,
      applicants: 12,
      company_size: "100-500 employés",
      company_rating: 4.9,
      gradient: "from-purple-500 to-pink-500",
      featured: false
    },
    {
      id: 4,
      title: "Prototype app mobile éco-responsable",
      company: "GreenLife App",
      company_logo: "GL",
      budget: { min: 2000, max: 3500 },
      duration: "3 semaines",
      location: "Remote",
      posted_time: "2j",
      description: "Prototypage d'une application mobile pour encourager les comportements éco-responsables. Interface ludique et engageante.",
      skills: ["Mobile", "Prototyping", "Animation", "Gamification"],
      company_certifications: ["Label NR", "Carbon Trust"],
      urgency: "Normal",
      match_score: 89,
      applicants: 5,
      company_size: "10-50 employés",
      company_rating: 4.7,
      gradient: "from-indigo-500 to-purple-500",
      featured: false
    },
    {
      id: 5,
      title: "Site web vitrine pour ONG environnementale",
      company: "Planet Guardians",
      company_logo: "PG",
      budget: { min: 1500, max: 2800 },
      duration: "2 semaines",
      location: "Remote",
      posted_time: "3j",
      description: "Refonte complète du site vitrine d'une ONG de protection de l'environnement. Site moderne, accessible et optimisé.",
      skills: ["Web Design", "WordPress", "SEO", "Accessibility"],
      company_certifications: ["LUCIE", "ISO 26000"],
      urgency: "Normal",
      match_score: 86,
      applicants: 15,
      company_size: "10-50 employés",
      company_rating: 4.5,
      gradient: "from-teal-500 to-cyan-500",
      featured: false
    }
  ];

  const filterOptions = {
    budget: [
      { label: "< 1,000€", value: "0-1000" },
      { label: "1,000€ - 3,000€", value: "1000-3000" },
      { label: "3,000€ - 5,000€", value: "3000-5000" },
      { label: "> 5,000€", value: "5000+" }
    ],
    duration: [
      { label: "< 1 semaine", value: "0-1" },
      { label: "1-2 semaines", value: "1-2" },
      { label: "2-4 semaines", value: "2-4" },
      { label: "> 1 mois", value: "4+" }
    ],
    location: [
      { label: "Remote", value: "remote" },
      { label: "Paris", value: "paris" },
      { label: "Lyon", value: "lyon" },
      { label: "Marseille", value: "marseille" },
      { label: "Bordeaux", value: "bordeaux" }
    ],
    skills: [
      "UX/UI", "Figma", "React", "Vue.js", "Design System", 
      "Mobile Design", "Web Design", "Prototyping", "Animation"
    ],
    certifications: [
      "B-Corp", "Label NR", "ISO 26000", "LUCIE", "Carbon Trust"
    ],
    urgency: [
      { label: "Urgent", value: "urgent" },
      { label: "Normal", value: "normal" }
    ],
    company_size: [
      { label: "1-10 employés", value: "1-10" },
      { label: "10-50 employés", value: "10-50" },
      { label: "50-100 employés", value: "50-100" },
      { label: "100+ employés", value: "100+" }
    ]
  };

  const toggleSavedMission = (missionId) => {
    setSavedMissions(prev => 
      prev.includes(missionId) 
        ? prev.filter(id => id !== missionId)
        : [...prev, missionId]
    );
  };

  const MissionCard = ({ mission, isSaved, onToggleSave, isGridView = true }) => {
    const [showDetails, setShowDetails] = useState(false);
    
    if (!isGridView) {
      // Liste view compact
      return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-3">
                <div className={`w-12 h-12 bg-gradient-to-r ${mission.gradient} rounded-xl flex items-center justify-center text-white font-bold shadow-lg`}>
                  {mission.company_logo}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                    {mission.title}
                  </h3>
                  <p className="text-gray-600 flex items-center">
                    <Building className="w-4 h-4 mr-1" />
                    {mission.company}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <span className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-1 text-green-500" />
                  {mission.budget.min.toLocaleString()}€ - {mission.budget.max.toLocaleString()}€
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-blue-500" />
                  {mission.duration}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-purple-500" />
                  {mission.location}
                </span>
                <span className={`px-2 py-1 text-xs font-bold rounded-lg bg-gradient-to-r ${mission.gradient} text-white`}>
                  {mission.match_score}% Match
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => onToggleSave(mission.id)}
                className="p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200"
              >
                {isSaved ? 
                  <BookmarkCheck className="w-5 h-5 text-blue-500" /> : 
                  <Bookmark className="w-5 h-5 text-gray-400 hover:text-blue-500" />
                }
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
                Postuler
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Grid view detailed
    return (
      <div className={`bg-white rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] ${mission.featured ? 'ring-2 ring-blue-200' : ''}`}>
        {mission.featured && (
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 text-sm font-semibold">
            <Sparkles className="w-4 h-4 inline mr-1" />
            Mission à la une
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-14 h-14 bg-gradient-to-r ${mission.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {mission.company_logo}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-1">
                    {mission.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 font-medium">{mission.company}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{mission.company_rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className={`px-3 py-1 text-sm font-bold rounded-xl bg-gradient-to-r ${mission.gradient} text-white shadow-lg`}>
                  <Target className="w-4 h-4 inline mr-1" />
                  {mission.match_score}% Match
                </span>
                {mission.urgency === 'Urgent' && (
                  <span className="px-3 py-1 text-sm font-bold bg-red-100 text-red-600 rounded-xl animate-pulse">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    {mission.urgency}
                  </span>
                )}
                <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-600 rounded-xl">
                  <CheckCircle className="w-4 h-4 inline mr-1" />
                  {mission.company_certifications[0]}
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onToggleSave(mission.id)}
                className="p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200"
              >
                {isSaved ? 
                  <BookmarkCheck className="w-5 h-5 text-blue-500" /> : 
                  <Bookmark className="w-5 h-5 text-gray-400 hover:text-blue-500" />
                }
              </button>
              <button 
                onClick={() => setShowDetails(!showDetails)}
                className="p-2 hover:bg-gray-50 rounded-xl transition-colors duration-200"
              >
                <Eye className="w-5 h-5 text-gray-400 hover:text-blue-500" />
              </button>
            </div>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {showDetails ? mission.description : `${mission.description.substring(0, 120)}...`}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {mission.skills.slice(0, showDetails ? mission.skills.length : 3).map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg">
                {skill}
              </span>
            ))}
            {!showDetails && mission.skills.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-lg">
                +{mission.skills.length - 3}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div className="flex items-center text-gray-600">
              <DollarSign className="w-4 h-4 mr-2 text-green-500" />
              <span className="font-semibold text-green-600">
                {mission.budget.min.toLocaleString()}€ - {mission.budget.max.toLocaleString()}€
              </span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              {mission.duration}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-purple-500" />
              {mission.location}
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-2 text-orange-500" />
              {mission.applicants} candidatures
            </div>
          </div>

          {showDetails && (
            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Informations entreprise</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Taille : </span>
                  <span className="font-medium">{mission.company_size}</span>
                </div>
                <div>
                  <span className="text-gray-500">Certifications : </span>
                  <span className="font-medium">{mission.company_certifications.join(', ')}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex space-x-3">
            <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center group">
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
              Postuler maintenant
            </button>
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center"
            >
              {showDetails ? 'Moins' : 'Plus'}
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center">
              <Timer className="w-3 h-3 mr-1" />
              Publié il y a {mission.posted_time}
            </span>
            <span>Expire dans 7 jours</span>
          </div>
        </div>
      </div>
    );
  };

  const FilterPanel = () => (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-900">Filtres</h3>
        <button 
          onClick={() => setSelectedFilters({budget: '', duration: '', location: '', skills: [], certifications: [], urgency: '', company_size: ''})}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Réinitialiser
        </button>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Budget</label>
        <select 
          value={selectedFilters.budget}
          onChange={(e) => setSelectedFilters({...selectedFilters, budget: e.target.value})}
          className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Tous les budgets</option>
          {filterOptions.budget.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      {/* Skills */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Compétences</label>
        <div className="flex flex-wrap gap-2">
          {filterOptions.skills.map(skill => (
            <button
              key={skill}
              onClick={() => {
                const isSelected = selectedFilters.skills.includes(skill);
                setSelectedFilters({
                  ...selectedFilters,
                  skills: isSelected 
                    ? selectedFilters.skills.filter(s => s !== skill)
                    : [...selectedFilters.skills, skill]
                });
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedFilters.skills.includes(skill)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Certifications entreprise</label>
        <div className="space-y-2">
          {filterOptions.certifications.map(cert => (
            <label key={cert} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedFilters.certifications.includes(cert)}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setSelectedFilters({
                    ...selectedFilters,
                    certifications: isChecked
                      ? [...selectedFilters.certifications, cert]
                      : selectedFilters.certifications.filter(c => c !== cert)
                  });
                }}
                className="mr-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{cert}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <Search className="w-8 h-8 mr-3 text-blue-500" />
            Missions disponibles
          </h1>
          <p className="text-gray-600">
            Découvrez des opportunités alignées avec vos valeurs et compétences
          </p>
        </div>
        
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors duration-200 ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <BarChart3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors duration-200 ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <Target className="w-5 h-5" />
            </button>
          </div>
          
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="match_score">Meilleur match</option>
            <option value="budget_desc">Budget décroissant</option>
            <option value="posted_time">Plus récent</option>
            <option value="urgency">Urgent d'abord</option>
          </select>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher par titre, entreprise, compétences..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-2 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 px-6 py-4 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-200"
        >
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-700">Filtres</span>
          {Object.values(selectedFilters).some(v => v && (Array.isArray(v) ? v.length > 0 : true)) && (
            <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              !
            </span>
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex gap-8">
        {/* Filters Sidebar */}
        {showFilters && (
          <div className="w-80 flex-shrink-0">
            <FilterPanel />
          </div>
        )}

        {/* Missions Grid/List */}
        <div className="flex-1">
          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">{missions.length}</span> missions trouvées
            </p>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
              <RefreshCw className="w-4 h-4" />
              <span>Actualiser</span>
            </button>
          </div>

          {/* Missions */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : 'space-y-4'}>
            {missions.map((mission) => (
              <MissionCard
                key={mission.id}
                mission={mission}
                isSaved={savedMissions.includes(mission.id)}
                onToggleSave={toggleSavedMission}
                isGridView={viewMode === 'grid'}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 hover:scale-105 shadow-lg">
              Charger plus de missions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;