import React, { useState } from 'react';
import { Building2, TrendingUp, Instagram, Facebook, Send } from 'lucide-react';
import { Logo } from './components/Logo';
import { ServiceCard } from './components/ServiceCard';
import { Service } from './types';

function App() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: 'Open a Free Demat Account',
      icon: <Building2 className="w-6 h-6" />,
      description: 'Start your investment journey with zero opening charges',
      link: 'https://upstox.com/open-account/?f=JH7559'
    },
    {
      title: 'Alice Blue Demat account Opening',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Start your Alice Blue Demat portfolio',
      link: 'https://ekyc.aliceblueonline.com/?source=WMPN696'
    },
    {
      title: 'Join our Facebook community',
      icon: <Facebook className="w-6 h-6" />,
      description: 'Connect with us on Facebook',
      link: 'https://www.facebook.com/people/The-Life-Crest-Financial-Services/61568342825958/'
    },
    {
      title: 'Visit us @ Instagram',
      icon: <Instagram className="w-6 h-6" />,
      description: 'Connect with fellow investors',
      link: 'https://www.instagram.com/thelifecrest_'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-600 to-teal-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center space-y-8">
            <Logo />
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-8">
              TheLifeCrest Financial Services
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl">
              📈 Your Trust, Our Financial Expertise
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.instagram.com/thelifecrest_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a 
            href="https://www.facebook.com/people/The-Life-Crest-Financial-Services/61568342825958/"
            target="_blank"
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
          >
            <Facebook className="w-6 h-6 text-white" />
          </a>
          <a 
            href="https://t.me/thelifecrest"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
          >
            <Send className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;