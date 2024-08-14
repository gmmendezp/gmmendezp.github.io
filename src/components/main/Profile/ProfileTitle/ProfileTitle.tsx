import Header from "../../../misc/Header";

interface ProfileTitleProps {
  data: { firstName: string; lastName: string; label: string };
}

export const ProfileTitle = ({
  data: { firstName, lastName, label },
}: ProfileTitleProps) => (
  <div className="w-full text-center font-serif mt-4">
    <Header tag="h1" className="w-full font-normal capitalize">
      {firstName} {lastName}
    </Header>
    <Header tag="h2" className="w-full font-bold capitalize">
      {label}
    </Header>
  </div>
);
