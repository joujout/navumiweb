import React from 'react';
import { Users, Code2, Award, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '100+',
    label: 'Happy Clients',
    description: 'Trusted by businesses worldwide'
  },
  {
    icon: Code2,
    value: '250+',
    label: 'Projects Completed',
    description: 'Delivering excellence consistently'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
    description: 'Industry expertise'
  },
  {
    icon: Star,
    value: '50+',
    label: '5-Star Reviews',
    description: 'Client satisfaction guaranteed'
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                <stat.icon className="h-10 w-10 mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}