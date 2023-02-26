import { LocalizedLink } from 'next-intl';
import { ReactNode } from 'react';

import { AppLocales } from '@/domain/types';

type LinkProps = {
  children: ReactNode;
  href: string;
  locale: AppLocales;
};

function Link({ children, href, locale }: LinkProps) {
  return (
    <LocalizedLink href={href} locale={locale}>
      {children}
    </LocalizedLink>
  );
}

export default Link;
