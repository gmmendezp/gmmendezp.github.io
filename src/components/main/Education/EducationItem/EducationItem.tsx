export interface EducationItemData {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
}

interface EducationItemProps {
  data: EducationItemData;
}

export const EducationItem = ({ data }: EducationItemProps) => (
  <div className="education-info">
    <p className="text-xl font-bold my-px mx-2.5">{data.area}</p>
    <p className="text-lg mt-px mb-0 mx-2.5">{data.institution}</p>
    <p className="mt-0 text-sm my-px mx-2.5">
      {data.startDate} - {data.endDate}
    </p>
    <p className="text-xs my-px mx-2.5 tracking-wider leading-5">
      {data.studyType}
    </p>
  </div>
);
