import * as icons from "react-feather";

interface IconProps extends icons.IconProps {
  name: string;
}

export function Icon({ name, ...props }: IconProps) {
  if (!Object.keys(icons).includes(name)) return <div />;
  const IconComponent = icons[name as keyof typeof icons];
  return <IconComponent {...props} />;
}
