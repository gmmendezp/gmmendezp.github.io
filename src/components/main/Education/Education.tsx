import Section from "../../misc/Section";
import SectionTitle from "../../misc/Section/SectionTitle";
import Timeline from "../../misc/Timeline";
import EducationItem, { type EducationItemData } from "./EducationItem";

interface EducationProps {
  education: Array<EducationItemData>;
}

export const Education = ({ education }: EducationProps) => (
  <Section id="education" className="flex-wrap justify-center bg-main5">
    <SectionTitle>Education</SectionTitle>
    <Timeline>
      {education?.map((data) => (
        <EducationItem
          data={data}
          key={data.area + data.institution + data.startDate}
        />
      ))}
    </Timeline>
  </Section>
);
