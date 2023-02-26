import createIntlMiddleware from 'next-intl/middleware';
import i18n from './domain/locale/config';

export default createIntlMiddleware(i18n.locale);

export const config = i18n.config;
