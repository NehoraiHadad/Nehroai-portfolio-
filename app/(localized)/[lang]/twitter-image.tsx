import { ImageResponse } from 'next/og';
import { SocialShareCard } from '@/lib/metadata-art';

export const alt = 'Nehorai Hadad portfolio preview';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(<SocialShareCard />, size);
}
