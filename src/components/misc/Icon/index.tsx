import {
  type IconProps as FeatherIconProps,
  GitHub,
  Linkedin,
} from "react-feather";

const icons = {
  GitHub,
  Linkedin,
};

interface IconProps extends FeatherIconProps {
  name: string;
}

function isIconName(name: string): name is keyof typeof icons {
  return name in icons;
}

export function Icon({ name, ...props }: IconProps) {
  if (!isIconName(name)) return <div />;

  const IconComponent = icons[name];
  return <IconComponent {...props} />;
}

export default Icon;
