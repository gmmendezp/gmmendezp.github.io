import Icon from "../../../misc/Icon";

interface ProfileSocialProps {
  data: Array<{ name: string; url: string }>;
}

export const ProfileSocial = ({ data }: ProfileSocialProps) => (
  <ul className="flex justify-center w-full list-none p-0 gap-12">
    {(data || []).map((profile) => (
      <a
        href={profile.url}
        key={profile.name}
        className="text-sm text-primary no-underline"
      >
        <Icon name={profile.name} />
      </a>
    ))}
  </ul>
);
