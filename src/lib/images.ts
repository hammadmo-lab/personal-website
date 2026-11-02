import type { ImageMetadata, ImageOutputFormat } from 'astro';

import portrait from '../assets/images/portrait.jpg';
import atWork from '../assets/images/at-work.jpg';
import iceland from '../assets/images/iceland.jpg';
import radlyDesk from '../assets/images/radly-desk.jpg';
import passportTrailsSplash from '../assets/images/passport-trails-splash.jpg';
import lightUnderDoor from '../assets/books/the-light-under-the-door.jpg';
import iSwear from '../assets/books/i-swear-ill-find-you.jpg';

/**
 * On-page images, optimised at build time by <Picture> (AVIF, WebP and JPEG in several widths).
 * The originals stay in public/ at their old URLs, because social cards, JSON-LD and the image
 * sitemap point to them, so keep both copies in step when replacing a photo.
 */
export const IMAGES = { portrait, atWork, iceland, radlyDesk, passportTrailsSplash };

/** Book covers, keyed by the public path that BOOKS[...].cover uses. */
const COVERS: Record<string, ImageMetadata> = {
  '/the-light-under-the-door.jpg': lightUnderDoor,
  '/i-swear-ill-find-you.jpg': iSwear,
};

export function coverImage(path: string): ImageMetadata {
  const image = COVERS[path];
  if (!image) throw new Error(`No optimised cover for ${path}: add it to src/lib/images.ts`);
  return image;
}

/** Output formats for every <Picture>; the source format (JPEG) is added as the <img> fallback. */
export const PICTURE_FORMATS: ImageOutputFormat[] = ['avif', 'webp'];
