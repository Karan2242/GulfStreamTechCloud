/**
 * Shared SEO metadata constants — imported by all page.jsx files.
 * Single source of truth for site-wide OG, Twitter, and schema values.
 */

export const SITE_NAME = 'GulfStream Technologies';
export const SITE_URL = 'https://gulfstreamtech.com.sa';

/** Default Open Graph image — used when no page-specific image exists. */
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/assets/images/hero-illustration.png`,
  width: 1200,
  height: 630,
  alt: 'GulfStream Technologies — Cloud Managed Services Saudi Arabia',
};
