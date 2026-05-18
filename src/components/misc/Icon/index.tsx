import {
  type IconProps as FeatherIconProps,
  GitHub,
  Linkedin,
} from "react-feather";

const icons = {
  GitHub,
  LinkedIn: Linkedin,
};

interface IconProps extends FeatherIconProps {
  name: string;
}

const isIconName = (name: string): name is keyof typeof icons => name in icons;

export const Icon = ({ name, ...props }: IconProps) => {
  if (!isIconName(name)) return null;

  const IconComponent = icons[name];
  return <IconComponent {...props} />;
};

export default Icon;
