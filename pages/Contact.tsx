import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ADDRESS, CONTACT_EMAIL } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <>
      <SEO title="Contact" description="Get in touch with Madoori Nation." />

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl text-primary mb-4">Get In Touch</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Have a project in mind or just want to say hello? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="bg-primary text-white p-8 md:p-12 rounded-2xl shadow-xl h-full">
                <h2 className="font-heading font-bold text-2xl mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <Mail className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-blue-200 text-sm mt-1">{CONTACT_EMAIL}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <Phone className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-blue-200 text-sm mt-1">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <MapPin className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p className="text-blue-200 text-sm mt-1">{ADDRESS}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-sm text-blue-200">
                    We typically reply within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Quote">Project Quote</option>
                    <option value="Careers">Careers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full py-4 rounded-lg font-bold text-white transition-all flex justify-center items-center gap-2 ${
                    status === 'success' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-accent hover:bg-orange-600'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : status === 'success' ? (
                    'Message Sent!'
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
