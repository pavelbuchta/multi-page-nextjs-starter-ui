import Accordion from "../ui/accordion";
import BaseSection from "./base";

const faqs = [
  { answer: "EXAMPLE_ANSWER", question: "EXAMPLE_QUESTION" },
  { answer: "EXAMPLE_ANSWER", question: "EXAMPLE_QUESTION" },
] as const;

export default function FAQsSection() {
  return (
    <BaseSection
      id="faqs"
      subheadline={"EXAMPLE_SUBHEADLINE"}
      headline={["EXAMPLE_HEADLINE"]}
      paragraph={["EXAMPLE_PARAGRAPH"]}
      layout="center"
    >
      <div className="mt-16 flex w-full flex-col gap-4">
        {faqs.map((item, index) => (
          <Accordion
            prefix={"EXAMPLE_PREFIX: "}
            answer={item.answer}
            question={item.question}
            key={index}
          />
        ))}
      </div>
    </BaseSection>
  );
}
