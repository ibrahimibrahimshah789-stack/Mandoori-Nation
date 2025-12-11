import React from 'react';
import SEO from '../components/SEO';
import { COMPANY_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <>
      <SEO title="About Us" description={`Learn more about ${COMPANY_NAME} and our mission.`} />
      
      <div className="bg-primary text-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Heritage</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            A proud history, a united present, and a promising future.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Replace with an image of an old building or elders */}
            <img 
              src="https://placehold.co/600x800/0F4C81/FFFFFF?text=Village+History" 
              alt="Madoori Heritage" 
              className="rounded-lg shadow-2xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-heading font-bold text-3xl text-primary mb-6">About Madoori Nation</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Madoori Nation represents the collective spirit of the people of Madoori and Peer Piyai. We are a community bound by strong traditions of brotherhood, mutual respect, and a desire for progress.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our elders provide the wisdom and guidance necessary to navigate modern challenges while preserving our cultural identity. Through our local councils and community efforts, we strive to improve the quality of life for every resident, focusing on education, healthcare, and infrastructure.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <span className="block text-4xl font-bold text-accent mb-2">100+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Families</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-accent mb-2">50+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Years of Unity</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-accent mb-2">1</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Primary School</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-accent mb-2">Unite</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">For Progress</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-primary mb-12">Community Elders & Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* You can replace these with specific portraits if available */}
             {[1, 2, 3].map((i) => (
               <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                 <img src={`https://placehold.co/300x300/0F4C81/FFFFFF?text=Elder+${i}`} alt="Community Leader" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                 <h3 className="font-bold text-lg text-primary">Community Elder {i}</h3>
                 <p className="text-accent text-sm mb-2">Social Worker</p>
                 <p className="text-gray-500 text-sm">Serving the village with dedication.</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
