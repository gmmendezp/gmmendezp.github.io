import Icon from "../../../misc/Icon";

interface ProfileSocialProps {
  data: Array<{ name: string; url: string }>;
}

export const ProfileSocial = ({ data }: ProfileSocialProps) => (
  <ul className="flex justify-center w-full list-none p-0 gap-12">
    {(data || []).map((profile) => {
      const isEmail = profile.url.startsWith("mailto:");

      return (
        <li key={profile.name}>
          <a
            href={profile.url}
            className="text-sm text-primary no-underline"
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            aria-label={isEmail ? "Send email" : `${profile.name} profile`}
          >
            <Icon name={profile.name} />
          </a>
        </li>
      );
    })}
  </ul>
);

export default ProfileSocial;
