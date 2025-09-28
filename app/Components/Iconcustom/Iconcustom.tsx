import { Icon } from "@iconify/react";

interface proms {
  classStyle: string;
  iconName: string;
}
export const Iconcustom = ({ iconName, classStyle }: proms) => {
  return <Icon className={`${classStyle}`} icon={iconName} />;
};
