
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Bot, Code, Globe, Server, Shield } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Solutions',
    description: 'Smart chatbots, data analysis, and automation tools to streamline your business operations.',
    features: ['Custom Chatbots', 'Data Analytics', 'Process Automation']
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom web, mobile, and desktop applications tailored to your business needs.',
    features: ['Web Applications', 'Mobile Apps', 'Desktop Software']
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Professional websites that convert visitors into customers and drive business growth.',
    features: ['Business Websites', 'E-commerce', 'Portfolio Sites']
  },
  {
    icon: Server,
    title: 'Web Hosting',
    description: 'Reliable hosting solutions with 99.9% uptime and 24/7 technical support.',
    features: ['Shared Hosting', 'VPS Hosting', 'Email Services']
  },
  {
    icon: Shield,
    title: 'System Administration',
    description: 'Complete server management, security monitoring, and backup solutions.',
    features: ['Linux Servers', 'Security Monitoring', 'Automated Backups']
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-brand-navy">{service.title}</CardTitle>
                <CardDescription className="text-brand-gray">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-brand-gray">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-coral text-white">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
