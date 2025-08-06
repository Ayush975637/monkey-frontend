import React from 'react';

const AccountSecurity = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-10 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Account & Security</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Account Protection</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Use a strong, unique password for your ChikChak account</li>
            <li>Never share your login credentials with others</li>
            <li>Enable two-factor authentication if available</li>
            <li>Be cautious of phishing attempts</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Privacy Settings</h2>
          <p className="mb-4">
            Control what information is visible to others through your privacy settings:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Profile visibility settings</li>
            <li>Last seen status</li>
            <li>Read receipts</li>
            <li>Blocked users list</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Management</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Download Your Data</h3>
              <p>Request a copy of all your ChikChak data for personal records.</p>
              <button className="mt-2 text-blue-600 hover:underline">Request Data Download</button>
            </div>
            
            <div>
              <h3 className="font-medium">Delete Your Account</h3>
              <p>Permanently remove your account and associated data from our systems.</p>
              <button className="mt-2 text-red-600 hover:underline">Delete Account</button>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Security Tips</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Log out from shared devices</li>
            <li>Regularly review active sessions</li>
            <li>Be cautious with third-party apps</li>
            <li>Update the app regularly for security patches</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Reporting Issues</h2>
          <p>
            If you suspect unauthorized access or security vulnerabilities, please contact us immediately at:
          </p>
          <p className="mt-2">
            <strong>Security Team:</strong> <a href="mailto:security@chikchak.com" className="text-blue-600 hover:underline">security@chikchak.com</a>
          </p>
        </section>

        <section className="mb-8 bg-yellow-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Emergency Contact</h2>
          <p>
            If you're in immediate danger, contact local authorities first. For account-related emergencies:
          </p>
          <p className="mt-2 font-medium">
            <a href="mailto:emergency@chikchak.com" className="text-blue-600 hover:underline">emergency@chikchak.com</a>
          </p>
        </section>

        <p className="text-sm text-center text-gray-500 mt-10">© {new Date().getFullYear()} ChikChak. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AccountSecurity;