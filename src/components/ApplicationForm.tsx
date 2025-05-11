
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    idNumber: '',
    employmentStatus: '',
    moveInDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Application Submitted!",
      description: "We'll contact you shortly to discuss your application.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      idNumber: '',
      employmentStatus: '',
      moveInDate: ''
    });
  };

  return (
    <section id="apply" className="section bg-olive-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply <span className="text-orange">Now</span></h2>
            <p className="text-white/80">
              Interested in joining our community? Fill out the application form below to get started.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-olive p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="col-span-1">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="col-span-1">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="col-span-1">
                <label htmlFor="idNumber" className="block mb-2 text-sm font-medium">ID Number</label>
                <input
                  id="idNumber"
                  name="idNumber"
                  type="text"
                  value={formData.idNumber}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your ID number"
                />
              </div>
              
              <div className="col-span-1">
                <label htmlFor="employmentStatus" className="block mb-2 text-sm font-medium">Employment Status</label>
                <select
                  id="employmentStatus"
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="" disabled>Select your employment status</option>
                  <option value="full-time">Full-time Employed</option>
                  <option value="part-time">Part-time Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="student">Student</option>
                  <option value="retired">Retired</option>
                </select>
              </div>
              
              <div className="col-span-1">
                <label htmlFor="moveInDate" className="block mb-2 text-sm font-medium">Preferred Move-In Date</label>
                <input
                  id="moveInDate"
                  name="moveInDate"
                  type="date"
                  value={formData.moveInDate}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="mt-8">
              <Button type="submit" className="w-full btn-primary">
                Submit Application
              </Button>
            </div>
            
            <p className="text-center mt-4 text-sm text-white/70">
              By submitting this form, you agree to our terms and conditions. We'll contact you shortly to discuss your application.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
