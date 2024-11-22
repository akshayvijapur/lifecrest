import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function ServiceCard({ service, onMouseEnter, onMouseLeave }: ServiceCardProps) {
  return (
    <a
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
    </a>
  );
}