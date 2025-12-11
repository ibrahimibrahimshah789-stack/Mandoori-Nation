import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const defaultDescription = "Madoori Nation - A creative agency specializing in design, web, and marketing.";
  const metaDescription = description || defaultDescription;
  const siteTitle = `${title} | Madoori Nation`;

  useEffect(() => {
    document.title = siteTitle;
    
    // Helper to update meta tags safely
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateOG = (property: string, content: string) => {
       let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    }

    updateMeta('description', metaDescription);
    updateOG('og:title', siteTitle);
    updateOG('og:description', metaDescription);
    updateOG('og:type', 'website');
    updateOG('og:image', 'https://picsum.photos/1200/630'); // Placeholder OG image

  }, [title, metaDescription, siteTitle]);

  return null;
};

export default SEO;
