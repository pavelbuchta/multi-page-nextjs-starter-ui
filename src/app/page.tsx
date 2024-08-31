import BaseSection from "@/components/sections/base";
import FAQsSection from "@/components/sections/faqs";
import HeroSection from "@/components/sections/hero";

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <BaseSection
        layout="left"
        id={"EXAMPLE_ID"}
        subheadline={"EXAMPLE_SUBHEADLINE"}
        headline={["EXAMPLE_HEADLINE"]}
        paragraph={["EXAMPLE_PARAGRAPH"]}
      >
        <div></div>
      </BaseSection>
      <FAQsSection />
      <BaseSection
        layout="right"
        id={"EXAMPLE_ID"}
        subheadline={"EXAMPLE_SUBHEADLINE"}
        headline={["EXAMPLE_HEADLINE"]}
        paragraph={["EXAMPLE_PARAGRAPH"]}
      >
        <div></div>
      </BaseSection>
    </>
  );
}
