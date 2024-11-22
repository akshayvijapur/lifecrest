import React, { useState } from 'react';
import { Building2, TrendingUp, Users, BarChart3, ExternalLink, Instagram, Facebook, Send } from 'lucide-react';

function App() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: 'Open a Free Demat Account',
      icon: <Building2 className="w-6 h-6" />,
      description: 'Start your investment journey with zero opening charges',
      link: '#'
    },
    {
      title: 'Investment Advisory',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Expert guidance for your portfolio management',
      link: '#'
    },
    {
      title: 'Market Analysis',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'In-depth market research and analysis',
      link: '#'
    },
    {
      title: 'Join Our Community',
      icon: <Users className="w-6 h-6" />,
      description: 'Connect with fellow investors',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-600 to-teal-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="w-32 h-32 rounded-full bg-white p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=128&h=128&fit=crop"
                alt="Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-8">
              TheLifeCrest Financial Services
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl">
              📈 Empowering your investments with data-driven insights!
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-emerald-500/20 text-white">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="text-emerald-100 mt-1">{service.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
            <Facebook className="w-6 h-6 text-white" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
            <Send className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;