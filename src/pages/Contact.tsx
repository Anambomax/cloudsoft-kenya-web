
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import sampleData from '@/data/sampleData.json';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-brand text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-brand-orange">Us</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Get in touch for a free consultation and personalized quote.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-brand-navy">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service of Interest</Label>
                    <select 
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="software-development">Software Development</option>
                      <option value="website-development">Website Development</option>
                      <option value="web-hosting">Web Hosting Services</option>
                      <option value="system-administration">System Administration</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  
                  <Button type="submit" className="bg-brand-orange hover:bg-brand-coral text-white w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-brand-navy">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Call Us</h3>
                    <p className="text-brand-gray">{sampleData.company.phone}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">WhatsApp</h3>
                    <p className="text-brand-gray">{sampleData.company.whatsapp}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Email</h3>
                    <p className="text-brand-gray">{sampleData.company.email}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">Address</h3>
                    <p className="text-brand-gray">{sampleData.company.address}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-brand-navy">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-brand-gray">Monday - Friday:</span>
                    <span className="text-brand-navy font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">Saturday:</span>
                    <span className="text-brand-navy font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">Sunday:</span>
                    <span className="text-brand-navy font-semibold">Closed</span>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-brand-gray">Google Maps Integration Coming Soon</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
