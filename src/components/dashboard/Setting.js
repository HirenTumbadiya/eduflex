import React from 'react';

const Settings = () => {
  return (
    <div className="content p-4">
      <h1 className="text-2xl font-bold">Settings</h1>

      <section>
        <h2 className="text-xl font-bold mt-4">Account Settings</h2>
        <p>
          Manage your account settings and personal information here.
        </p>
        <ul className="list-disc list-inside">
          <li>Update your name and contact details</li>
          <li>Change your password</li>
          <li>Manage notification preferences</li>
          <li>Set your preferred language</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mt-4">Email Subscriptions</h2>
        <p>
          Control the types of email notifications you receive from us.
        </p>
        <ul className="list-disc list-inside">
          <li>Subscribe or unsubscribe from newsletters</li>
          <li>Choose email frequency and content preferences</li>
          <li>Manage subscription topics</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mt-4">Privacy Settings</h2>
        <p>
          Customize your privacy settings and data sharing preferences.
        </p>
        <ul className="list-disc list-inside">
          <li>Control visibility of your profile and activity</li>
          <li>Manage cookie preferences</li>
          <li>Review and delete personal data</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mt-4">Theme and Display</h2>
        <p>
          Customize the look and feel of the website according to your preferences.
        </p>
        <ul className="list-disc list-inside">
          <li>Choose a light or dark theme</li>
          <li>Adjust font size and style</li>
          <li>Configure layout and display options</li>
        </ul>
      </section>

      {/* Add more sections and settings options as needed */}
    </div>
  );
};

export default Settings;
