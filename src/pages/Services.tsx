
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, Home } from 'lucide-react';
import sampleData from '@/data/sampleData.json';

const Services = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="w-12 h-12" />;
      case 'home':
        return <Home className="w-12 h-12" />;
      default:
        return <Briefcase className="w-12 h-12" />;
    }
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-brand text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-brand-orange">Services</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business 
            and accelerate growth in Kenya's digital economy.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sampleData.services.map((service) => (
              <Card key={service.id} className="hover-lift border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mb-4 text-white">
                    {getIcon(service.icon)}
                  </div>
                  <CardTitle className="text-2xl font-bold text-brand-navy">{service.title}</CardTitle>
                  <CardDescription className="text-brand-gray text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-brand-navy mb-4">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-brand-gray">
                        <span className="w-2 h-2 bg-brand-orange rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get <span className="text-brand-orange">Started</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-coral text-white">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
