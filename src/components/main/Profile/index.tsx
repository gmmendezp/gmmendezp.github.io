import Separator from "../../misc/Separator";
import ProfileImage from "./ProfileImage";
import ProfileSocial from "./ProfileSocial";
import ProfileTitle from "./ProfileTitle";

interface ProfileProps {
  social: Array<{ name: string; url: string }>;
  info: {
    firstName: string;
    lastName: string;
    label: string;
    email: string;
    image: string;
  };
}

export const Profile = ({ social, info }: ProfileProps) => (
  <section className="flex flex-wrap gap-3 justify-center bg-main1 text-primary pt-24 px-0 pb-16">
    <ProfileImage image={info.image} />
    <ProfileSocial data={social} />
    <Separator className="w-11/12 max-w-screen-sm" />
    <ProfileTitle data={info} />
  </section>
);

export default Profile;
