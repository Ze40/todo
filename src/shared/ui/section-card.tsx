import React from 'react';

import { card } from '../../app/style/recipe/card';

interface SectionCardProps {
  className?: string;
  icon: React.ReactNode;
}

const SectionCard = ({ className, icon }: SectionCardProps) => {
  return <button className={card({ visual: 'section' })}>{icon}hbdadadjccv</button>;
};

export default SectionCard;
