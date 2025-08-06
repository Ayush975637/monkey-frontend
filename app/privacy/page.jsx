import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-10 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Privacy Policy</h1>

       

        <p className="mb-6">
          At <strong>ChikChak</strong>, we value your privacy and are committed to protecting your personal information. This policy explains what data we collect, how we use it, and your rights regarding that data.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email, phone number, profile picture (if provided).</li>
            <li><strong>Usage Data:</strong> Chat logs, call history, user interactions, match activity.</li>
            <li><strong>Device Data:</strong> IP address, browser type, OS, cookies, device ID.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>To provide and enhance the ChikChak experience</li>
            <li>To personalize matches and interactions</li>
            <li>To ensure safety and prevent abuse</li>
            <li>To respond to your support inquiries</li>
            <li>To analyze app usage and improve performance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Sharing</h2>
          <p className="mb-2">
            We do <strong>not</strong> sell your data. We may share information:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>With service providers for hosting or analytics</li>
            <li>To comply with legal obligations</li>
            <li>During business transfers like mergers or acquisitions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
          <p>
            We retain your data only as long as necessary for the purposes outlined here, or as required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access, correct, or delete your data</li>
            <li>Withdraw consent at any time</li>
            <li>Request a copy of your data</li>
            <li>Contact us for any privacy-related issues</li>
          </ul>
          <p className="mt-4">
            Email us at: <a href="mailto:[aa7782549@gmail.com]" className="text-blue-600 hover:underline">[aa7782549@gmail.com]</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Children’s Privacy</h2>
          <p>
            ChikChak is not intended for users under 13. If we learn that a child has submitted personal data, we will delete it promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Security</h2>
          <p>
            We implement industry-standard measures to protect your data. However, no method is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Policy Updates</h2>
          <p>
            We may update this Privacy Policy occasionally. Major updates will be communicated via the app or email.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p>
            For any questions or requests, reach out to us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> <a href="mailto:[aa7782549@gmail.com]" className="text-blue-600 hover:underline">[aa7782549@gmail.com]</a>
          </p>
        </section>

        <p className="text-sm text-center text-gray-500 mt-10">© {new Date().getFullYear()} ChikChak. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
