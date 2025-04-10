import { CalendarClock } from 'lucide-react';

import SectionCard from '../../../shared/ui/section-card';
import { css } from '../../../styled-system/css';

interface NavigationProps {
  className?: string;
}

const Navigation = ({}: NavigationProps) => {
  return (
    <nav className={css({ width: '250px', height: '100%', overflowY: 'scroll' })}>
      <div className={css({ position: 'relative' })}>
        <SectionCard icon={<CalendarClock />} />
      </div>
    </nav>
  );
};

export default Navigation;
