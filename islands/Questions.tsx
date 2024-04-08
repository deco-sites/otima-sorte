import RichText from "$store/sections/Content/RichText.tsx";
import { useState } from "preact/hooks";

interface Question {
  question?: string;
  /** @format textarea */
  answer?: string;
}

export interface Props {
  questions?: Question[];
}

const Questions = ({ questions }: Props) => {
  return (
    <div class="px-[14px] mb-[23px] lg:mb-10">
      <div class="max-w-[1270px] mx-auto flex flex-col gap-[22px]">
        {questions?.map((question) => (
          <Question question={question?.question} answer={question?.answer} />
        ))}
      </div>
    </div>
  );
};

const Question = ({ question, answer }: Question) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="overflow-hidden">
      <button
        className={`w-full flex justify-between items-center transition duration-300" ${
          !isOpen && "border-b border-[#D9D9D9] pb-[14px] mb-0"
        }`}
        onClick={toggleAccordion}
      >
        <span className="text-base leading-5 font-bold text-[#2E385F]">
          {question}
        </span>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-[30px] w-[30px] transform transition duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            d="M7.75 11.3262L15 18.5762L22.25 11.3262"
            stroke="#2E385F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 bg-[#F6F6F6] rounded-[10px] px-[14px] lg:pr-[38px] ${
          isOpen
            ? "max-h-[1000px] py-[25px] mt-[10px]"
            : "max-h-0 overflow-hidden"
        }`}
      >
        {/* @ts-ignore */}
        <RichText class="text-[13px] leading-5 text-[#444444]" text={answer} />
      </div>
    </div>
  );
};

export default Questions;
