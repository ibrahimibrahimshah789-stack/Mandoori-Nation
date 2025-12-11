import { BlogPost, GalleryItem, Service } from './types';

export const COMPANY_NAME = "Madoori Nation";
export const CONTACT_EMAIL = "contact@madoorination.com";
export const ADDRESS = "Madoori, Peer Piyai, District Nowshera";

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Community Jirga',
    description: 'Resolving disputes and making decisions through our traditional council of elders to ensure peace and justice.',
    iconName: 'Users',
  },
  {
    id: '2',
    title: 'Education Support',
    description: 'Supporting the Government Primary School Mandoori and ensuring every child has access to quality education.',
    iconName: 'BookOpen',
  },
  {
    id: '3',
    title: 'Social Welfare',
    description: 'Providing support for the needy, healthcare assistance, and community development projects.',
    iconName: 'Heart',
  },
  {
    id: '4',
    title: 'Infrastructure',
    description: 'Working on improving roads, electricity, and water supply for the village.',
    iconName: 'Home',
  }
];

// NOTE: Replace the placeholder URLs below with the actual paths to the images you uploaded.
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', title: 'Elders Council Meeting', category: 'Meetings', imageUrl: 'https://placehold.co/800x600/0F4C81/FFFFFF?text=Elders+Jirga+Meeting', width: 800, height: 600 },
  { id: '2', title: 'Govt Primary School Mandoori', category: 'Education', imageUrl: 'https://placehold.co/800x600/0F4C81/FFFFFF?text=School+Signboard', width: 800, height: 600 },
  { id: '3', title: 'Community Gathering', category: 'Events', imageUrl: 'https://placehold.co/800x600/0F4C81/FFFFFF?text=Community+Gathering', width: 800, height: 600 },
  { id: '4', title: 'Welcome to Peer Piyai', category: 'Landmarks', imageUrl: 'https://placehold.co/800x1200/0F4C81/FFFFFF?text=Welcome+Sign', width: 800, height: 1200 },
  { id: '5', title: 'Discussion on Development', category: 'Meetings', imageUrl: 'https://placehold.co/800x600/0F4C81/FFFFFF?text=Development+Discussion', width: 800, height: 600 },
  { id: '6', title: 'Local Business', category: 'Community', imageUrl: 'https://placehold.co/800x600/0F4C81/FFFFFF?text=Local+Shop', width: 800, height: 600 },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Outcomes of the Recent Grand Jirga',
    excerpt: 'The elders met this week to discuss the new road project and resolve pending land disputes in the village.',
    date: 'Oct 24, 2023',
    author: 'Admin',
    imageUrl: 'https://placehold.co/600x400/0F4C81/FFFFFF?text=Jirga+Session',
    slug: 'recent-jirga-outcomes'
  },
  {
    id: '2',
    title: 'Improving Our Primary School',
    excerpt: 'Community members visited the Govt Primary School to assess renovation needs and support the staff.',
    date: 'Nov 12, 2023',
    author: 'Education Comm.',
    imageUrl: 'https://placehold.co/600x400/0F4C81/FFFFFF?text=School+Visit',
    slug: 'improving-primary-school'
  },
  {
    id: '3',
    title: 'Winter Relief Distribution',
    excerpt: 'Madoori Nation volunteers distributed warm clothes and blankets to deserving families.',
    date: 'Dec 05, 2023',
    author: 'Welfare Team',
    imageUrl: 'https://placehold.co/600x400/0F4C81/FFFFFF?text=Relief+Work',
    slug: 'winter-relief'
  }
];

export const GALLERY_CATEGORIES = ['All', 'Meetings', 'Education', 'Events', 'Community', 'Landmarks'];
