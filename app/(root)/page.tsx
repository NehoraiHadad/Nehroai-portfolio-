import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { resolveLocaleFromHeader } from '@/lib/i18n/config';

export default async function RootPage() {
  const requestHeaders = await headers();
  const locale = resolveLocaleFromHeader(requestHeaders.get('accept-language'));

  redirect(`/${locale}`);
}
