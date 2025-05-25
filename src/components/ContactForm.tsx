import React, { useState } from 'react';
import { phoneModels, issueTypes } from '../utils/formOptions';
import { Smartphone, MessageSquare, Check, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deviceType: 'iPhone',
    deviceModel: '',
    issueType: '',
    description: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[0-9]{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.deviceModel) newErrors.deviceModel = 'Please select your device model';
    if (!formData.issueType) newErrors.issueType = 'Please select an issue type';
    if (!formData.description.trim()) newErrors.description = 'Please describe your issue';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const message = `*New Repair Request*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Device:* ${formData.deviceType} ${formData.deviceModel}
*Issue Type:* ${formData.issueType}
*Description:* ${formData.description}`;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Use a timeout to simulate processing
    setTimeout(() => {
      // Open WhatsApp with the pre-filled message
      // Note: In production, replace '1234567890' with the actual WhatsApp number
      window.open(`https://wa.me/1234567890?text=${encodedMessage}`, '_blank');
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          deviceType: 'iPhone',
          deviceModel: '',
          issueType: '',
          description: ''
        });
      }, 3000);
    }, 1000);
  };

  const deviceModels = phoneModels[formData.deviceType as keyof typeof phoneModels] || [];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Report Your Device Issue</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below, and we'll contact you promptly with a repair solution.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
            {isSuccess ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Sent Successfully!</h3>
                <p className="text-gray-600 mb-4">Your repair request has been sent to our technician via WhatsApp.</p>
                <p className="text-gray-600">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Your phone number"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Your email (optional)"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700 mb-1">
                      Device Type*
                    </label>
                    <select
                      id="deviceType"
                      name="deviceType"
                      value={formData.deviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="iPhone">iPhone</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Google">Google</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="deviceModel" className="block text-sm font-medium text-gray-700 mb-1">
                      Device Model*
                    </label>
                    <select
                      id="deviceModel"
                      name="deviceModel"
                      value={formData.deviceModel}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.deviceModel ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                    >
                      <option value="">Select a model</option>
                      {deviceModels.map((model, index) => (
                        <option key={index} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                    {errors.deviceModel && <p className="mt-1 text-sm text-red-500">{errors.deviceModel}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-1">
                      Issue Type*
                    </label>
                    <select
                      id="issueType"
                      name="issueType"
                      value={formData.issueType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.issueType ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                    >
                      <option value="">Select issue type</option>
                      {issueTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.issueType && <p className="mt-1 text-sm text-red-500">{errors.issueType}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Issue Description*
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                    placeholder="Please describe your issue in detail..."
                  ></textarea>
                  {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
                </div>
                
                <div className="flex items-center px-4 py-3 bg-blue-50 rounded-lg border border-blue-100">
                  <MessageSquare className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3" />
                  <p className="text-sm text-blue-800">
                    Your information will be sent directly to our technician via WhatsApp for a quick response.
                  </p>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 text-white bg-blue-600 rounded-lg font-medium text-lg flex justify-center items-center transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Submit Repair Request'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;