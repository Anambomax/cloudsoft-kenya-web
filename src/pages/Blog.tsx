
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import sampleData from '@/data/sampleData.json';

const Blog = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-brand text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-brand-orange">Blog</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and tips in technology, 
            business growth, and digital transformation in Kenya.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sampleData.blog.map((post) => (
              <Card key={post.id} className="hover-lift border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-brand-orange text-white">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-brand-gray">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-navy">{post.title}</CardTitle>
                  <CardDescription className="text-brand-gray">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Stay <span className="text-gradient">Updated</span>
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Subscribe to our newsletter for the latest tech insights and business tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
              <Button className="bg-brand-orange hover:bg-brand-coral text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
