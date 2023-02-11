import {createIntlMiddleware} from 'next-intl/server';

export default createIntlMiddleware({
  locales: ['en', 'pt-br'],
  defaultLocale: 'pt-br'
});

export const config = {
  matcher: ['/((?!_next).*)']
};
