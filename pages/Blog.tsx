import React from 'react';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <>
      <SEO title="Blog" description="Insights, news, and articles from Madoori Nation." />
      
      <div className="bg-white py-16 border-b border-gray-100">
         <div className="max-w-[1200px] mx-auto px-4">
            <h1 className="font-heading font-bold text-4xl text-primary mb-4">The Journal</h1>
            <p className="text-gray-600 text-lg">Thoughts on design, technology, and culture.</p>
         </div>
      </div>

      <section className="py-16 max-w-[1200px] mx-auto px-4 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-primary text-white text-xs px-3 py-1 m-4 rounded-sm">
                  {post.date}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="font-heading font-bold text-xl text-gray-800 mb-3 hover:text-accent transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                  <span className="font-medium text-primary">{post.author}</span>
                  <button className="text-accent hover:underline font-medium">Read More</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
