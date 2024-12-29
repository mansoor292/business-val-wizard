import React, { useState } from 'react';
import { 
  Plus, 
  ChevronDown, 
  Search,
  MessageCircle,
  Bot,
  Info,
  Settings,
  Bell,
  Clock,
  HelpCircle,
  User,
  Home,
  Users,
  BookOpen,
  BarChart2,
  PlusCircle,
  Menu,
  X
} from 'lucide-react';

const SlackStyleDashboard = () => {
  const [selectedAgent, setSelectedAgent] = useState('sales');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  const agents = [
    { id: 'sales', name: 'Sales Assistant', handle: '@sales', status: 'active' },
    { id: 'tech', name: 'Technical Support', handle: '@tech', status: 'idle' },
    { id: 'data', name: 'Data Analyst', handle: '@data', status: 'active' }
  ];

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Dashboard' },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'Agents', active: true },
    { icon: <Users className="w-5 h-5" />, label: 'Team' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Training' },
    { icon: <BarChart2 className="w-5 h-5" />, label: 'Analytics' },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-900">
      {/* Mobile Navigation Overlay */}
      <div className={`
        fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300
        ${isMobileNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `} onClick={() => setIsMobileNavOpen(false)} />

      {/* Mobile Navigation Drawer */}
      <div className={`
        fixed inset-y-0 left-0 w-64 bg-slate-800 z-50 lg:hidden transform transition-transform duration-300 ease-in-out
        ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-14 border-b border-slate-700 flex items-center justify-between px-4">
          <span className="text-white font-semibold">Navigation</span>
          <button 
            onClick={() => setIsMobileNavOpen(false)}
            className="text-gray-400 hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md
                ${item.active 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-slate-700'}`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Top Navigation */}
      <div className="h-14 bg-slate-800 border-b border-slate-700 px-4 flex items-center justify-between">
        {/* Left Nav */}
        <div className="flex items-center space-x-8">
          <button 
            className="lg:hidden text-gray-400 hover:text-gray-200"
            onClick={() => setIsMobileNavOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-md
                  ${item.active 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-slate-700'}`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center space-x-4">
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-200">
            <Clock className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-200">
            <Bell className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-200">
            <HelpCircle className="w-5 h-5" />
          </button>
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 p-1 rounded-md hover:bg-slate-700"
            >
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                DG
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-md shadow-lg">
                <div className="p-4 border-b border-slate-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      DG
                    </div>
                    <div>
                      <div className="text-white font-medium">Daniel Gallego</div>
                      <div className="text-sm text-gray-400">Executive Chairman</div>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-slate-700 flex items-center">
                    <User className="w-4 h-4 mr-3" />
                    Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-slate-700 flex items-center">
                    <Settings className="w-4 h-4 mr-3" />
                    Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 flex flex-col bg-slate-800 border-r border-slate-700">
          {/* Previous sidebar content... */}
          {/* Workspace Header */}
          <div className="px-4 h-14 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold">Catipult Workspace</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="px-3 py-2">
            <div className="bg-slate-700 rounded flex items-center px-3 py-1.5">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text"
                placeholder="Search agents..."
                className="bg-transparent text-sm text-gray-200 placeholder-gray-400 focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Sidebar Sections */}
          <div className="flex-1 overflow-y-auto">
            {/* Agents Section */}
            <div className="px-2 py-4">
              <div className="flex items-center justify-between px-2 mb-2">
                <div className="flex items-center text-gray-300 text-sm">
                  <ChevronDown className="w-3 h-3 mr-1" />
                  <span className="font-semibold">Agents</span>
                </div>
                <Plus className="w-4 h-4 text-gray-400 hover:text-gray-200 cursor-pointer" />
              </div>
              
              {/* Agent List */}
              <div className="space-y-1">
                {agents.map((agent) => (
                  <div
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent.id)}
                    className={`flex items-center px-2 py-1.5 rounded cursor-pointer
                      ${selectedAgent === agent.id 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:bg-slate-700'}`}
                  >
                    <Bot className="w-4 h-4 mr-2" />
                    <span className="text-sm">{agent.name}</span>
                    {agent.status === 'active' && (
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-auto" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Channel Header */}
          <div className="h-14 border-b border-slate-700 flex items-center justify-between px-4">
            <div className="flex items-center text-gray-200">
              <Bot className="w-5 h-5 mr-2" />
              <span className="font-semibold">
                {agents.find(a => a.id === selectedAgent)?.name}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-gray-200">
                <Info className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-200">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto bg-slate-900 p-6">
            <div className="max-w-3xl mx-auto">
              {/* Welcome Message */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-gray-300" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Welcome to {agents.find(a => a.id === selectedAgent)?.name}
                </h2>
                <p className="text-gray-400 mb-4">
                  This is the start of your conversation with your AI assistant.
                </p>
                <button className="inline-flex items-center px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Start New Conversation
                </button>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-slate-700">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center bg-slate-800 rounded-lg p-2">
                <button className="p-2 hover:bg-slate-700 rounded">
                  <Plus className="w-5 h-5 text-gray-400" />
                </button>
                <input
                  type="text"
                  placeholder="Message your agent..."
                  className="flex-1 bg-transparent px-4 text-gray-200 placeholder-gray-400 focus:outline-none"
                />
                <button className="p-2 hover:bg-slate-700 rounded">
                  <MessageCircle className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlackStyleDashboard;