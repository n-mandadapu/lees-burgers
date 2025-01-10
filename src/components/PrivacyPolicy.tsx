import React, { useEffect } from 'react';


const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
      <div className="container mx-auto p-4 pt-16 ">
        <br />
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
        <br />
        <p className="text-2xl font-bold mb-2">Welcome to Lee's Burgers and Malts!</p>
        <p className="mb-4">
            At Lee's Burgers and Malts, your privacy is very important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or use our services. By accessing our website or providing us with your information, you agree to the practices described in this policy.
        </p>
        <p className="text-2xl font-bold mb-2">We Take Complete Care Of Your Privacy!</p>
        <p className="mb-4">
          Lees Burgers and Malts gives immense importance to the privacy of the customers. With the high-standards of policy and the advanced platform, we are capable of keeping your information safe within our reach.
        </p>
        <h2 className="text-2xl font-bold mb-2">When do we collect your information?</h2>
        <p className="mb-4">
          By visiting our website and placing your order, you provide us some necessary information. The information such as your location, contact, address, email and other necessary pieces of information becomes important to provide services. We also ask for other details in order to provide you the benefits of our discounts, offers, and combos.
        </p>
        <h2 className="text-2xl font-bold mb-2">How do we use your information?</h2>
        <p className="mb-4">
          All the pieces of information that you provide us are used to ensure the quality of services. We maintain a strong relationship with our services. With your information, we try to understand your preferences and requirements to offer top-notch services. Also, the information becomes helpful in legal and regulatory needs. The services and operations get better for us and convenient for you.
        </p>
        <h2 className="text-2xl font-bold mb-2">When do we disclose the information?</h2>
        <p className="mb-4">
          All your personal information stays safe with us. We only share it with the internal departments to ensure the comfort and reliable services. However, your information might get shared with public officials, working under government. The disclosure to the government only happens when it is required by the law and regulation.
        </p>
        <p className="mb-4">
          We never use your personal information other than the mentioned reasons. Our platform and the management team keep your information safe and protect your privacy.
        </p>
        <p className="mb-4">
          If you have more questions in mind, feel free to contact us.
        </p>
      </div>
    );
  }
  
  export default PrivacyPolicy;