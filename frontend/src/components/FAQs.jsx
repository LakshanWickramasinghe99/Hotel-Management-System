import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Import the arrow icons

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I check in?',
      answer: 'Make your way to the sleep ‘n fly lounge where you will be greeted by a member of our reception team who will check you in and show you to your sleep space.',
    },
    {
      question: 'How will I receive my booking confirmation?',
      answer: 'Your booking confirmation is sent to the email address that you provided, and you should receive this once your payment has been processed.',
    },
    {
      question: 'How do I know which location to book?',
      answer: 'We recommend the location you are arriving at or departing from. Our lounges are located no more than a 30-minute walk from the departure gates within the same terminal. We’re unable to suggest a location due to gate numbers not being released in advance.',
    },
    {
      question: 'Can I get from one Dubai (DXB) lounge to the other?',
      answer: 'Emirates, Air Canada and select flydubai flights operate from A/B/C-Gates of T3 (Terminal 3). One can move freely between all gates. flydubai and some low cost carriers mainly use T2 (F-Gates). All other airlines use T1 (D-Gates). Guests from T2 best use our B or C-Gates lounges, those from T1 should stay at D-Gates. Transfers between A/B/C and D-Gates involve a shuttle bus and security check.',
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-5 text-left bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-300 flex justify-between items-center"
              >
                <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronUp : faChevronDown}
                  className="text-gray-600 ml-2 transition duration-300"
                />
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-600 bg-gray-50 border-t">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
