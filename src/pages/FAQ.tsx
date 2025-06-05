
import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: 'Orders & Shipping',
      faqs: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping typically takes 3-7 business days within India. Express shipping is available for 1-2 business days delivery. International shipping may take 7-14 business days depending on the destination.'
        },
        {
          question: 'Do you offer free shipping?',
          answer: 'Yes! We offer free shipping on all orders above ₹999. For orders below this amount, standard shipping charges of ₹99 apply.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Absolutely! Once your order is shipped, you\'ll receive a tracking number via email and SMS. You can also track your order from your account dashboard.'
        },
        {
          question: 'Can I change or cancel my order?',
          answer: 'Orders can be modified or cancelled within 24 hours of placement. After this time, we cannot guarantee changes as items may have already been shipped.'
        }
      ]
    },
    {
      title: 'Products & Quality',
      faqs: [
        {
          question: 'Are your products authentic?',
          answer: 'Yes, all our products are officially licensed and authentic. We work directly with anime studios and authorized distributors to ensure authenticity.'
        },
        {
          question: 'What materials are used in your apparel?',
          answer: 'Our apparel is made from high-quality cotton blends, polyester, and other premium materials. Each product page lists the specific material composition.'
        },
        {
          question: 'Do you have size charts available?',
          answer: 'Yes, detailed size charts are available on each product page. We recommend checking the size guide before ordering as sizing may vary between different anime series.'
        },
        {
          question: 'How do I care for my anime merchandise?',
          answer: 'Care instructions are provided with each product. Generally, we recommend washing apparel in cold water and air drying to preserve prints and colors.'
        }
      ]
    },
    {
      title: 'Returns & Refunds',
      faqs: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for unworn, unwashed items in original packaging. Items must be in new condition with all tags attached.'
        },
        {
          question: 'How do I initiate a return?',
          answer: 'Log into your account, go to "My Orders," and click "Return Item" next to the product you want to return. Follow the instructions to generate a return label.'
        },
        {
          question: 'When will I receive my refund?',
          answer: 'Refunds are processed within 5-7 business days after we receive and inspect the returned item. The amount will be credited to your original payment method.'
        },
        {
          question: 'Can I exchange an item for a different size?',
          answer: 'Yes, exchanges are available for size and color variations of the same product, subject to availability. The exchange process takes 7-10 business days.'
        }
      ]
    },
    {
      title: 'Payments & Pricing',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit/debit cards, UPI payments, net banking, digital wallets (Paytm, PhonePe, etc.), and cash on delivery for eligible orders.'
        },
        {
          question: 'Is it safe to shop on your website?',
          answer: 'Yes, our website uses SSL encryption to protect your personal and payment information. We never store your card details on our servers.'
        },
        {
          question: 'Do you offer EMI options?',
          answer: 'Yes, EMI options are available for orders above ₹3,000 through select credit cards and buy-now-pay-later services.'
        },
        {
          question: 'Why do prices sometimes change?',
          answer: 'Prices may fluctuate due to promotions, seasonal sales, currency exchange rates for imported items, or changes in manufacturing costs.'
        }
      ]
    },
    {
      title: 'Account & Membership',
      faqs: [
        {
          question: 'Do I need an account to place an order?',
          answer: 'While you can checkout as a guest, creating an account helps you track orders, save addresses, maintain a wishlist, and receive exclusive member benefits.'
        },
        {
          question: 'How do I reset my password?',
          answer: 'Click "Forgot Password" on the login page, enter your email address, and follow the instructions in the reset email we send you.'
        },
        {
          question: 'Can I change my account information?',
          answer: 'Yes, you can update your profile information, shipping addresses, and preferences from your account dashboard at any time.'
        },
        {
          question: 'Do you have a loyalty program?',
          answer: 'Yes! Our AnimeVerse Rewards program offers points for every purchase, early access to new products, and exclusive discounts for members.'
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

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
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-anime-text mb-8 anime-text">
                Find answers to common questions about our products and services
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-anime-textSecondary w-5 h-5" />
                  <Input
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/80 border-sky-200 text-anime-text placeholder-anime-textSecondary h-12 anime-text"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center glass-card p-12">
                <p className="text-xl text-anime-text anime-text">
                  No FAQs found matching your search. Try different keywords or browse all categories.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredFAQs.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="glass-card p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-text text-neon-skyBlue anime-title">
                      {category.title}
                    </h2>
                    
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border border-sky-200 rounded-lg px-6"
                        >
                          <AccordionTrigger className="text-left anime-text text-anime-text hover:text-neon-skyBlue">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-anime-textSecondary anime-text pt-4">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-anime-light/50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto glass-card p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 neon-text text-neon-skyBlue anime-title">
                Still have questions?
              </h3>
              <p className="text-anime-text mb-6 anime-text">
                Can't find what you're looking for? Our customer support team is here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-neon px-8 py-3 inline-block">
                  Contact Support
                </a>
                <a href="https://wa.me/919876543210" className="border border-sky-200 px-8 py-3 rounded-lg hover:bg-sky-50 transition-colors anime-text text-anime-text">
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
