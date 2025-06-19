
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import sampleData from '@/data/sampleData.json';

const About = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-brand text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-brand-orange">CloudSoft Kenya</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We are passionate about empowering Kenyan businesses with cutting-edge technology solutions 
            that drive growth, efficiency, and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="hover-lift border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-brand-navy">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand-gray">
                  To democratize access to advanced technology solutions for Kenyan businesses of all sizes, 
                  helping them compete globally while staying rooted in local values and understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-brand-navy">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand-gray">
                  To be East Africa's leading technology partner, known for innovative solutions, 
                  exceptional service, and measurable impact on our clients' business success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleData.team.map((member, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{member.name}</h3>
                  <p className="text-brand-orange font-semibold mb-4">{member.role}</p>
                  <p className="text-brand-gray">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Why Choose <span className="text-gradient">CloudSoft Kenya</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Local Expertise</h3>
              <p className="text-brand-gray">Deep understanding of the Kenyan market and business environment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Proven Track Record</h3>
              <p className="text-brand-gray">50+ successful projects with 100% client satisfaction rate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">24/7 Support</h3>
              <p className="text-brand-gray">Round-the-clock technical support and maintenance services</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Affordable Solutions</h3>
              <p className="text-brand-gray">Enterprise-grade solutions at prices that make sense for SMEs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
