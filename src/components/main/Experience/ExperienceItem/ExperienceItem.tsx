export interface ExperienceItemData {
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  summary: string;
}

interface ExperienceItemProps {
  data: ExperienceItemData;
}

export const ExperienceItem = ({ data }: ExperienceItemProps) => (
  <div className="experience-info">
    <p className="text-xl font-bold my-px mx-2.5">{data.position}</p>
    <p className="text-lg mt-px mb-0 mx-2.5">{data.company}</p>
    <p className="mt-0 text-sm my-px mx-2.5">
      {data.startDate} - {data.endDate}
    </p>
    <p className="text-xs my-px mx-2.5 tracking-wider leading-5">
      {data.summary}
    </p>
  </div>
);
