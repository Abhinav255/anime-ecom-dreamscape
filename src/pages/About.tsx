
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Heart, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '50,000+' },
    { label: 'Products Sold', value: '200,000+' },
    { label: 'Anime Series', value: '100+' },
    { label: 'Years of Service', value: '5+' }
  ];

  const team = [
    {
      name: 'Akira Tanaka',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      bio: 'Anime enthusiast since childhood, bringing authentic merchandise to fans worldwide.'
    },
    {
      name: 'Sakura Yamamoto',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b776?w=300&h=300&fit=crop',
      bio: 'Creative director ensuring every product meets the highest quality standards.'
    },
    {
      name: 'Hiroshi Sato',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Building bridges between anime creators and the global fan community.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Authenticity',
      description: 'We partner directly with creators to bring you official, high-quality merchandise.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our team consists of true anime fans who understand what collectors really want.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a global community where anime fans can connect and share their passion.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Every product is carefully selected and tested to meet our high standards.'
    }
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
                About AnimeVerse
              </h1>
              <p className="text-xl md:text-2xl text-anime-text mb-8 anime-text">
                Your gateway to authentic anime merchandise and collectibles
              </p>
              <div className="w-24 h-1 bg-neon-skyBlue mx-auto glow-effect" />
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text text-neon-skyBlue anime-title">
                Our Story
              </h2>
              <div className="space-y-4 text-anime-text anime-text">
                <p>
                  Founded in 2019 by a group of passionate anime fans, AnimeVerse began as a small online store 
                  dedicated to bringing authentic Japanese anime merchandise to fans around the world.
                </p>
                <p>
                  What started as a hobby project quickly grew into a thriving community of collectors, 
                  cosplayers, and anime enthusiasts who share our vision of quality and authenticity.
                </p>
                <p>
                  Today, we're proud to be one of the leading anime merchandise retailers, 
                  partnering directly with Japanese studios and creators to offer exclusive items 
                  you won't find anywhere else.
                </p>
              </div>
            </div>
            <div className="glass-card p-8">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                alt="Our workspace"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-anime-light/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text text-neon-skyBlue anime-title">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center glass-card p-6">
                  <div className="text-3xl md:text-4xl font-bold text-neon-skyBlue mb-2 anime-title">
                    {stat.value}
                  </div>
                  <div className="text-anime-text anime-text">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text text-neon-skyBlue anime-title">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-anime-gradient flex items-center justify-center glow-effect">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 neon-text text-neon-skyBlue anime-title">
                  {value.title}
                </h3>
                <p className="text-anime-text anime-text">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-anime-light/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text text-neon-skyBlue anime-title">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4 glow-effect"
                  />
                  <h3 className="text-xl font-bold mb-2 neon-text text-neon-skyBlue anime-title">
                    {member.name}
                  </h3>
                  <p className="text-anime-textSecondary mb-3 anime-text font-semibold">
                    {member.role}
                  </p>
                  <p className="text-anime-text anime-text">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 neon-text text-neon-skyBlue anime-title">
              Our Mission
            </h2>
            <p className="text-xl text-anime-text mb-8 anime-text leading-relaxed">
              To connect anime fans worldwide with authentic, high-quality merchandise while 
              supporting the creators and studios that bring our favorite stories to life. 
              We believe every fan deserves access to official products that celebrate their passion.
            </p>
            <div className="glass-card p-8">
              <p className="text-lg text-anime-text anime-text italic">
                "Anime isn't just entertainment—it's a culture, a community, and a way of life. 
                We're here to help you express that passion through authentic merchandise."
              </p>
              <p className="text-anime-textSecondary mt-4 anime-text">
                - Akira Tanaka, Founder
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
