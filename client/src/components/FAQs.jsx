import React, { useState } from 'react';
import style from '../module/faqs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How does SwapReads work?',
      answer:
        "SwapReads is a global book exchange platform where users can create profiles, list the books they're willing to swap, and find other users collections. When you find a book you're interested in, you can find suitable offers and read that book. It's that easy!",
    },
    {
      question: 'How does SwapReads contribute to sustainability?',
      answer:
        'By facilitating book swaps, SwapReads promotes a more sustainable reading culture by reducing the demand for new book production. This helps minimize the environmental impact associated with book manufacturing, including paper usage and carbon emissions.',
    },
    {
      question: 'How do I join the SwapReads community?',
      answer:
        'Signing up for SwapReads is quick and easy. Simply visit our website, create a profile, and start listing the books you are eager to swap. You will be joining a vibrant community of passionate readers in no time!',
    },
    {
      question: 'How do I ensure the safety and security of my personal information on SwapReads?',
      answer:
        'We take user privacy and security seriously. Your personal information is encrypted and stored securely on our servers.',
    },
  ];

  return (
    <div className={style.faqSection}>
      <h1 className={style.faqTitle}>Some Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className={style.faqContainer}>
          <div className={`${style.question} ${activeIndex === index ? style.active : ''}`} onClick={() => toggleAccordion(index)}>
            <h4>{faq.question}</h4>
            <FontAwesomeIcon icon={activeIndex === index ? faCaretUp : faCaretDown} className={style.icon} />
          </div>
          {activeIndex === index && (
            <div className={style.answers}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;