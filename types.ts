export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  slug: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  width: number;
  height: number;
}

export enum Page {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  GALLERY = '/gallery',
  BLOG = '/blog',
  CONTACT = '/contact',
}
