import React, { useState, useEffect } from 'react';
import {
  ArrowRight, ArrowLeft, Check, Upload, Camera, Star, Award,
  Target, Zap, Heart, Globe, Building, MapPin, DollarSign,
  Clock, Users, Briefcase, Code, Palette, PenTool, Smartphone,
  Monitor, Database, BarChart3, MessageSquare, Shield, Sparkles,
  CheckCircle, X, Plus, Edit3, Eye, ExternalLink, Calendar,
  FileText, User, Settings, Bell, Mail, Phone, Linkedin, Github
} from 'lucide-react';

const Onboarding = ({ user, setShowOnboarding }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [onboardingData, setOnboardingData] = useState({
    // Step 1: Welcome & Goals
    goals: [],
    experience_level: '',
    
    // Step 2: Profile Setup
    bio: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    phone: '',
    
    // Step 3: Skills & Expertise
    primary_skills: [],
    secondary_skills: [],
    tools: [],
    experience_years: 0,
    
    // Step 4: Portfolio & Work Samples
    portfolio_items: [],
    portfolio_description: '',
    
    // Step 5: Availability & Rates
    hourly_rate: 0,
    availability: 'full-time', // full-time, part-time, project-based
    availability_hours: 40,
    preferred_project_duration: '',
    
    // Step 6: Values & Certifications
    values: [],
    certifications: [],
    industries_avoid: [],
    
    // Step 7: Preferences
    project_types: [],
    work_location: [],
    notification_preferences: {
      email: true,
      push: true,
      sms: false
    }
  });

  const steps = [
    {
      id: 'welcome',
      title: 'Bienvenue sur LinkUp !',
      subtitle: 'Définissons vos objectifs',
      icon: Heart,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'profile',
      title: 'Votre profil professionnel',
      subtitle: 'Présentez-vous aux clients',
      icon: User,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'skills',
      title: 'Compétences & expertise',
      subtitle: 'Vos domaines de prédilection',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'portfolio',
      title: 'Portfolio & réalisations',
      subtitle: 'Montrez votre talent',
      icon: Briefcase,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'rates',
      title: 'Tarifs & disponibilité',
      subtitle: 'Définissez vos conditions',
      icon: DollarSign,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'values',
      title: 'Valeurs & certifications',
      subtitle: 'Vos engagements éthiques',
      icon: Shield,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'preferences',
      title: 'Préférences & finalisation',
      subtitle: 'Derniers réglages',
      icon: Settings,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const goals = [
    { id: 'find_projects', label: 'Trouver des projets réguliers', icon: Target, description: 'Missions récurrentes avec des clients fidèles' },
    { id: 'grow_network', label: 'Développer mon réseau', icon: Users, description: 'Rencontrer des entreprises engagées' },
    { id: 'increase_rates', label: 'Augmenter mes tarifs', icon: TrendingUp, description: 'Valoriser mon expertise' },
    { id: 'work_values', label: 'Travailler selon mes valeurs', icon: Heart, description: 'Projets alignés avec mes convictions' },
    { id: 'learn_skills', label: 'Apprendre de nouvelles compétences', icon: Zap, description: 'Monter en compétences' },
    { id: 'build_reputation', label: 'Construire ma réputation', icon: Star, description: 'Devenir une référence dans mon domaine' }
  ];

  const skillCategories = {
    design: {
      label: 'Design',
      icon: Palette,
      skills: ['UX/UI Design', 'Design Graphique', 'Illustration', 'Design System', 'Branding', 'Motion Design']
    },
    development: {
      label: 'Développement',
      icon: Code,
      skills: ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP', 'WordPress', 'Shopify']
    },
    mobile: {
      label: 'Mobile',
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'iOS Native', 'Android Native', 'Ionic', 'Xamarin']
    },
    data: {
      label: 'Data & Analytics',
      icon: BarChart3,
      skills: ['Data Science', 'Machine Learning', 'Analytics', 'Business Intelligence', 'SQL', 'Python Data']
    },
    marketing: {
      label: 'Marketing Digital',
      icon: Target,
      skills: ['SEO/SEA', 'Content Marketing', 'Social Media', 'Email Marketing', 'Analytics', 'Conversion']
    },
    consulting: {
      label: 'Conseil & Stratégie',
      icon: Briefcase,
      skills: ['Stratégie Digitale', 'Transformation', 'Product Management', 'Business Analysis', 'Audit']
    }
  };

  const certifications = [
    { id: 'bcorp', label: 'B-Corp Certified', description: 'Formation aux pratiques B-Corp' },
    { id: 'carbon_literacy', label: 'Carbon Literacy Project', description: 'Compétences en empreinte carbone' },
    { id: 'label_nr', label: 'Label Numérique Responsable', description: 'Certification éco-conception' },
    { id: 'iso26000', label: 'ISO 26000', description: 'Responsabilité sociétale' },
    { id: 'lucie', label: 'Label LUCIE', description: 'Engagement RSE' },
    { id: 'carbon_trust', label: 'Carbon Trust', description: 'Réduction carbone' }
  ];

  const values = [
    { id: 'environment', label: 'Protection de l\'environnement', icon: Globe, color: 'green' },
    { id: 'social_impact', label: 'Impact social positif', icon: Heart, color: 'red' },
    { id: 'transparency', label: 'Transparence & éthique', icon: Eye, color: 'blue' },
    { id: 'diversity', label: 'Diversité & inclusion', icon: Users, color: 'purple' },
    { id: 'innovation', label: 'Innovation responsable', icon: Zap, color: 'yellow' },
    { id: 'local_economy', label: 'Économie locale', icon: MapPin, color: 'orange' }
  ];

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
            index <= currentStep 
              ? `bg-gradient-to-r ${step.color} text-white shadow-lg` 
              : 'bg-gray-200 text-gray-500'
          }`}>
            {index < currentStep ? (
              <Check className="w-6 h-6" />
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-12 h-1 mx-2 transition-all duration-300 ${
              index < currentStep ? 'bg-gradient-to-r from-blue-400 to-cyan-400' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const WelcomeStep = () => (
    <div className="text-center max-w-2xl mx-auto">
      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
        <Heart className="w-12 h-12 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Bienvenue sur LinkUp, {user.name.split(' ')[0]} ! 🎉
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        Nous allons configurer votre profil en quelques étapes pour vous connecter 
        avec les meilleures opportunités alignées sur vos valeurs.
      </p>
      
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quels sont vos objectifs sur LinkUp ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => {
                const isSelected = onboardingData.goals.includes(goal.id);
                setOnboardingData({
                  ...onboardingData,
                  goals: isSelected 
                    ? onboardingData.goals.filter(g => g !== goal.id)
                    : [...onboardingData.goals, goal.id]
                });
              }}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-left group hover:scale-105 ${
                onboardingData.goals.includes(goal.id)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <goal.icon className={`w-5 h-5 ${
                  onboardingData.goals.includes(goal.id) ? 'text-blue-600' : 'text-gray-500'
                }`} />
                <span className="font-medium text-gray-900">{goal.label}</span>
              </div>
              <p className="text-sm text-gray-600">{goal.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quel est votre niveau d'expérience ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: 'junior', label: 'Débutant', description: '0-2 ans d\'expérience' },
            { id: 'intermediate', label: 'Intermédiaire', description: '2-5 ans d\'expérience' },
            { id: 'senior', label: 'Expert', description: '5+ ans d\'expérience' }
          ].map((level) => (
            <button
              key={level.id}
              onClick={() => setOnboardingData({...onboardingData, experience_level: level.id})}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-center hover:scale-105 ${
                onboardingData.experience_level === level.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <h4 className="font-semibold text-gray-900 mb-1">{level.label}</h4>
              <p className="text-sm text-gray-600">{level.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const ProfileStep = () => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Créons votre profil professionnel</h2>
        <p className="text-gray-600">Ces informations seront visibles par les clients potentiels</p>
      </div>

      <div className="space-y-6">
        {/* Photo de profil */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Photo de profil</h3>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {user.initials}
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                Ajouter une photo
              </button>
              <p className="text-sm text-gray-500 mt-2">JPG, PNG. Max 5MB.</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Bio professionnelle</h3>
          <textarea
            value={onboardingData.bio}
            onChange={(e) => setOnboardingData({...onboardingData, bio: e.target.value})}
            placeholder="Présentez-vous en quelques phrases. Décrivez votre expertise, votre passion et ce qui vous rend unique..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-2">{onboardingData.bio.length}/500 caractères</p>
        </div>

        {/* Coordonnées */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Informations de contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Localisation
              </label>
              <input
                type="text"
                value={onboardingData.location}
                onChange={(e) => setOnboardingData({...onboardingData, location: e.target.value})}
                placeholder="Paris, France"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-1" />
                Téléphone
              </label>
              <input
                type="tel"
                value={onboardingData.phone}
                onChange={(e) => setOnboardingData({...onboardingData, phone: e.target.value})}
                placeholder="+33 6 12 34 56 78"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Globe className="w-4 h-4 inline mr-1" />
                Site web / Portfolio
              </label>
              <input
                type="url"
                value={onboardingData.website}
                onChange={(e) => setOnboardingData({...onboardingData, website: e.target.value})}
                placeholder="https://votre-portfolio.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Linkedin className="w-4 h-4 inline mr-1" />
                LinkedIn
              </label>
              <input
                type="url"
                value={onboardingData.linkedin}
                onChange={(e) => setOnboardingData({...onboardingData, linkedin: e.target.value})}
                placeholder="https://linkedin.com/in/votre-profil"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsStep = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Vos compétences & expertise</h2>
        <p className="text-gray-600">Sélectionnez vos domaines de prédilection pour un meilleur matching</p>
      </div>

      <div className="space-y-8">
        {/* Primary Skills */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-500" />
            Compétences principales (3-5 maximum)
          </h3>
          {Object.entries(skillCategories).map(([key, category]) => (
            <div key={key} className="mb-6 last:mb-0">
              <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => {
                      const isSelected = onboardingData.primary_skills.includes(skill);
                      if (isSelected) {
                        setOnboardingData({
                          ...onboardingData,
                          primary_skills: onboardingData.primary_skills.filter(s => s !== skill)
                        });
                      } else if (onboardingData.primary_skills.length < 5) {
                        setOnboardingData({
                          ...onboardingData,
                          primary_skills: [...onboardingData.primary_skills, skill]
                        });
                      }
                    }}
                    disabled={!onboardingData.primary_skills.includes(skill) && onboardingData.primary_skills.length >= 5}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      onboardingData.primary_skills.includes(skill)
                        ? 'bg-purple-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Années d'expérience</h3>
          <input
            type="range"
            min="0"
            max="20"
            value={onboardingData.experience_years}
            onChange={(e) => setOnboardingData({...onboardingData, experience_years: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Débutant</span>
            <span className="font-semibold text-purple-600">{onboardingData.experience_years} ans</span>
            <span>Expert (20+)</span>
          </div>
        </div>
      </div>
    </div>
  );

  const ValuesStep = () => (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Vos valeurs & certifications</h2>
        <p className="text-gray-600">Définissez ce qui compte vraiment pour vous</p>
      </div>

      <div className="space-y-8">
        {/* Values */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Valeurs importantes pour vous</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value) => (
              <button
                key={value.id}
                onClick={() => {
                  const isSelected = onboardingData.values.includes(value.id);
                  setOnboardingData({
                    ...onboardingData,
                    values: isSelected 
                      ? onboardingData.values.filter(v => v !== value.id)
                      : [...onboardingData.values, value.id]
                  });
                }}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-left hover:scale-105 ${
                  onboardingData.values.includes(value.id)
                    ? `border-${value.color}-500 bg-${value.color}-50`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <value.icon className={`w-5 h-5 ${
                    onboardingData.values.includes(value.id) ? `text-${value.color}-600` : 'text-gray-500'
                  }`} />
                  <span className="font-medium text-gray-900">{value.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Certifications existantes</h3>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={onboardingData.certifications.includes(cert.id)}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      setOnboardingData({
                        ...onboardingData,
                        certifications: isChecked
                          ? [...onboardingData.certifications, cert.id]
                          : onboardingData.certifications.filter(c => c !== cert.id)
                      });
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{cert.label}</p>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </div>
                </div>
                <Award className="w-5 h-5 text-yellow-500" />
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-sm text-blue-800">
              💡 Pas encore certifié ? Découvrez comment obtenir ces labels pour valoriser votre profil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch(currentStep) {
      case 0: return <WelcomeStep />;
      case 1: return <ProfileStep />;
      case 2: return <SkillsStep />;
      case 3: return <div className="text-center text-gray-500">Portfolio Step - En cours de développement</div>;
      case 4: return <div className="text-center text-gray-500">Rates Step - En cours de développement</div>;
      case 5: return <ValuesStep />;
      case 6: return <div className="text-center text-gray-500">Preferences Step - En cours de développement</div>;
      default: return <WelcomeStep />;
    }
  };

  const canProceed = () => {
    switch(currentStep) {
      case 0: return onboardingData.goals.length > 0 && onboardingData.experience_level;
      case 1: return onboardingData.bio.length > 50 && onboardingData.location;
      case 2: return onboardingData.primary_skills.length >= 3;
      case 5: return onboardingData.values.length > 0;
      default: return true;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    } else {
      // Finish onboarding
      setShowOnboarding(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    setShowOnboarding(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">L</span>
            </div>
            <span className="text-xl font-bold text-gray-900">LinkUp</span>
          </div>
          <button
            onClick={handleSkip}
            className="text-gray-500 hover:text-gray-700 font-medium"
          >
            Passer l'intégration
          </button>
        </div>

        {/* Progress */}
        <StepIndicator />

        {/* Current Step Info */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {steps[currentStep].title}
          </h1>
          <p className="text-gray-600">{steps[currentStep].subtitle}</p>
          <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span>Étape {currentStep + 1} sur {steps.length}</span>
            <span>•</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% terminé</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-12">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex items-center space-x-2 px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Précédent</span>
          </button>

          <div className="flex items-center space-x-4">
            {currentStep > 0 && (
              <button
                onClick={handleSkip}
                className="text-gray-500 hover:text-gray-700 font-medium"
              >
                Finaliser plus tard
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg"
            >
              <span>{currentStep === steps.length - 1 ? 'Terminer' : 'Suivant'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;