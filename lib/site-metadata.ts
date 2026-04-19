export const siteOwnerName = 'Nehorai Hadad';
export const siteTitle = 'Nehorai Hadad | AI Engineer Portfolio';
export const siteDescription =
  'Portfolio of Nehorai Hadad — AI engineer and full-stack builder shipping agents, workflows, and modern web systems.';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nehoraihadad.com';

export function getAbsoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}
