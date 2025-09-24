import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Building, 
  MessageSquare, 
  FileText, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Shield,
  Lock,
  Instagram,
  Linkedin,
  Brain,
  Calendar,
  Clock
} from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { LoadingSpinner } from './LoadingSpinner';
import { supabase, type ConsultationRequestInsert } from '../lib/supabase';

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  serviceSelection: string;
  problems: string;
  additionalInfo: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  companyName?: string;
  serviceSelection?: string;
  problems?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    serviceSelection: '',
    problems: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Handle form submission success - show Calendly instead of redirect
  useEffect(() => {
    if (isSubmitted) {
      // Smooth transition to show Calendly section
      setTimeout(() => {
        setShowCalendly(true);
        // Scroll to Calendly section smoothly
        setTimeout(() => {
          const calendlySection = document.getElementById('calendly-section');
          if (calendlySection) {
            calendlySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }, 500);
    }
  }, [isSubmitted]);

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    { value: 'website-design', label: 'Website Design & Funnels' },
    { value: 'ai-agents', label: 'Smart AI Agents' },
    { value: 'crm-integration', label: 'CRM Integration & Appointment Setting' },
    { value: 'all-services', label: 'All Services (Complete Package)' }
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Company Name validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = 'Company name must be at least 2 characters';
    }

    // Service Selection validation
    if (!formData.serviceSelection) {
      newErrors.serviceSelection = 'Please select a service';
    }

    // Problems validation
    if (!formData.problems.trim()) {
      newErrors.problems = 'Please describe the problems you\'re looking to solve';
    } else if (formData.problems.trim().length < 50) {
      newErrors.problems = 'Please provide at least 50 characters describing your problems';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const generateCSRFToken = (): string => {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for Supabase
      const consultationData: ConsultationRequestInsert = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        company_name: formData.companyName.trim(),
        service_selection: formData.serviceSelection,
        problems: formData.problems.trim(),
        additional_info: formData.additionalInfo.trim()
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from('consultation_requests')
        .insert([consultationData])
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      console.log('Consultation request submitted successfully:', data);
      setIsSubmitted(true);
      
      // Don't reset form data - keep it visible for user reference

    } catch (error) {
      console.error('Form submission error:', error);
      
      if (error instanceof Error) {
        if (error.message.includes('Database error')) {
          setSubmitError('There was a database error. Please try again or contact support.');
        } else if (error.message.includes('network')) {
          setSubmitError('Network error. Please check your connection and try again.');
        } else {
          setSubmitError('There was an error submitting your form. Please try again.');
        }
      } else {
        setSubmitError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-dark-50 font-inter relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-xl border-b border-dark-800/50 transition-all duration-300">
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center space-x-4 group flex-shrink-0">
              <div className="relative">
                <Brain className="w-10 h-10 text-primary-500 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl animate-pulse-glow"></div>
              </div>
              <span className="text-2xl font-bold font-montserrat tracking-tight transition-all duration-300 group-hover:text-primary-400">
                THEO<span className="text-primary-500">CORTEX</span><span className="text-dark-400 font-inter">.AI</span>
              </span>
            </a>
            
            <div className="flex items-center space-x-4 md:space-x-8 ml-4 md:ml-0">
              <InteractiveButton 
                onClick={() => window.location.href = '/'} 
                variant="secondary" 
                className="flex items-center space-x-1 px-3 py-2 text-sm md:px-8 md:py-4 md:text-base flex-shrink-0 min-h-[44px] min-w-[44px]"
                aria-label="Return to homepage"
              >
                <span className="text-base">←</span>
                <span className="hidden sm:inline md:hidden">Back</span>
                <span className="hidden md:inline">Back to Homepage</span>
              </InteractiveButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute inset-0 geometric-bg"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `linear-gradient(45deg, #0066FF, #6600FF)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-8 tracking-tighter">
              SCHEDULE YOUR <span className="text-gradient">FREE CONSULTATION</span>
            </h1>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed font-light">
              Tell us about your business challenges and goals. We'll create a custom AI automation strategy just for you.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="glass-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isSubmitted 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                      : 'bg-gradient-to-r from-primary-500 to-secondary-500'
                  }`}>
                    {isSubmitted ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <span className="text-white font-montserrat font-bold">1</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-lg">
                      Step 1 of 2: Consultation Form
                      {isSubmitted && <span className="text-green-400 ml-2">✅</span>}
                    </h3>
                    <p className="text-dark-400 text-sm">
                      {isSubmitted ? 'Form completed successfully!' : 'Tell us about your business needs'}
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block w-16 h-1 bg-dark-700 rounded-full mx-4">
                  <div className={`h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-1000 ${
                    isSubmitted ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    showCalendly 
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500' 
                      : 'bg-dark-700'
                  }`}>
                    {showCalendly ? (
                      <Calendar className="w-6 h-6 text-white" />
                    ) : (
                      <span className="text-dark-400 font-montserrat font-bold">2</span>
                    )}
                  </div>
                  <div>
                    <h3 className={`font-montserrat font-bold text-lg transition-colors duration-500 ${
                      showCalendly ? 'text-white' : 'text-dark-400'
                    }`}>
                      Step 2 of 2: Schedule Your Call
                    </h3>
                    <p className="text-dark-400 text-sm">
                      {showCalendly ? 'Choose your preferred time slot' : 'Complete Step 1 first'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`glass-card max-w-3xl mx-auto transition-all duration-500 ${
            isSubmitted ? 'opacity-75' : 'opacity-100'
          }`}>
            {isSubmitted && (
              <div className="mb-8 p-4 bg-green-900/20 border border-green-500/30 rounded-xl">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat font-bold text-green-400 mb-1">
                      Step 1 Complete!
                    </h3>
                    <p className="text-green-300 text-sm">
                      Your consultation request has been submitted. Now please schedule your call below.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-dark-200 mb-3">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={isSubmitted}
                  className={`w-full px-4 py-3 bg-dark-800/50 border rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 ${
                    errors.fullName ? 'border-red-500' : 'border-dark-600'
                  } ${isSubmitted ? 'opacity-75 cursor-not-allowed' : ''}`}
                  }`}
                  placeholder="Enter your full name"
                  required
                />
                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-3">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitted}
                  className={`w-full px-4 py-3 bg-dark-800/50 border rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 ${
                    errors.email ? 'border-red-500' : 'border-dark-600'
                  } ${isSubmitted ? 'opacity-75 cursor-not-allowed' : ''}`}
                  }`}
                  placeholder="Enter your email address"
                  required
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-dark-200 mb-3">
                  <Building className="w-4 h-4 inline mr-2" />
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  disabled={isSubmitted}
                  className={`w-full px-4 py-3 bg-dark-800/50 border rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 ${
                    errors.companyName ? 'border-red-500' : 'border-dark-600'
                  } ${isSubmitted ? 'opacity-75 cursor-not-allowed' : ''}`}
                  }`}
                  placeholder="Enter your company name"
                  required
                />
                {errors.companyName && (
                  <p className="mt-2 text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.companyName}
                  </p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="serviceSelection" className="block text-sm font-medium text-dark-200 mb-3">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Service Selection *
                </label>
                <select
                  id="serviceSelection"
                  name="serviceSelection"
                  value={formData.serviceSelection}
                  onChange={handleInputChange}
                  disabled={isSubmitted}
                  className={`w-full px-4 py-3 bg-dark-800/50 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 ${
                    errors.serviceSelection ? 'border-red-500' : 'border-dark-600'
                  } ${isSubmitted ? 'opacity-75 cursor-not-allowed' : ''}`}
                  }`}
                  required
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-dark-800 text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.serviceSelection && (
                  <p className="mt-2 text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.serviceSelection}
                  </p>
                )}
              </div>

              {/* Problems */}
              <div>
                <label htmlFor="problems" className="block text-sm font-medium text-dark-200 mb-3">
                  <FileText className="w-4 h-4 inline mr-2" />
                  What problems are you looking to solve? *
                </label>
                <textarea
                  id="problems"
                  name="problems"
                  value={formData.problems}
                  onChange={handleInputChange}
                  disabled={isSubmitted}
                  rows={4}
                  className={`w-full px-4 py-3 bg-dark-800/50 border rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 resize-vertical ${
                    errors.problems ? 'border-red-500' : 'border-dark-600'
                  } ${isSubmitted ? 'opacity-75 cursor-not-allowed' : ''}`}
                  }`}
                  placeholder="Describe the specific challenges you're facing with lead generation, customer engagement, or business automation. Be as detailed as possible (minimum 50 characters)."
                  required
                />
                <div className="flex justify-between items-center mt-2">
                  {errors.problems ? (
                    <p className="text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.problems}
                    </p>
                  ) : (
                    <p className="text-sm text-dark-400">
                      {formData.problems.length}/50 characters minimum
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-dark-200 mb-3">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Additional Information (Optional)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  disabled={isSubmitted}
                  rows={3}
                  className={`w-full px-4 py-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 resize-vertical ${
                    isSubmitted ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  placeholder="Any additional details about your business, timeline, budget, or specific requirements..."
                />
              </div>

              {/* Submit Error */}
              {submitError && (
                <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                  <p className="text-red-400 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    {submitError}
                  </p>
                  <p className="text-red-300 text-sm mt-2">
                    If the problem persists, please contact us directly at{' '}
                    <a href="mailto:theocortex.ai@gmail.com" className="underline hover:text-red-200">
                      theocortex.ai@gmail.com
                    </a>
                  </p>
                </div>
              )}

              {/* Submit Button */}
              {!isSubmitted && (
                <div className="text-center">
                  <InteractiveButton
                    type="submit"
                    size="lg"
                    icon={Send}
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? 'Scheduling...' : 'Complete Step 1'}
                  </InteractiveButton>
                </div>
              )}
              
              {isSubmitted && (
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 text-green-400">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-montserrat font-semibold text-lg">
                      Step 1 Complete! Please proceed to Step 2 below.
                    </span>
                  </div>
                </div>
              )}
            </form>

            {/* Privacy Notice */}
            <div className="mt-12 pt-8 border-t border-dark-700/50">
              <div className="flex items-start space-x-3 text-sm text-dark-400">
                <Shield className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="mb-2">
                    <strong className="text-dark-300">Privacy & Security:</strong> Your information is encrypted and securely stored. We comply with GDPR and never share your data with third parties.
                  </p>
                  <p className="flex items-center space-x-2">
                    <Lock className="w-4 h-4 text-primary-400" />
                    <span>SSL encrypted • CSRF protected • GDPR compliant</span>
                  </p>
                  <p className="text-dark-400 font-inter text-sm mt-1">
                    <a href="mailto:theocortex.ai@gmail.com" className="hover:text-primary-400 transition-colors duration-300">
                      theocortex.ai@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Calendly Section */}
          {showCalendly && (
            <div 
              id="calendly-section"
              className="max-w-3xl mx-auto mt-16 animate-fade-in-up opacity-0"
              style={{
                animation: 'fadeInUp 1s ease-out 0.3s forwards'
              }}
            >
              <div className="glass-card">
                {/* Step 2 Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gradient">
                      Step 2: Choose Your Time
                    </h2>
                  </div>
                  <p className="text-lg text-dark-300 leading-relaxed font-light">
                    Please complete both steps to confirm your consultation.
                  </p>
                  <div className="mt-4 p-4 bg-primary-900/20 border border-primary-500/30 rounded-xl">
                    <div className="flex items-center justify-center space-x-2 text-primary-400">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">30-minute strategy session via Zoom</span>
                    </div>
                  </div>
                </div>

                {/* Calendly Embed */}
                <div className="calendly-embed-container">
                  <iframe
                    src="https://calendly.com/jhescon-theocortex/30min?embed_domain=aiwebpagedemo.com&embed_type=Inline"
                    width="100%"
                    height="700"
                    frameBorder="0"
                    scrolling="no"
                    title="Schedule your consultation"
                    className="rounded-xl"
                    loading="lazy"
                  ></iframe>
                </div>

                {/* Completion Notice */}
                <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl">
                  <div className="text-center">
                    <h3 className="font-montserrat font-bold text-xl text-green-400 mb-3">
                      Almost Done! 🎉
                    </h3>
                    <p className="text-green-300 mb-4 leading-relaxed">
                      Once you select a time slot above, you'll receive:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-green-300">Email confirmation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-green-300">Zoom meeting link</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-green-300">Calendar reminder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer - only show when not in booking flow */}
      {!showCalendly && (
        <footer className="bg-gradient-to-t from-dark-900/50 to-dark-950 border-t border-dark-800/30 py-20 relative">
          <div className="section-container relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:space-x-12">
              <a href="/" className="flex items-center space-x-4 mb-8 md:mb-0 group cursor-pointer">
                <div className="relative">
                  <Brain className="w-10 h-10 text-primary-500 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl animate-pulse-glow"></div>
                </div>
                <div>
                  <span className="text-xl font-bold font-montserrat tracking-tight group-hover:text-primary-400 transition-colors duration-300">
                    THEO<span className="text-primary-500">CORTEX</span><span className="text-dark-400 font-inter">.AI</span>
                  </span>
                  <p className="text-dark-400 font-inter text-sm mt-1">
                    <a href="mailto:theocortex.ai@gmail.com" className="hover:text-primary-400 transition-colors duration-300">
                      theocortex.ai@gmail.com
                    </a>
                  </p>
                </div>
              </a>
              
              <div className="flex items-center space-x-8 mb-8 md:mb-0">
                <a href="/" className="nav-link text-sm footer-nav-link">Home</a>
                <a href="/#services" className="nav-link text-sm footer-nav-link">Services</a>
                <a href="/#how-it-works" className="nav-link text-sm footer-nav-link">
                  <span className="md:hidden">How It<br />Works</span>
                  <span className="hidden md:inline">How It Works</span>
                </a>
                <a href="/#faq" className="nav-link text-sm footer-nav-link">FAQ</a>
              </div>
              
              <div className="flex items-center space-x-8">
                <a href="https://www.instagram.com/theocortex.ai/" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-400 transition-all duration-300 hover:scale-110 transform" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-dark-400 hover:text-primary-400 transition-all duration-300 hover:scale-110 transform" aria-label="X (formerly Twitter)">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-dark-400 hover:text-primary-400 transition-all duration-300 hover:scale-110 transform" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="border-t border-dark-800/30 pt-10 text-center">
              <p className="text-dark-400 font-light font-inter">
                © 2025 THEOCORTEX.AI – ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

                <InteractiveButton
                  type="submit"
                  size="lg"
                  icon={Send}
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
                </InteractiveButton>
              </div>
            </form>

            {/* Privacy Notice */}
            <div className="mt-12 pt-8 border-t border-dark-700/50">
              <div className="flex items-start space-x-3 text-sm text-dark-400">
                <Shield className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="mb-2">
                    <strong className="text-dark-300">Privacy & Security:</strong> Your information is encrypted and securely stored. We comply with GDPR and never share your data with third parties.
                  </p>
                  <p className="flex items-center space-x-2">
                    <Lock className="w-4 h-4 text-primary-400" />
                    <span>SSL encrypted • CSRF protected • GDPR compliant</span>
                  </p>
                  <p className="text-dark-400 font-inter text-sm mt-1">
                    <a href="mailto:theocortex.ai@gmail.com" className="hover:text-primary-400 transition-colors duration-300">
                      theocortex.ai@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};