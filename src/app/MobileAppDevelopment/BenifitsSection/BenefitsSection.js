import React from 'react';
import Image from 'next/image';

const BenefitsSectionHome6 = () => {

    const features = [
        {
          image: 'https://www.svgrepo.com/show/530438/ddos-protection.svg',
          title: 'User-Friendly Interface (UI/UX)',
          description:
            'The cutting-edge language model that makes interactions a breeze. With its user-friendly interface, effortlessly tap into the world of AI-generated text.',
        },
        {
          image: 'https://www.svgrepo.com/show/530442/port-detection.svg',
          title: 'Multi-Device Compatibility',
          description:
            'Apps should run seamlessly on a variety of devices, including smartphones, tablets, foldable devices, and even Android TVs, ensuring a consistent user experience across screen sizes.',
        },
        {
          image: 'https://www.svgrepo.com/show/530444/availability.svg',
          title: 'Push Notifications & Alerts',
          description:
            'Apps can send real-time updates, reminders, and personalized notifications using Firebase Cloud Messaging (FCM) to keep users engaged and informed.',
        },
        {
          image: 'https://www.svgrepo.com/show/530440/machine-vision.svg',
          title: 'Secure Authentication & User Privacy',
          description:
            'Implementing secure login methods like OAuth, biometric authentication (fingerprint or face unlock), and two-factor authentication (2FA) ensures data security and privacy.',
        },
        {
          image: 'https://www.svgrepo.com/show/530450/page-analysis.svg',
          title: 'Database & Cloud Integration',
          description:
            'Apps often integrate with cloud databases like Firebase Firestore, Google Cloud, or AWS to store and sync data in real-time, making information accessible from multiple devices.',
        },
        {
          image: 'https://www.svgrepo.com/show/530453/mail-reception.svg',
          title: 'Third-Party API & SDK Support',
          description:
            'Integration with third-party services such as payment gateways (Razorpay, PayPal), Google Maps, social media login (Google, Facebook), and chat SDKs enhances app functionality.',
        },
      ];

      
  return (
    <div className="bg-gray-200 px-2 py-20">
      <div id="features" className="mx-auto max-w-6xl">
      <div className="mx-auto w-full max-w-3xl text-center">
      <h2 className="text-4xl font-extrabold text-black dark:text-white md:text-5xl">
      Key Features of Android App Development
      </h2>
      <div className="mx-auto mb-8 mt-4 max-w-8xl md:mb-12 lg:mb-16">
        <p className="text-lg text-gray-600 dark:text-gray-300">
        Android app development offers a vast range of features that make apps more powerful, user-friendly, and efficient. With the latest advancements in technology, Android apps are now more interactive, secure, and scalable. Below are some key features of Android app development.
        </p>
      </div>
    </div>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          {features.map((feature, index) => (
            <li key={index} className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <Image
                src={feature.image}
                alt={feature.title}
                width={40}
                height={40}
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default BenefitsSectionHome6;
