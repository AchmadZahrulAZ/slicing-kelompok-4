import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const MetadataContext = createContext(); // Membuat "wadah" untuk metadata

const MetadataProvider = ({ children }) => {
  // Metadata default untuk fallback jika halaman tidak punya metadata spesifik
  const defaultMetadata = {
    title: 'Website Default Title',
    description: 'This is the default description for the website.',
    keywords: 'default, website, react',
    author: 'Kelompok 4',
  };

  // Metadata untuk setiap halaman
  const metadata = {
    about: {
      title: 'About Us',
      description: 'This is About page, you can find our mission & vision, and our team member here.',
      keywords: 'About Us, Team',
      author: 'Mas Oryza',
    },
    blog: {
      title: 'Blog',
      description: 'This is Our Blog Page, you can find our latest Blog posts here.',
      keywords: 'Blog',
      author: 'Mas Achmad',
    },
    blogdetail: {
      title: 'Blog Detail',
      description: 'This is Our Blog Detail Page, you can find our details Blog posts here.',
      keywords: 'Blog Detail',
      author: 'Mas Achmad',
    },
    contact: {
      title: 'Contact Us',
      description: 'This is Contact page, you can contact us via email, phone, or social media platforms',
      keywords: 'Contact',
      author: 'Mas Oryza',
    },
    homepage: {
      title: 'Homepage',
      description: 'This is Home page, there are some information about our company, our services, and our team.',
      keywords: 'homepage',
      author: 'Mas Oryza, Mas Sandy, Mas Zulfatah, Mas Achmad',
    },
    ourservices: {
      title: 'Our Services',
      description: 'This is OurServices page, you can find our services: Web Design/ Development, UI/UX Design, Website Migration, App Development, HubSpot Integration, Email Marketing, and more',
      keywords: 'Services, Our Services',
      author: 'Mas Achmad',
    },
    portfolio: {
      title: 'Portfolio',
      description: 'This is Our Portfolio Page, you can find our project portfolio with some categories: Life, Moments, Nature, Stories, and Travel.',
      keywords: 'Portfolio',
      author: 'Mas Sandy',
    },
  };

  return (
    <MetadataContext.Provider value={{ defaultMetadata, metadata }}>
      {children} {/* Semua halaman akan "dibungkus" oleh MetadataContext */}
    </MetadataContext.Provider>
  );
};

MetadataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MetadataProvider, MetadataContext };
