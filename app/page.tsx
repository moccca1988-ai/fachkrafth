'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Users, Target, TrendingUp, Clock, Briefcase, ShieldCheck, Zap, BarChart, Settings } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Users,
      title: 'Personalvermittlung',
      description: 'Qualifizierte Fachkräfte für Ihren Erfolg',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Target,
      title: 'Recruiting',
      description: 'Zielgerichtete Talentakquise',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: TrendingUp,
      title: 'Karriereberatung',
      description: 'Professionelle Entwicklung fördern',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Settings,
      title: 'Prozessoptimierung',
      description: 'Effiziente Workflows etablieren',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  const branches = ['Industrie', 'Handwerk', 'IT & Technik', 'Gesundheitswesen', 'Logistik', 'Gastgewerbe'];
  
  const guarantees = [
    'Kostenlose Beratung',
    'Schnelle Vermittlung',
    'Geprüfte Qualifikationen',
    'Persönliche Betreuung'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Fachkrafthaus
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Ihre Experten für qualifizierte Fachkräfte und professionelles Recruiting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontakt" 
                className="bg-white text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Jetzt starten
              </Link>
              <Link 
                href="/leistungen" 
                className="border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-700 transition-all duration-300"
              >
                Leistungen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Unsere Leistungen</h2>
          <p className="text-xl text-gray-600">Maßgeschneiderte Lösungen für Ihren Erfolg</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${service.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Unsere Garantien</h2>
            <p className="text-xl text-gray-600">Qualität und Service auf höchstem Niveau</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Unsere Branchen</h2>
          <p className="text-xl text-gray-600">Expertise in vielfältigen Bereichen</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {branches.map((branch, index) => (
            <div key={index} className="bg-gradient-to-br from-green-500 to-green-700 text-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center font-semibold">
              {branch}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold">500+</div>
              <div className="text-xl">Vermittelte Fachkräfte</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">200+</div>
              <div className="text-xl">Partner-Unternehmen</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">95%</div>
              <div className="text-xl">Zufriedenheitsrate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Bereit durchzustarten?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Kontaktieren Sie uns noch heute für eine kostenlose Beratung
          </p>
          <Link 
            href="/kontakt" 
            className="inline-block bg-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
}
