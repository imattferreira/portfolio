import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations('Index');

  return (
    <h1>{t('title')}</h1>
  );
}

export default Page;
