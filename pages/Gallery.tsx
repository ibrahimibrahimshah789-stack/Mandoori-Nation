import React, { useState } from 'react';
import SEO from '../components/SEO';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../constants';
import { GalleryItem } from '../types';
import { X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <SEO title="Gallery" description="Photos from Madoori Nation community events and landmarks." />

      <div className="bg-gray-50 py-16 text-center">
        <h1 className="font-heading font-bold text-4xl text-primary mb-4">Our Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Moments of unity, meetings of progress, and the faces of our community.
        </p>
      </div>

      <section className="py-12 max-w-[1200px] mx-auto px-4 min-h-screen">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {GALLERY_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(item)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <ZoomIn className="mb-2" size={32} />
                <h3 className="font-bold text-lg text-center">{item.title}</h3>
                <span className="text-xs uppercase tracking-wider text-accent">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No photos found in this category.
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors p-2"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          <div 
            className="max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl" 
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-400 text-sm">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
