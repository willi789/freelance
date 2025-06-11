import React, { useState } from 'react';
import {
  Settings, User, Bell, Shield, CreditCard, Globe, Moon, Sun,
  Eye, EyeOff, Save, Check, X, Upload, Camera, Mail, Phone,
  Lock, Key, Trash2, AlertTriangle, Smartphone, Monitor,
  Zap, Award, Target, Heart, Calendar, MapPin, DollarSign,
  ExternalLink, RefreshCw, Download, ChevronRight, Plus,
  Building, Briefcase, Star, CheckCircle, Edit3, Copy
} from 'lucide-react';

const Setting = ({ user }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email_missions: true,
    email_messages: true,
    email_payments: false,
    push_missions: true,
    push_messages: true,
    push_marketing: false,
    sms_urgent: false
  });

  const settingsTabs = [
    { id: 'profile', label: 'Profil', icon: User, description: 'Informations personnelles' },
    { id: 'account', label: 'Compte', icon: Settings, description: 'Sécurité et accès' },
    { id: 'notifications', label: 'Notifications', icon: Bell, description: 'Préférences de communication' },
    { id: 'privacy', label: 'Confidentialité', icon: Shield, description: 'Données et visibilité' },
    { id: 'billing', label: 'Facturation', icon: CreditCard, description: 'Paiements et factures' },
    { id: 'preferences', label: 'Préférences', icon: Target, description: 'Personnalisation' }
  ];

  const [profileData, setProfileData] = useState({
    firstName: user.name.split(' ')[0],
    lastName: user.name.split(' ')[1],
    email: user.email,
    phone: '+33 6 12 34 56 78',
    bio: 'Designer UX/UI passionné par l\'éco-conception et l\'impact environnemental. Spécialisé dans les interfaces mobiles et les design systems.',
    location: 'Paris, France',
    website: 'https://camille-dupont.design',
    linkedin: 'https://linkedin.com/in/camille-dupont',
    github: 'https://github.com/camille-dupont',
    hourlyRate: 65,
    availability: 'available', // available, busy, unavailable
    skills: ['UX/UI Design', 'Figma', 'Design System', 'Mobile Design', 'Prototyping'],
    languages: ['Français (Natif)', 'Anglais (Courant)', 'Espagnol (Intermédiaire)']
  });

  const [accountData, setAccountData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: true,
    loginNotifications: true
  });

  const TabButton = ({ tab, isActive, onClick }) => (
    <button
      onClick={() => onClick(tab.id)}
      className={`w-full flex items-center space-x-4 p-4 rounded-2xl transition-all duration-200 text-left group ${
        isActive 
          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
        isActive ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'
      }`}>
        <tab.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`} />
      </div>
      <div className="flex-1">
        <p className={`font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>
          {tab.label}
        </p>
        <p className={`text-sm ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
          {tab.description}
        </p>
      </div>
      <ChevronRight className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
    </button>
  );

  const ProfileSettings = () => (
    <div className="space-y-8">
      {/* Avatar Section */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Photo de profil</h3>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              {user.initials}
            </div>
            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Changer votre photo</h4>
            <p className="text-gray-600 text-sm mb-4">JPG, GIF ou PNG. Max 5MB.</p>
            <div className="flex space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                Télécharger
              </button>
              <button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Informations personnelles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
            <input
              type="text"
              value={profileData.firstName}
              onChange={(e) => {
                setProfileData({...profileData, firstName: e.target.value});
                setUnsavedChanges(true);
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
            <input
              type="text"
              value={profileData.lastName}
              onChange={(e) => {
                setProfileData({...profileData, lastName: e.target.value});
                setUnsavedChanges(true);
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => {
                setProfileData({...profileData, email: e.target.value});
                setUnsavedChanges(true);
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => {
                setProfileData({...profileData, phone: e.target.value});
                setUnsavedChanges(true);
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Bio professionnelle</label>
          <textarea
            value={profileData.bio}
            onChange={(e) => {
              setProfileData({...profileData, bio: e.target.value});
              setUnsavedChanges(true);
            }}
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Décrivez votre expertise et vos valeurs..."
          />
          <p className="text-sm text-gray-500 mt-2">{profileData.bio.length}/500 caractères</p>
        </div>
      </div>

      {/* Professional Info */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Informations professionnelles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tarif horaire</label>
            <div className="relative">
              <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="number"
                value={profileData.hourlyRate}
                onChange={(e) => {
                  setProfileData({...profileData, hourlyRate: parseInt(e.target.value)});
                  setUnsavedChanges(true);
                }}
                className="w-full pl-10 pr-16 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">€/h</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Disponibilité</label>
            <select
              value={profileData.availability}
              onChange={(e) => {
                setProfileData({...profileData, availability: e.target.value});
                setUnsavedChanges(true);
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="available">Disponible</option>
              <option value="busy">Occupé</option>
              <option value="unavailable">Indisponible</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const AccountSettings = () => (
    <div className="space-y-8">
      {/* Password */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Changer le mot de passe</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe actuel</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={accountData.currentPassword}
                onChange={(e) => setAccountData({...accountData, currentPassword: e.target.value})}
                className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nouveau mot de passe</label>
              <input
                type="password"
                value={accountData.newPassword}
                onChange={(e) => setAccountData({...accountData, newPassword: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirmer le mot de passe</label>
              <input
                type="password"
                value={accountData.confirmPassword}
                onChange={(e) => setAccountData({...accountData, confirmPassword: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200">
            Mettre à jour le mot de passe
          </button>
        </div>
      </div>

      {/* Two Factor Authentication */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Authentification à deux facteurs</h3>
        <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-xl mb-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-medium text-green-800">2FA activée</p>
              <p className="text-sm text-green-600">Votre compte est protégé</p>
            </div>
          </div>
          <button className="text-green-600 hover:text-green-700 font-medium">
            Gérer
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
            <div className="flex items-center space-x-3">
              <Smartphone className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">Application d'authentification</p>
                <p className="text-sm text-gray-600">Google Authenticator, Authy</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
              Activé
            </span>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
            <div className="flex items-center space-x-3">
              <Key className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">Clés de récupération</p>
                <p className="text-sm text-gray-600">Codes de sauvegarde</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Voir
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const NotificationSettings = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Préférences de notification</h3>
        
        <div className="space-y-6">
          {/* Email Notifications */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-500" />
              Notifications par email
            </h4>
            <div className="space-y-3">
              {[
                { key: 'email_missions', label: 'Nouvelles missions correspondantes', description: 'Recevez un email quand de nouvelles missions matchent votre profil' },
                { key: 'email_messages', label: 'Nouveaux messages', description: 'Notifications pour les messages clients' },
                { key: 'email_payments', label: 'Paiements et factures', description: 'Confirmations de paiements et rappels' }
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications[item.key]}
                      onChange={(e) => setNotifications({...notifications, [item.key]: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Push Notifications */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Bell className="w-5 h-5 mr-2 text-green-500" />
              Notifications push
            </h4>
            <div className="space-y-3">
              {[
                { key: 'push_missions', label: 'Missions urgentes', description: 'Alertes instantanées pour les missions urgentes' },
                { key: 'push_messages', label: 'Messages importants', description: 'Notifications push pour les messages clients' },
                { key: 'push_marketing', label: 'Actualités LinkUp', description: 'Nouvelles fonctionnalités et conseils' }
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications[item.key]}
                      onChange={(e) => setNotifications({...notifications, [item.key]: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch(activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'account':
        return <AccountSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'privacy':
        return <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center text-gray-500">Paramètres de confidentialité - En cours de développement</div>;
      case 'billing':
        return <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center text-gray-500">Paramètres de facturation - En cours de développement</div>;
      case 'preferences':
        return <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center text-gray-500">Préférences - En cours de développement</div>;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <Settings className="w-8 h-8 mr-3 text-blue-500" />
          Paramètres
        </h1>
        <p className="text-gray-600">
          Gérez votre compte, vos préférences et votre confidentialité
        </p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-80 flex-shrink-0">
          <div className="bg-gray-50 rounded-2xl p-4 space-y-2">
            {settingsTabs.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={setActiveTab}
              />
            ))}
          </div>

          {/* Save Changes */}
          {unsavedChanges && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-blue-600" />
                <p className="font-medium text-blue-800">Modifications non sauvegardées</p>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setUnsavedChanges(false)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Sauvegarder
                </button>
                <button 
                  onClick={() => setUnsavedChanges(false)}
                  className="px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Setting;