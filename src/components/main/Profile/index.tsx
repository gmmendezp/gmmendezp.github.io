import Link from "../../misc/Link";
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
    resumeURL: string;
  };
}

export const Profile = ({ social, info }: ProfileProps) => (
  <section className="flex flex-wrap gap-3 justify-center bg-main1 text-primary pt-24 px-0 pb-16">
    <ProfileImage
      image={info.image}
      alt={`Portrait of ${info.firstName} ${info.lastName}`}
    />
    <ProfileSocial data={social} />
    <Separator className="w-11/12 max-w-screen-sm" />
    <ProfileTitle data={info} />
    <Link
      href={info.resumeURL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-flex items-center rounded bg-menu px-5 py-2.5 text-sm font-bold shadow-sm transition-colors hover:bg-menu-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-menu"
    >
      View Résumé
    </Link>
  </section>
);

export default Profile;
