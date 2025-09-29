import React, { useState } from "react";
import FileUpload from "../components/FileUpload";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", issue: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-300 to-base-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Get in Touch</h1>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
            Have questions about our courses or need help? We're here to assist you every step of the way.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-4 sm:p-6">
                  <h2 className="card-title text-xl lg:text-2xl mb-4 lg:mb-6 text-center lg:text-left">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="font-semibold">Email</p>
                        <p className="text-base-content/70 text-sm lg:text-base">support@skillex.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="font-semibold">Phone</p>
                        <p className="text-base-content/70 text-sm lg:text-base">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="font-semibold">Address</p>
                        <p className="text-base-content/70 text-sm lg:text-base">123 Learning Street<br />Education City, EC 12345</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-4 sm:p-6">
                  <h3 className="card-title text-lg lg:text-xl mb-3 lg:mb-4 text-center lg:text-left">Office Hours</h3>
                  <div className="space-y-2 text-base-content/80 text-center lg:text-left">
                    <p className="text-sm lg:text-base"><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                    <p className="text-sm lg:text-base"><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
                    <p className="text-sm lg:text-base"><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl order-1 lg:order-2">
            <div className="card-body p-3 sm:p-4 lg:p-6">
              <h2 className="card-title text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 lg:mb-6 text-center lg:text-left">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
                <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
                  <div className="form-control">
                    <label className="block mb-2">
                      <span className="label-text font-medium text-sm lg:text-base block mb-1">Full Name *</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter your full name"
                      className="input input-bordered w-full h-12 sm:h-14 lg:input-lg focus:input-primary text-sm sm:text-base"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="block mb-2">
                      <span className="label-text font-medium text-sm lg:text-base block mb-1">Email Address *</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="input input-bordered w-full h-12 sm:h-14 lg:input-lg focus:input-primary text-sm sm:text-base"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="block mb-2">
                    <span className="label-text font-medium text-sm lg:text-base block mb-1">How can we help? *</span>
                  </label>
                  <select 
                    className="select select-bordered w-full h-12 sm:h-14 lg:select-lg focus:select-primary text-sm sm:text-base"
                    value={formData.issue}
                    onChange={(e) => setFormData({...formData, issue: e.target.value})}
                    required
                  >
                    <option value="">Choose a category</option>
                    <option value="technical">🔧 Technical Support</option>
                    <option value="billing">💳 Billing & Payment</option>
                    <option value="course">📚 Course Content</option>
                    <option value="account">👤 Account Issues</option>
                    <option value="partnership">🤝 Partnership Inquiry</option>
                    <option value="other">💬 General Question</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="block mb-2">
                    <span className="label-text font-medium text-sm lg:text-base block mb-1">Message *</span>
                  </label>
                  <textarea 
                    className="textarea textarea-bordered w-full h-24 sm:h-28 lg:h-32 focus:textarea-primary resize-none text-sm sm:text-base"
                    placeholder="Please describe your question or issue in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>

                <div className="form-control">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-2">
                    <span className="label-text font-medium text-sm lg:text-base block mb-1 sm:mb-0">Attachments</span>
                    <span className="text-xs text-base-content/60">Optional - Max 5MB per file</span>
                  </div>
                  <FileUpload multiple={true} maxSize={5} />
                </div>

                <button type="submit" className="btn btn-primary w-full h-12 sm:h-14 lg:btn-lg btn-gradient text-white mt-6">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>
                
                <p className="text-xs sm:text-sm text-base-content/60 text-center mt-3">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;