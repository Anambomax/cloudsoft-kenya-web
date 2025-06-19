
import React from 'react';
import HeroSection from '@/components/Home/HeroSection';
import ServicesPreview from '@/components/Home/ServicesPreview';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import ContactPreview from '@/components/Home/ContactPreview';

const Index = () => {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <TestimonialsSection />
      <ContactPreview />
    </div>
  );
};

export default Index;
