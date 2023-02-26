import { useRouter as useLocalizedRouter } from 'next-intl/client';

function useRouter() {
  const router = useLocalizedRouter();

  return router;
}

export default useRouter;
