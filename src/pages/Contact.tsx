
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@animeverse.com',
      description: 'Get in touch via email for detailed inquiries'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      description: 'Speak directly with our customer support team'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mumbai, Maharashtra, India',
      description: 'Our headquarters and main distribution center'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+91 98765 43210',
      description: 'Quick support via WhatsApp messaging'
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-anime-gradient opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text text-neon-skyBlue anime-title">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-anime-text mb-8 anime-text">
                We're here to help with all your anime merchandise needs
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-3xl font-bold mb-6 neon-text text-neon-skyBlue anime-title">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="anime-text text-anime-text">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/80 border-sky-200 anime-text"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="anime-text text-anime-text">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/80 border-sky-200 anime-text"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="anime-text text-anime-text">Subject</Label>
                  <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                    <SelectTrigger className="bg-white/80 border-sky-200 anime-text">
                      <SelectValue placeholder="Choose a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="order-inquiry">Order Inquiry</SelectItem>
                      <SelectItem value="product-question">Product Question</SelectItem>
                      <SelectItem value="shipping-issue">Shipping Issue</SelectItem>
                      <SelectItem value="return-refund">Return/Refund</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="anime-text text-anime-text">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/80 border-sky-200 anime-text min-h-32"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button type="submit" className="btn-neon w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h2 className="text-3xl font-bold mb-6 neon-text text-neon-skyBlue anime-title">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-anime-gradient flex items-center justify-center glow-effect flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-anime-text anime-title">
                          {info.title}
                        </h3>
                        <p className="text-neon-skyBlue font-semibold anime-text">
                          {info.details}
                        </p>
                        <p className="text-anime-textSecondary text-sm anime-text">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Hours */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-4 neon-text text-neon-skyBlue anime-title flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Support Hours
                </h3>
                <div className="space-y-3">
                  {supportHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-anime-text anime-text">{schedule.day}</span>
                      <span className="text-anime-textSecondary anime-text">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Actions */}
              <div className="space-y-4">
                <Button className="btn-neon w-full h-12">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button variant="outline" className="w-full h-12 anime-text">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Support
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Quick Links */}
          <div className="mt-16 glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 neon-text text-neon-skyBlue anime-title text-center">
              Before you contact us, check our FAQ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="anime-text">
                Shipping Information
              </Button>
              <Button variant="outline" className="anime-text">
                Return Policy
              </Button>
              <Button variant="outline" className="anime-text">
                Size Guide
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
