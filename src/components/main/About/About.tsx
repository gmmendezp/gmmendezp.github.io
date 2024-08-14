import Section from "../../misc/Section";
import SectionBody from "../../misc/Section/SectionBody";
import SectionTitle from "../../misc/Section/SectionTitle";

interface AboutType {
  data: Array<string>;
}

export const About = ({ data }: AboutType) => {
  return (
    <Section id="about" className="bg-main2">
      <SectionTitle>About</SectionTitle>
      <SectionBody>
        {data?.map((p) => (
          <p className="about-text" key={p}>
            {p}
          </p>
        ))}
      </SectionBody>
    </Section>
  );
};
