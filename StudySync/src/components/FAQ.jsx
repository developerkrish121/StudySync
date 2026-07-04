import { useState } from "react";
import "./FAQ.css";

function FAQ(){
    const faqs = [
        {
            question : "What is StudySync ?",
            answer :  "StudySync is an all-in-one platform that helps students manage courses, track progress, organize study schedules, and stay productive.",
        },
        {
            question : "Is StudySync free to use?",
            answer : "Yes! StudySync offers a free version with all the essential features students need to organize their learning journey.",
        },
        {
      question: "Can I track my study progress?",
      answer:
        "Absolutely. StudySync lets you monitor completed courses, daily tasks, and your overall learning progress.",
    },
    {
      question: "Does StudySync work on mobile devices?",
      answer:
        "Yes. StudySync is fully responsive and works smoothly on desktops, tablets, and smartphones.",
    },

    ];

    const [activeIndex,setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        if (activeIndex == index){
            setActiveIndex(null);
        }else{
            setActiveIndex(index)
        }
    };

    return(
        <section>
            <div className="faq-container">
                <div className="faq-header">
                    <h2>Frequently Asked Questions</h2>
                     <p>
                         Everything you need to know about StudySync. Can't find the answer
                          you're looking for? Feel free to contact us.
                     </p>
                </div>
                <div className="faq-list">
                     {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
                </div>
        </section>
    )
};
export default FAQ;