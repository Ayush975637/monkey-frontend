import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-10 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Terms & Conditions</h1>

       

        <p className="mb-6">
          Welcome to <strong>ChikChak</strong>. By using our service, you agree to these terms. Please read them carefully.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using ChikChak, you agree to be bound by these Terms. If you disagree, please do not use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>You must be at least 13 years old to use ChikChak</li>
            <li>You are responsible for maintaining account confidentiality</li>
            <li>You agree not to harass other users or post inappropriate content</li>
            <li>You will not use ChikChak for illegal activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Service Modifications</h2>
          <p>
            We reserve the right to modify or discontinue ChikChak at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p>
            All content on ChikChak is our property or licensed to us. You may not reproduce, distribute, or create derivative works.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p>
            ChikChak is not liable for any indirect, incidental, or consequential damages arising from your use of the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of [Your Country/State] without regard to conflict of law principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
          <p>
            We may update these Terms occasionally. Continued use after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p>
            For questions about these Terms, contact us at:
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

export default TermsAndConditions;