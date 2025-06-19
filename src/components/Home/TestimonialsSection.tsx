
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import sampleData from '@/data/sampleData.json';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleData.testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-brand-orange mb-4" />
                <p className="text-brand-gray mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-brand-navy">{testimonial.name}</h4>
                    <p className="text-sm text-brand-gray">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-brand-orange">★</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
