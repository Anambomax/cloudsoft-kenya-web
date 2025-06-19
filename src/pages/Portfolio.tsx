
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import sampleData from '@/data/sampleData.json';

const Portfolio = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-brand text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-brand-orange">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover how we've helped Kenyan businesses transform their operations 
            and achieve remarkable growth through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sampleData.portfolio.map((project) => (
              <Card key={project.id} className="hover-lift border-0 shadow-lg overflow-hidden">
                <div className="h-48 bg-cover bg-center" 
                     style={{ backgroundImage: `url(${project.image})` }}>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-brand-orange text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-navy">{project.title}</CardTitle>
                  <CardDescription className="text-brand-gray">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-brand-navy mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="border-brand-orange text-brand-orange">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Our <span className="text-gradient">Impact</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">50+</div>
              <div className="text-brand-gray">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">100%</div>
              <div className="text-brand-gray">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">25+</div>
              <div className="text-brand-gray">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">3+</div>
              <div className="text-brand-gray">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-brand-orange">Project</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together.
          </p>
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-coral text-white">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
