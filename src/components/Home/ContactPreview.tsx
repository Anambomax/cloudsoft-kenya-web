
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import sampleData from '@/data/sampleData.json';

const ContactPreview = () => {
  return (
    <section className="py-20 bg-brand-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-brand-orange">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help your business grow and succeed in Kenya's digital economy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-brand-orange">{sampleData.company.phone}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                <p className="text-brand-orange">{sampleData.company.whatsapp}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-brand-orange">{sampleData.company.email}</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-coral text-white">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
