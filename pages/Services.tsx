import React from 'react';
import SEO from '../components/SEO';
import { SERVICES } from '../constants';
import { CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <>
      <SEO title="Our Work" description="Explore our community services and social welfare initiatives." />
      
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">Our Work</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Building a stronger, self-reliant community through collective action and dedicated service.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <img 
                    src={`https://placehold.co/800x600/0F4C81/FFFFFF?text=${service.title.replace(' ', '+')}`} 
                    alt={service.title} 
                    className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-block p-3 bg-blue-50 rounded-lg text-primary mb-4">
                    <span className="font-bold text-2xl">0{index + 1}</span>
                  </div>
                  <h2 className="font-heading font-bold text-3xl text-primary mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle size={18} className="text-accent mr-3" />
                      Community Driven
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle size={18} className="text-accent mr-3" />
                      Transparent Process
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle size={18} className="text-accent mr-3" />
                      For Future Generations
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl mb-6">Want to contribute to the cause?</h2>
          <p className="text-blue-200 mb-8 text-lg">Join us in making Madoori Nation a model community.</p>
          <a href="/#/contact" className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all shadow-lg transform hover:-translate-y-1">
            Get Involved
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
