import React from 'react';
import { Search, Code, Smartphone, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We dive deep into your requirements and vision to create the perfect roadmap.'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Our expert team brings your vision to life using cutting-edge technologies.'
  },
  {
    icon: Smartphone,
    title: 'Testing',
    description: 'Rigorous testing ensures your product works flawlessly across all devices.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'We help you launch and provide ongoing support for your success.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-gray-600">How we turn your ideas into reality</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 rounded-xl bg-indigo-100 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors mx-auto">
                    <step.icon className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}