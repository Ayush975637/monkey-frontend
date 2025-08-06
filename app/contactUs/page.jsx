"use client"

import React from 'react';
import { createContact } from '../../actions/contact';
import { toast } from 'sonner';
const ContactUs = () => {

  const handleSendMessage = async (formData) => {
    try {
      const res = await createContact(formData);
      if (res?.success) {
        toast.success("Message sent successfully");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };















  return (
    <div className="bg-white text-gray-800 px-4 py-10 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-6">
              We'd love to hear from you! Reach out with questions, feedback, or support requests.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:support@chikchak.com" className="text-blue-600 hover:underline">support@chikchak.com</a>
              </div>
              
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p>Monday - Friday: 9AM - 5PM (GMT)</p>
              </div>
              
              <div>
                <h3 className="font-medium">Address</h3>
                <p>[Tarauli Januvi]</p>
                <p>[Mathura, (UP)]</p>
                <p>[India]</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4" action={handleSendMessage}>
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" name='name' className="w-full px-4 py-2 border rounded-md"  required/>
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name='email' className="w-full px-4 py-2 border rounded-md" required />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-1">Subject</label>
                <input type="text" id="subject" name='subject'className="w-full px-4 py-2 border rounded-md" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" name='message' rows="4" className="w-full px-4 py-2 border rounded-md" required></textarea>
              </div>
              
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium">How do I reset my password?</h3>
              <p className="text-gray-600 mt-1">You can reset your password from the login screen by clicking "Forgot Password".</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-medium">Is ChikChak free to use?</h3>
              <p className="text-gray-600 mt-1">Yes, our basic features are completely free with optional premium upgrades.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-medium">How do I report a user?</h3>
              <p className="text-gray-600 mt-1">Tap the three dots on their profile and select "Report User".</p>
            </div>
          </div>
        </section>

        <p className="text-sm text-center text-gray-500 mt-10">© {new Date().getFullYear()} ChikChak. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactUs;