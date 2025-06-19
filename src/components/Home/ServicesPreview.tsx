
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Home } from 'lucide-react';
import sampleData from '@/data/sampleData.json';

const ServicesPreview = () => {
  const services = sampleData.services.slice(0, 3); // Show only first 3 services

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="w-8 h-8" />;
      case 'home':
        return <Home className="w-8 h-8" />;
      default:
        return <Briefcase className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="hover-lift border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {getIcon(service.icon)}
                </div>
                <CardTitle className="text-xl font-bold text-brand-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-brand-gray mb-4">
                  {service.description}
                </Car

Description>
                <ul className="text-sm text-brand-gray space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-brand-navy hover:bg-brand-navy/90 text-white">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
