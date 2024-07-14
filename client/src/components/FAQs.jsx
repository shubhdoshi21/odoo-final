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
          "question": "How do I become a member of Elite Library?",
          "answer": "Becoming a member of Elite Library is easy. Simply visit our website or stop by in person, fill out the membership form, and receive your library card instantly. Enjoy access to thousands of books and resources right away."
      },
      {
          "question": "What resources are available at Elite Library?",
          "answer": "Elite Library offers a wide range of resources, including books, e-books, audiobooks, magazines, research journals, and access to various digital databases. We also have dedicated spaces for studying, group discussions, and events."
      },
      {
          "question": "How can I borrow books from Elite Library?",
          "answer": "Borrowing books is simple. Use your library card to check out books either at the self-service kiosks or the front desk. You can also reserve books online and pick them up at your convenience."
      },
      {
          "question": "Are there any late fees for overdue books?",
          "answer": "Yes, we do charge late fees for overdue books to ensure fair access to resources for all members. You can check our website or contact the library for detailed information on our fee structure."
      },
      {
          "question": "Does Elite Library offer any special programs or events?",
          "answer": "Absolutely! Elite Library hosts a variety of programs and events, including book clubs, author talks, workshops, and children's storytime sessions. Check our events calendar on the website for upcoming activities."
      },
      {
          "question": "Can I access Elite Library's digital resources from home?",
          "answer": "Yes, members can access a wide range of digital resources from home, including e-books, audiobooks, and online databases. Simply log in with your library card number and password."
      },
      {
          "question": "How can I donate books to Elite Library?",
          "answer": "We welcome book donations. You can drop off your gently used books at the donation box located at the library entrance. For larger donations, please contact us to arrange a suitable time."
      },
      {
          "question": "What measures are in place to ensure the safety and security of library users?",
          "answer": "Elite Library is committed to providing a safe environment for all users. We have security personnel, surveillance cameras, and strict policies to ensure the safety of our patrons and staff."
      },
      {
          "question": "How can I volunteer at Elite Library?",
          "answer": "Volunteering at Elite Library is a great way to give back to the community. Visit our website to learn more about volunteer opportunities and fill out the application form to get started."
      },
      {
          "question": "How does Elite Library support lifelong learning?",
          "answer": "Elite Library supports lifelong learning through a variety of resources and programs tailored to all age groups. We offer educational workshops, access to research materials, and personal development courses to help our members continue learning throughout their lives."
      }
  
  
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