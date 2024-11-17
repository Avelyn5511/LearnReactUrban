import React, { useState } from "react";
import questions from "./questions"; // Adjust the path as necessary
import style from "./style.module.css"; // Adjust the import based on your file structure

const AskedQuestions: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  // @ts-ignore
  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <p className={style.titleUp}>FAQ’s</p>
        <p className={style.titleDown}>Frequently Asked Questions</p>
      </div>
      <div className={style.containerQuestions}>
        {questions.map((item, index) => (
          <div
            key={index}
            className={`${style.cardQuestions} ${visibleIndex === index ? style.expanded : ""}`}
          >
            <div className={style.cardItem} onClick={() => toggleAnswer(index)}>
              {item.question}
              <button>{">"}</button>
            </div>
            <div
              className={`${style.answer} ${visibleIndex === index ? style.visible : ""}`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskedQuestions;
