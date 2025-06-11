import React, { useState } from 'react';
import {
  FileText, Clock, CheckCircle, XCircle, Eye, MessageSquare,
  Calendar, DollarSign, Building, MapPin, Star, Send, Edit3,
  MoreHorizontal, Filter, Search, ArrowRight, TrendingUp,
  AlertCircle, Timer, Zap, Award, Target, Users, Briefcase,
  ChevronDown, ChevronRight, ExternalLink, RefreshCw, Plus,
  Archive, Trash2, BookmarkCheck, BarChart3
} from 'lucide-react';

const Applications = ({ user }) => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('all');
  const [selectedApplications, setSelectedApplications] = useState([]);
  const [viewMode, setViewMode] = useState('detailed'); // detailed or compact
  const [sortBy, setSortBy] = useState('date_desc');

  const applications = [
    {
      id: 1,
      mission_title: "Refonte UX/UI d'une app de covoiturage éthique",
      company: "GreenMove",
      company_logo: "GM",
      status: "in_review",
      applied_date: "2024-01-15",
      budget: { min: 2500, max: 4000 },
      proposal_amount: 3200,
      estimated_duration: "3 semaines",
      response_time: "2-3 jours",
      proposal_text: "Bonjour, je suis très intéressé par votre projet de refonte UX/UI. Fort de 5 ans d'expérience en design d'applications mobiles éco-responsables...",
      cover_letter_score: 92,
      match_score: 98,
      competition: { total: 5, position: 2 },
      last_activity: "Proposition envoyée",
      company_response: null,
      gradient: "from-blue-500 to-cyan-500",
      urgency: "high",
      certification_match: ["B-Corp", "Label NR"]
    },
    {
      id: 2,
      mission_title: "Design system pour startup GreenTech",
      company: "EcoTech Solutions",
      company_logo: "ET",
      status: "shortlisted",
      applied_date: "2024-01-12",
      budget: { min: 3000, max: 5500 },
      proposal_amount: 4200,
      estimated_duration: "4 semaines",
      response_time: "1-2 jours",
      proposal_text: "Votre projet de design system m'intéresse énormément. J'ai déjà créé des systèmes similaires pour des startups tech...",
      cover_letter_score: 88,
      match_score: 94,
      competition: { total: 8, position: 3 },
      last_activity: "Présélectionné",
      company_response: "Nous avons été impressionnés par votre portfolio. Seriez-vous disponible pour un appel cette semaine ?",
      gradient: "from-green-500 to-emerald-500",
      urgency: "medium",
      certification_match: ["ISO 26000"]
    },
    {
      id: 3,
      mission_title: "Interface dashboard IoT environnemental",
      company: "SmartEarth",
      company_logo: "SE",
      status: "accepted",
      applied_date: "2024-01-08",
      budget: { min: 1800, max: 3200 },
      proposal_amount: 2800,
      estimated_duration: "2 semaines",
      response_time: "Immédiat",
      proposal_text: "Excellente opportunité ! Ma spécialisation en data visualization et mon expérience avec Vue.js...",
      cover_letter_score: 95,
      match_score: 91,
      competition: { total: 12, position: 1 },
      last_activity: "Projet accepté",
      company_response: "Félicitations ! Nous sommes ravis de commencer ce projet avec vous. Quand pouvons-nous organiser le kick-off ?",
      gradient: "from-purple-500 to-pink-500",
      urgency: "low",
      certification_match: ["B-Corp"],
      project_start_date: "2024-01-22"
    },
    {
      id: 4,
      mission_title: "Prototype app mobile éco-responsable",
      company: "GreenLife App",
      company_logo: "GL",
      status: "rejected",
      applied_date: "2024-01-05",
      budget: { min: 2000, max: 3500 },
      proposal_amount: 2900,
      estimated_duration: "3 semaines",
      response_time: "1 semaine",
      proposal_text: "Ce projet d'application éco-responsable correspond parfaitement à mes valeurs...",
      cover_letter_score: 85,
      match_score: 89,
      competition: { total: 15, position: 8 },
      last_activity: "Candidature refusée",
      company_response: "Merci pour votre proposition. Nous avons choisi un profil avec plus d'expérience en gamification.",
      gradient: "from-indigo-500 to-purple-500",
      urgency: "medium",
      certification_match: ["Label NR"],
      rejection_reason: "Profil moins expérimenté en gamification"
    },
    {
      id: 5,
      mission_title: "Site web vitrine pour ONG environnementale",
      company: "Planet Guardians",
      company_logo: "PG",
      status: "draft",
      applied_date: null,
      budget: { min: 1500, max: 2800 },
      proposal_amount: 2200,
      estimated_duration: "2 semaines",
      response_time: null,
      proposal_text: "Brouillon de candidature pour ONG environnementale...",
      cover_letter_score: 0,
      match_score: 86,
      competition: { total: 18, position: null },
      last_activity: "Brouillon sauvegardé",
      company_response: null,
      gradient: "from-teal-500 to-cyan-500",
      urgency: "low",
      certification_match: ["LUCIE"]
    }
  ];

  const statusConfig = {
    draft: { 
      label: 'Brouillon', 
      color: 'gray', 
      icon: Edit3,
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-600',
      description: 'Candidature en cours de rédaction'
    },
    in_review: { 
      label: 'En cours', 
      color: 'blue', 
      icon: Clock,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      description: 'Candidature envoyée, en attente de réponse'
    },
    shortlisted: { 
      label: 'Présélectionné', 
      color: 'orange', 
      icon: Star,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      description: 'Vous faites partie des candidats présélectionnés'
    },
    accepted: { 
      label: 'Accepté', 
      color: 'green', 
      icon: CheckCircle,
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      description: 'Félicitations ! Votre candidature a été acceptée'
    },
    rejected: { 
      label: 'Refusé', 
      color: 'red', 
      icon: XCircle,
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
      description: 'Candidature non retenue cette fois'
    }
  };

  const getStatusCount = (status) => {
    if (status === 'all') return applications.length;
    return applications.filter(app => app.status === status).length;
  };

  const getFilteredApplications = () => {
    let filtered = applications;
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(app => app.status === statusFilter);
    }
    
    return filtered;
  };

  const ApplicationCard = ({ application, isSelected, onSelect }) => {
    const [expanded, setExpanded] = useState(false);
    const status = statusConfig[application.status];
    const StatusIcon = status.icon;

    return (
      <div className={`bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden ${isSelected ? 'ring-2 ring-blue-500' : ''}`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4 flex-1">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onSelect(application.id)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <div className={`w-12 h-12 bg-gradient-to-r ${application.gradient} rounded-xl flex items-center justify-center text-white font-bold shadow-lg`}>
                {application.company_logo}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 mb-1 truncate">
                  {application.mission_title}
                </h3>
                <p className="text-gray-600 flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  {application.company}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className={`px-3 py-1 rounded-xl flex items-center space-x-2 ${status.bgColor} ${status.textColor}`}>
                <StatusIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">{status.label}</span>
              </div>
              <button className="p-2 hover:bg-gray-50 rounded-xl">
                <MoreHorizontal className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Status specific content */}
          {application.status === 'shortlisted' && application.company_response && (
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-orange-800 mb-1">Message du client</p>
                  <p className="text-sm text-orange-700">{application.company_response}</p>
                </div>
              </div>
              <button className="mt-3 bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors duration-200">
                Répondre maintenant
              </button>
            </div>
          )}

          {application.status === 'accepted' && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-800 mb-1">🎉 Projet accepté !</p>
                  <p className="text-sm text-green-700">Début prévu le {new Date(application.project_start_date).toLocaleDateString('fr-FR')}</p>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors duration-200">
                  Accéder au projet
                </button>
              </div>
            </div>
          )}

          {application.status === 'rejected' && application.rejection_reason && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-800 mb-1">Raison du refus</p>
                  <p className="text-sm text-red-700">{application.rejection_reason}</p>
                </div>
              </div>
            </div>
          )}

          {/* Proposal details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{application.proposal_amount.toLocaleString()}€</div>
              <div className="text-xs text-gray-500">Proposition</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{application.match_score}%</div>
              <div className="text-xs text-gray-500">Match</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{application.competition.position || '-'}/{application.competition.total}</div>
              <div className="text-xs text-gray-500">Position</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{application.cover_letter_score || 0}%</div>
              <div className="text-xs text-gray-500">Score lettre</div>
            </div>
          </div>

          {/* Proposal preview */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">
              {expanded ? application.proposal_text : `${application.proposal_text.substring(0, 120)}...`}
            </p>
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              {expanded ? 'Voir moins' : 'Voir plus'}
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-500">
              {application.applied_date ? (
                <>Candidature envoyée le {new Date(application.applied_date).toLocaleDateString('fr-FR')}</>
              ) : (
                <>Brouillon sauvegardé</>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              {application.status === 'draft' && (
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center">
                  <Send className="w-4 h-4 mr-1" />
                  Envoyer
                </button>
              )}
              
              {application.status === 'in_review' && (
                <div className="flex items-center text-blue-600 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  Réponse sous {application.response_time}
                </div>
              )}
              
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <Eye className="w-4 h-4 text-gray-600" />
              </button>
              
              {(application.status === 'shortlisted' || application.status === 'accepted') && (
                <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <MessageSquare className="w-4 h-4 text-gray-600" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const StatCard = ({ title, value, subtitle, icon: Icon, color, trend = null }) => (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-${color}-100 rounded-2xl flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        {trend && (
          <div className={`flex items-center text-sm font-semibold ${trend > 0 ? 'text-green-600' : 'text-red-500'}`}>
            <TrendingUp className="w-4 h-4 mr-1" />
            {trend > 0 ? '+' : ''}{trend}%
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-600">{title}</p>
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <FileText className="w-8 h-8 mr-3 text-blue-500" />
            Mes candidatures
          </h1>
          <p className="text-gray-600">
            Suivez l'évolution de vos candidatures et gérez vos projets
          </p>
        </div>
        
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-200">
            <RefreshCw className="w-4 h-4" />
            <span>Actualiser</span>
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Nouvelle candidature
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total candidatures"
          value={applications.length}
          subtitle="Ce mois"
          icon={FileText}
          color="blue"
          trend={12}
        />
        <StatCard
          title="En attente"
          value={getStatusCount('in_review')}
          subtitle="Réponse sous 2-3j"
          icon={Clock}
          color="orange"
        />
        <StatCard
          title="Taux de réussite"
          value="67%"
          subtitle="Mieux que la moyenne"
          icon={Target}
          color="green"
          trend={5}
        />
        <StatCard
          title="Revenus potentiels"
          value="15,400€"
          subtitle="Candidatures en cours"
          icon={DollarSign}
          color="purple"
        />
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Status Filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
              statusFilter === 'all' 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Toutes ({applications.length})
          </button>
          {Object.entries(statusConfig).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setStatusFilter(key)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
                statusFilter === key 
                  ? `${config.bgColor} ${config.textColor} ring-2 ring-${config.color}-300` 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <config.icon className="w-4 h-4" />
              <span>{config.label} ({getStatusCount(key)})</span>
            </button>
          ))}
        </div>

        {/* Sort and View */}
        <div className="flex items-center space-x-4">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="date_desc">Plus récent</option>
            <option value="date_asc">Plus ancien</option>
            <option value="amount_desc">Montant décroissant</option>
            <option value="match_desc">Meilleur match</option>
            <option value="status">Par statut</option>
          </select>
          
          {selectedApplications.length > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{selectedApplications.length} sélectionnée(s)</span>
              <button className="p-2 hover:bg-gray-50 rounded-lg">
                <Archive className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-lg">
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {getFilteredApplications().map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            isSelected={selectedApplications.includes(application.id)}
            onSelect={(id) => {
              setSelectedApplications(prev => 
                prev.includes(id) 
                  ? prev.filter(appId => appId !== id)
                  : [...prev, id]
              );
            }}
          />
        ))}
      </div>

      {/* Empty State */}
      {getFilteredApplications().length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Aucune candidature trouvée
          </h3>
          <p className="text-gray-600 mb-6">
            {statusFilter === 'all' 
              ? "Vous n'avez pas encore envoyé de candidature." 
              : `Aucune candidature avec le statut "${statusConfig[statusFilter]?.label}".`
            }
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
            Parcourir les missions
          </button>
        </div>
      )}
    </div>
  );
};

export default Applications;