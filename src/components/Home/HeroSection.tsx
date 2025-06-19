
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Transform Your Business with{' '}
            <span className="text-gradient">Smart Technology</span> Solutions
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
            From AI automation to custom software development, we help Kenyan businesses 
            thrive in the digital age with cutting-edge solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              asChild
              size="lg" 
              className="bg-brand-orange hover:bg-brand-coral text-white px-8 py-4 text-lg"
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-brand-orange">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-brand-orange">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-brand-orange">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
