import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Missions from './components/Missions';
import Applications from './components/Applications';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Setting from './components/Setting';
import Onboarding from './components/Onboarding';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showOnboarding, setShowOnboarding] = useState(false); // Change to true for new users
  
  // Mock user data
  const user = {
    id: 1,
    name: "Camille Dupont",
    initials: "CD",
    role: "Designer UX/UI",
    email: "camille.dupont@email.com",
    avatar: null,
    isComplete: true, // Set to false to trigger onboarding
    certifications: ["Label Numérique Responsable", "Carbon Literacy Project"],
    rating: 4.9,
    completedProjects: 27,
    totalEarnings: 45600
  };

  const renderMainContent = () => {
    if (showOnboarding || !user.isComplete) {
      return <Onboarding user={user} setShowOnboarding={setShowOnboarding} />;
    }

    switch(activeTab) {
      case 'dashboard':
        return <Dashboard user={user} setActiveTab={setActiveTab} />;
      case 'missions':
        return <Missions user={user} />;
      case 'applications':
        return <Applications user={user} />;
      case 'messages':
        return <Messages user={user} />;
      case 'profile':
        return <Profile user={user} />;
      case 'settings':
        return <Settings user={user} />;
      default:
        return <Dashboard user={user} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} user={user} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header user={user} notifications={3} />
        <main className="flex-1 overflow-auto">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
};

export default App;