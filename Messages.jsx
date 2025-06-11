import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare, Send, Search, Filter, MoreHorizontal, Phone,
  Video, Paperclip, Smile, Archive, Star, Pin, Trash2,
  CheckCircle, Clock, AlertCircle, File, Image, Download,
  Calendar, DollarSign, Building, MapPin, Eye, Edit3,
  Plus, Users, Settings, Circle, Check, CheckCheck,
  ArrowLeft, X, ChevronDown, Zap, Heart, Award, Shield
} from 'lucide-react';

const Messages = ({ user }) => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageText, setMessageText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAttachments, setShowAttachments] = useState(false);
  const [filter, setFilter] = useState('all'); // all, unread, archived, important
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const conversations = [
    {
      id: 1,
      name: "Antoine Da Silva",
      company: "GreenTech Solutions",
      role: "DRH",
      avatar: "AD",
      lastMessage: "Parfait ! Quand pouvons-nous organiser le kick-off meeting ?",
      lastMessageTime: "2h",
      unreadCount: 2,
      isOnline: true,
      project: "Design system GreenTech",
      status: "active",
      priority: "high",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Marie Laurent",
      company: "EcoStart",
      role: "CEO",
      avatar: "ML",
      lastMessage: "Les maquettes sont magnifiques ! Quelques petits ajustements...",
      lastMessageTime: "4h",
      unreadCount: 0,
      isOnline: false,
      project: "App mobile éco-responsable",
      status: "active",
      priority: "medium",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      name: "Thomas Bernard",
      company: "SmartEarth",
      role: "Product Manager",
      avatar: "TB",
      lastMessage: "Merci pour le livrable, nous allons examiner ça rapidement",
      lastMessageTime: "1j",
      unreadCount: 0,
      isOnline: true,
      project: "Dashboard IoT environnemental",
      status: "completed",
      priority: "low",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "Sophie Martin",
      company: "Planet Guardians",
      role: "Directrice Communication",
      avatar: "SM",
      lastMessage: "Pouvez-vous nous envoyer un devis pour la phase 2 ?",
      lastMessageTime: "2j",
      unreadCount: 1,
      isOnline: false,
      project: "Site vitrine ONG",
      status: "active",
      priority: "medium",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const messages = {
    1: [
      {
        id: 1,
        sender: "Antoine Da Silva",
        isMe: false,
        content: "Bonjour Camille ! J'ai examiné votre portfolio et je suis très impressionné par votre travail sur les projets éco-responsables.",
        timestamp: "2024-01-15 09:30",
        status: "read",
        type: "text"
      },
      {
        id: 2,
        sender: "Camille Dupont",
        isMe: true,
        content: "Bonjour Antoine ! Merci beaucoup, c'est très encourageant. Votre projet de design system m'intéresse énormément.",
        timestamp: "2024-01-15 09:45",
        status: "read",
        type: "text"
      },
      {
        id: 3,
        sender: "Antoine Da Silva",
        isMe: false,
        content: "Excellent ! J'aimerais discuter plus en détail de nos besoins. Êtes-vous disponible pour un appel cette semaine ?",
        timestamp: "2024-01-15 10:00",
        status: "read",
        type: "text"
      },
      {
        id: 4,
        sender: "Camille Dupont",
        isMe: true,
        content: "Bien sûr ! Je suis disponible jeudi après-midi ou vendredi matin. Quel créneau vous conviendrait le mieux ?",
        timestamp: "2024-01-15 10:15",
        status: "read",
        type: "text"
      },
      {
        id: 5,
        sender: "Antoine Da Silva",
        isMe: false,
        content: "Jeudi 15h serait parfait ! Je vous envoie le lien Zoom par email.",
        timestamp: "2024-01-15 14:20",
        status: "read",
        type: "text"
      },
      {
        id: 6,
        sender: "Camille Dupont",
        isMe: true,
        content: "Parfait ! J'ai préparé quelques questions sur votre écosystème tech actuel. À jeudi !",
        timestamp: "2024-01-15 14:25",
        status: "read",
        type: "text"
      },
      {
        id: 7,
        sender: "Antoine Da Silva",
        isMe: false,
        content: "Parfait ! Quand pouvons-nous organiser le kick-off meeting ?",
        timestamp: "2024-01-15 16:45",
        status: "delivered",
        type: "text"
      },
      {
        id: 8,
        sender: "Antoine Da Silva",
        isMe: false,
        content: "J'ai hâte de commencer ce projet avec vous ! 🚀",
        timestamp: "2024-01-15 16:46",
        status: "delivered",
        type: "text"
      }
    ]
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedConversation, messages]);

  const currentConversation = conversations.find(c => c.id === selectedConversation);
  const currentMessages = messages[selectedConversation] || [];

  const sendMessage = () => {
    if (messageText.trim()) {
      // Ici on ajouterait la logique d'envoi
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'sent':
        return <Check className="w-4 h-4 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="w-4 h-4 text-gray-400" />;
      case 'read':
        return <CheckCheck className="w-4 h-4 text-blue-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const ConversationItem = ({ conversation, isActive, onClick }) => (
    <div
      onClick={() => onClick(conversation.id)}
      className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-all duration-200 ${
        isActive ? 'bg-blue-50 border-r-4 border-r-blue-500' : ''
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className={`w-12 h-12 bg-gradient-to-r ${conversation.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
            {conversation.avatar}
          </div>
          {conversation.isOnline && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-gray-900 truncate">{conversation.name}</h4>
            <div className="flex items-center space-x-1">
              {conversation.priority === 'high' && (
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              )}
              <span className="text-xs text-gray-500">{conversation.lastMessageTime}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-600 truncate">{conversation.company}</p>
              <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
            </div>
            
            {conversation.unreadCount > 0 && (
              <div className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                {conversation.unreadCount}
              </div>
            )}
          </div>
          
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
              {conversation.project}
            </span>
            {conversation.status === 'active' && (
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const MessageBubble = ({ message }) => (
    <div className={`flex ${message.isMe ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
        message.isMe 
          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-br-md' 
          : 'bg-gray-100 text-gray-900 rounded-bl-md'
      }`}>
        <p className="text-sm leading-relaxed">{message.content}</p>
        <div className={`flex items-center justify-between mt-2 text-xs ${
          message.isMe ? 'text-blue-100' : 'text-gray-500'
        }`}>
          <span>{new Date(message.timestamp).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
          {message.isMe && (
            <div className="ml-2">
              {getStatusIcon(message.status)}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-full bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Conversations List */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <MessageSquare className="w-6 h-6 mr-2 text-blue-500" />
              Messages
            </h2>
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200">
              <Plus className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher une conversation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Filters */}
          <div className="flex space-x-2 mt-3">
            {[
              { key: 'all', label: 'Tous' },
              { key: 'unread', label: 'Non lus' },
              { key: 'important', label: 'Importants' }
            ].map(filterOption => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors duration-200 ${
                  filter === filterOption.key 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              isActive={selectedConversation === conversation.id}
              onClick={setSelectedConversation}
            />
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {currentConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-r ${currentConversation.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                      {currentConversation.avatar}
                    </div>
                    {currentConversation.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900">{currentConversation.name}</h3>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      {currentConversation.company} • {currentConversation.role}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{currentConversation.project}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors duration-200 group">
                    <Phone className="w-5 h-5 text-gray-600 group-hover:text-blue-500" />
                  </button>
                  <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors duration-200 group">
                    <Video className="w-5 h-5 text-gray-600 group-hover:text-blue-500" />
                  </button>
                  <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors duration-200 group">
                    <MoreHorizontal className="w-5 h-5 text-gray-600 group-hover:text-blue-500" />
                  </button>
                </div>
              </div>
              
              {/* Project Status */}
              <div className="mt-4 flex items-center space-x-4 p-3 bg-white rounded-xl border border-gray-100">
                <div className={`w-3 h-3 rounded-full ${
                  currentConversation.status === 'active' ? 'bg-green-400' : 
                  currentConversation.status === 'completed' ? 'bg-blue-400' : 'bg-gray-400'
                }`}></div>
                <span className="text-sm font-medium text-gray-700">
                  Projet {currentConversation.status === 'active' ? 'en cours' : 'terminé'}
                </span>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium ml-auto">
                  Voir détails
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-1">
              {currentMessages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-end space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <textarea
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Tapez votre message..."
                      rows="3"
                      className="w-full p-4 pr-16 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                    
                    <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        <Paperclip className="w-5 h-5 text-gray-500" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <Smile className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                    
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      multiple
                      accept="image/*,application/pdf,.doc,.docx"
                    />
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex items-center space-x-2 mt-3">
                    <button className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-lg hover:bg-blue-200 transition-colors duration-200">
                      📅 Planifier un appel
                    </button>
                    <button className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-lg hover:bg-green-200 transition-colors duration-200">
                      💰 Envoyer un devis
                    </button>
                    <button className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-lg hover:bg-purple-200 transition-colors duration-200">
                      📎 Partager un fichier
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={sendMessage}
                  disabled={!messageText.trim()}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </div>
          </>
        ) : (
          // Empty State
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sélectionnez une conversation
              </h3>
              <p className="text-gray-600">
                Choisissez une conversation dans la liste pour commencer à discuter
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;