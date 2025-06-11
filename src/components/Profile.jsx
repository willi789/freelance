import React, { useState } from 'react';
import { User, Edit3, Save, Camera, Upload, Download, Star, Award, MapPin, Calendar, Mail, Phone, Linkedin, Github, Globe, Plus, X, Check, ChevronDown, ChevronRight, Eye, EyeOff, Briefcase, GraduationCap, AlignCenterVertical as Certificate, Heart, Shield, Target, Zap, TrendingUp, BarChart3, FileText, Image, ExternalLink, Copy, Share2, Settings, Lock, Trash2, AlertCircle, CheckCircle, Info, Sparkles, Building, Clock } from 'lucide-react';

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user.name,
    title: user.role,
    bio: "Designer UX/UI passionnée par l'impact environnemental et social du design. Spécialisée dans la création d'interfaces intuitives pour des entreprises responsables.",
    location: "Paris, France",
    email: user.email,
    phone: "+33 6 12 34 56 78",
    website: "https://camille-design.com",
    linkedin: "https://linkedin.com/in/camille-dupont",
    github: "https://github.com/camille-dupont",
    hourlyRate: 65,
    availability: "Disponible",
    experience: "5+ ans",
    languages: ["Français (natif)", "Anglais (courant)", "Espagnol (intermédiaire)"],
    workPreferences: {
      remote: true,
      onSite: false,
      hybrid: true,
      travel: false
    }
  });

  const [skills, setSkills] = useState([
    { name: "UX/UI Design", level: 95, category: "Design", verified: true },
    { name: "Figma", level: 98, category: "Outils", verified: true },
    { name: "Adobe Creative Suite", level: 90, category: "Outils", verified: false },
    { name: "Design Systems", level: 85, category: "Design", verified: true },
    { name: "Prototyping", level: 92, category: "Design", verified: false },
    { name: "User Research", level: 80, category: "Recherche", verified: false },
    { name: "HTML/CSS", level: 75, category: "Développement", verified: false },
    { name: "React", level: 60, category: "Développement", verified: false }
  ]);

  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: "Label Numérique Responsable",
      issuer: "Institut du Numérique Responsable",
      date: "2023-09-15",
      verified: true,
      category: "Environnement",
      image: "/api/placeholder/60/60"
    },
    {
      id: 2,
      name: "Carbon Literacy Project",
      issuer: "Carbon Trust",
      date: "2023-06-20",
      verified: true,
      category: "Environnement",
      image: "/api/placeholder/60/60"
    },
    {
      id: 3,
      name: "Google UX Design Certificate",
      issuer: "Google",
      date: "2022-03-10",
      verified: false,
      category: "Design",
      image: "/api/placeholder/60/60"
    }
  ]);

  const [portfolio, setPortfolio] = useState([
    {
      id: 1,
      title: "EcoApp - Application mobile de tracking carbone",
      description: "Design d'une app mobile pour suivre son empreinte carbone quotidienne",
      image: "/api/placeholder/400/300",
      tags: ["Mobile", "UX/UI", "Environnement"],
      client: "GreenTech Solutions",
      year: "2023",
      featured: true,
      url: "https://dribbble.com/shots/ecoapp"
    },
    {
      id: 2,
      title: "Dashboard analytics - Smart Energy",
      description: "Interface de visualisation de données énergétiques en temps réel",
      image: "/api/placeholder/400/300",
      tags: ["Dashboard", "Data Viz", "Énergie"],
      client: "Smart Energy Corp",
      year: "2023",
      featured: true,
      url: "https://behance.net/gallery/dashboard"
    },
    {
      id: 3,
      title: "Site vitrine - ONG Ocean Protection",
      description: "Refonte complète du site web d'une ONG de protection des océans",
      image: "/api/placeholder/400/300",
      tags: ["Web Design", "ONG", "Océan"],
      client: "Ocean Protection Fund",
      year: "2022",
      featured: false,
      url: "https://oceanprotection.org"
    }
  ]);

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: User },
    { id: 'skills', label: 'Compétences', icon: Target },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'settings', label: 'Paramètres', icon: Settings }
  ];

  const ProfileHeader = () => (
    <div className="relative bg-gradient-to-r from-blue-50 via-white to-cyan-50 rounded-2xl p-8 border border-gray-100 mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center space-x-6">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              {user.initials}
            </div>
            {isEditing && (
              <button className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Camera className="w-8 h-8 text-white" />
              </button>
            )}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="text-3xl font-bold bg-transparent border-b-2 border-blue-300 focus:border-blue-500 outline-none"
                />
                <input
                  type="text"
                  value={profileData.title}
                  onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                  className="text-xl text-gray-600 bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none"
                />
              </div>
            ) : (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h1>
                <p className="text-xl text-gray-600 mb-3">{profileData.title}</p>
              </div>
            )}
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {profileData.location}
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                {user.rating} ({user.completedProjects} projets)
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-green-500" />
                {profileData.availability}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 lg:mt-0 flex items-center space-x-4">
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">{profileData.hourlyRate}€/h</div>
            <div className="text-sm text-gray-500">Taux horaire</div>
          </div>
          
          {isEditing ? (
            <div className="flex space-x-3">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                Annuler
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center"
              >
                <Save className="w-4 h-4 mr-2" />
                Sauvegarder
              </button>
            </div>
          ) : (
            <div className="flex space-x-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                {showPreview ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center"
              >
                <Edit3 className="w-4 h-4 mr-2" />
                Modifier
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="relative mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Projets terminés", value: user.completedProjects, icon: CheckCircle, color: "green" },
          { label: "Revenus totaux", value: `${user.totalEarnings.toLocaleString()}€`, icon: TrendingUp, color: "blue" },
          { label: "Taux de réussite", value: "94%", icon: Target, color: "purple" },
          { label: "Clients fidèles", value: "87%", icon: Heart, color: "pink" }
        ].map((stat, index) => (
          <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
              <div className={`w-10 h-10 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const OverviewTab = () => (
    <div className="space-y-8">
      {/* Bio */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">À propos</h3>
        {isEditing ? (
          <textarea
            value={profileData.bio}
            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        ) : (
          <p className="text-gray-700 leading-relaxed">{profileData.bio}</p>
        )}
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations de contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: Mail, label: "Email", value: profileData.email, key: "email" },
            { icon: Phone, label: "Téléphone", value: profileData.phone, key: "phone" },
            { icon: Globe, label: "Site web", value: profileData.website, key: "website" },
            { icon: Linkedin, label: "LinkedIn", value: profileData.linkedin, key: "linkedin" }
          ].map((contact) => (
            <div key={contact.key} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <contact.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">{contact.label}</div>
                {isEditing ? (
                  <input
                    type="text"
                    value={contact.value}
                    onChange={(e) => setProfileData({...profileData, [contact.key]: e.target.value})}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <div className="font-medium text-gray-900">{contact.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Preferences */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Préférences de travail</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(profileData.workPreferences).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setProfileData({
                  ...profileData,
                  workPreferences: {...profileData.workPreferences, [key]: e.target.checked}
                })}
                disabled={!isEditing}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 capitalize">{key === 'onSite' ? 'Sur site' : key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SkillsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Compétences & Expertises</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200">
          <Plus className="w-4 h-4" />
          <span>Ajouter une compétence</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                {skill.verified && (
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                {skill.category}
              </span>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Niveau</span>
                <span className="font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
            
            {!skill.verified && (
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-500">Non vérifiée</span>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                  Faire vérifier
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const CertificationsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Certifications & Labels</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200">
          <Plus className="w-4 h-4" />
          <span>Ajouter une certification</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              {cert.verified ? (
                <div className="flex items-center space-x-1 bg-green-100 text-green-600 px-2 py-1 rounded-lg text-xs font-medium">
                  <CheckCircle className="w-3 h-3" />
                  <span>Vérifiée</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-600 px-2 py-1 rounded-lg text-xs font-medium">
                  <AlertCircle className="w-3 h-3" />
                  <span>En attente</span>
                </div>
              )}
            </div>
            
            <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
            <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
            <p className="text-xs text-gray-500 mb-3">
              Obtenue le {new Date(cert.date).toLocaleDateString('fr-FR')}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-lg">
                {cert.category}
              </span>
              <button className="text-blue-600 hover:text-blue-700">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const PortfolioTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Portfolio & Réalisations</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200">
          <Plus className="w-4 h-4" />
          <span>Ajouter un projet</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <Image className="w-16 h-16 text-gray-400" />
              </div>
              {project.featured && (
                <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-lg text-xs font-bold flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  À la une
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Voir le projet
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{project.client}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-8">
      <ProfileHeader />

      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl border border-gray-100 p-2">
        <div className="flex space-x-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-screen">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'skills' && <SkillsTab />}
        {activeTab === 'certifications' && <CertificationsTab />}
        {activeTab === 'portfolio' && <PortfolioTab />}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
            <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Paramètres du profil</h3>
            <p className="text-gray-600">
              Configuration de la confidentialité, notifications et préférences
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;