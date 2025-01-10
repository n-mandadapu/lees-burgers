import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto p-4 pt-16">
      <br />
      <h1 className="text-3xl font-bold mb-4 text-center">Terms of Service</h1>
      <br />
      <p className="text-2xl font-bold mb-2">Welcome to Lee's Burgers and Malts!</p>
      <p className="mb-4">
        These Terms of Service ("Terms") govern your use of our website and services. By accessing our website, placing an order, or using any of our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
      </p>
      
      <h2 className="text-2xl font-bold mb-2">1. Use of Services</h2>
      <p className="mb-4">
        You must be at least 18 years old or have parental consent to use our services. By using our website, you agree to use it only for lawful purposes and in compliance with these Terms.
      </p>
      
      <h2 className="text-2xl font-bold mb-2">2. Orders and Payments</h2>
      <p className="mb-4">
        All orders placed through our website are subject to availability and acceptance. Prices are listed in the local currency and are subject to change without notice. Payments must be made at the time of order using approved payment methods.
      </p>

      <h2 className="text-2xl font-bold mb-2">3. Cancellations and Refunds</h2>
      <p className="mb-4">
        We reserve the right to cancel or refuse any order for any reason. If you wish to cancel an order, please contact us promptly. Refunds, if applicable, will be processed according to our refund policy.
      </p>

      <h2 className="text-2xl font-bold mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All content on our website, including text, images, logos, and designs, is the property of Lee's Burgers and Malts and is protected by copyright laws. You may not use, reproduce, or distribute any content without our express written permission.
      </p>

      <h2 className="text-2xl font-bold mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">
        To the fullest extent permitted by law, Lee's Burgers and Malts shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.
      </p>

      <h2 className="text-2xl font-bold mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. Your continued use of our services after any changes indicates your acceptance of the revised Terms.
      </p>

      <h2 className="text-2xl font-bold mb-2">7. Contact Information</h2>
      <p className="mb-4">
        If you have any questions or concerns about these Terms, please contact us.
      </p>

    </div>
  );
};

export default TermsOfService;
