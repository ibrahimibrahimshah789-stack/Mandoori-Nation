import React from 'react';
import { ArrowRight, Users, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import SEO from '../components/SEO';
import { SERVICES, BLOG_POSTS } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      <SEO title="Home" description="Madoori Nation - United for Development" />
      
      {/* Hero Section */}
      <section className="relative w-full aspect-[21/9] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Placeholder for Main Hero - Replace with one of your group photos */}
        <img
          src="https://placehold.co/1600x700/0F4C81/FFFFFF?text=Madoori+Nation+Community"
          alt="Madoori Community Gathering"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10"></div>
        
        <div className="relative z-20 max-w-[1200px] w-full mx-auto px-4 text-center md:text-left">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6 leading-tight drop-shadow-md">
            Welcome to <span className="text-accent">Madoori Nation</span><br />
            Unity. Heritage. Progress.
          </h1>
          <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl font-light">
            We are a community dedicated to the welfare, development, and prosperity of our people. United by tradition, driving towards a better future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <NavLink 
              to="/about" 
              className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Our Mission <ArrowRight size={18} />
            </NavLink>
            <NavLink 
              to="/gallery" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-colors"
            >
              View Gallery
            </NavLink>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl text-primary mb-6">Serving the Community</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Madoori Nation serves as the digital voice and hub for our village. From organizing the local Jirga to ensuring our schools are well-equipped, we are at the forefront of local development.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Upholding traditional values',
                'Promoting education for all',
                'Community-led dispute resolution',
                'Infrastructure development'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <Star size={16} className="text-accent mr-3 fill-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <NavLink to="/about" className="text-primary font-semibold hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent inline-flex items-center">
              Learn more about our history <ArrowRight size={16} className="ml-1" />
            </NavLink>
          </div>
          <div className="relative">
             <div className="absolute top-4 left-4 w-full h-full bg-accent/20 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
             {/* Replace with a picture of elders or community */}
             <img 
               src="https://placehold.co/600x500/0F4C81/FFFFFF?text=Elders+Meeting" 
               alt="Community Elders" 
               className="rounded-lg shadow-xl w-full h-auto object-cover"
               loading="lazy"
               width="600"
               height="500"
             />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-accent font-bold tracking-wider uppercase text-sm">Our Focus</span>
             <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-2">Areas of Work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-transparent hover:border-accent">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-4">
                   <Users className="text-primary" /> 
                </div>
                <h3 className="font-heading font-semibold text-xl text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-accent font-bold tracking-wider uppercase text-sm">Community News</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-2">Latest Updates</h2>
            </div>
            <NavLink to="/blog" className="hidden md:flex text-primary font-semibold hover:text-accent transition-colors items-center">
              View all news <ArrowRight size={18} className="ml-2" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-2 space-x-2">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{post.author}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-800 mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <NavLink to="/blog" className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center">
              View all news <ArrowRight size={18} className="ml-2" />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
