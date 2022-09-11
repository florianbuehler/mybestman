import React from 'react';
import { JediOrderIcon } from './index';

export type IconName = 'jedi-order';

type Props = {
  name: IconName;
} & React.SVGProps<SVGSVGElement>;

export const Icon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'jedi-order':
      return <JediOrderIcon {...props} />;
    default:
      throw new Error(`No icon with name ${name} was found.`);
  }
};
