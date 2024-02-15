// FAQ.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { faqData } from '../Constant';

const FAQ = () => {
  const [activeQuestions, setActiveQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (activeQuestions.includes(index)) {
      setActiveQuestions(activeQuestions.filter(item => item !== index));
    } else {
      setActiveQuestions([...activeQuestions, index]);
    }
  };

  return (
    <Section>
      <FAQContainer>
        <h1 style={{ textAlign: 'center' }}>FAQ</h1>
        {faqData.map((faq, index) => (
          <FAQItem key={index}>
            <Question
              onClick={() => toggleQuestion(index)}
              active={activeQuestions.includes(index)}
            >
              {faq.question}
              <Arrow active={activeQuestions.includes(index)}>▼</Arrow>
            </Question>
            <Answer visible={activeQuestions.includes(index)}>{faq.answer}</Answer>
          </FAQItem>
        ))}
        {/* Add line after questions */}
      </FAQContainer>
    </Section>
  );
};

const Section = styled.div`
position: relative;
z-index: 1;
`

const FAQContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.div`
  background-color: #000;
  padding: 15px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
`;

const Answer = styled.div`
  padding: 15px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  border-top: 1px solid #fff;
`;

const Arrow = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 500ms ease;
  ${({ active }) => (active ? 'transform: translateY(-50%) rotateX(180deg);' : '')};
`;

export default FAQ;
