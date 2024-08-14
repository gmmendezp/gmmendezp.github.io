import Section from "../../misc/Section";
import SectionTitle from "../../misc/Section/SectionTitle";
import Timeline from "../../misc/Timeline";
import ExperienceItem, { type ExperienceItemData } from "./ExperienceItem";

interface ExperienceProps {
  experience: Array<ExperienceItemData>;
}

export const Experience = ({ experience }: ExperienceProps) => (
  <Section id="experience" className="flex-wrap justify-center bg-main4">
    <SectionTitle>Experience</SectionTitle>
    <Timeline>
      {experience?.map((data) => (
        <ExperienceItem data={data} key={data.position + data.startDate} />
      ))}
    </Timeline>
  </Section>
);
