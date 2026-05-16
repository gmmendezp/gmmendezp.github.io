import Icon from "../../../misc/Icon";

interface ProfileSocialProps {
  data: Array<{ name: string; url: string }>;
}

export const ProfileSocial = ({ data }: ProfileSocialProps) => (
  <ul className="flex justify-center w-full list-none p-0 gap-12">
    {(data || []).map((profile) => (
      <li key={profile.name}>
        <a
          href={profile.url}
          className="text-sm text-primary no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name={profile.name} />
        </a>
      </li>
    ))}
  </ul>
);

export default ProfileSocial;
