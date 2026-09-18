/**
 * Shared SEO metadata constants — imported by all page.jsx files.
 * Single source of truth for site-wide OG, Twitter, and schema values.
 */

import { siteConfig } from '@/config/siteConfig';

export const SITE_NAME = siteConfig.name;
export const SITE_URL = siteConfig.url;

/** Default Open Graph image — used when no page-specific image exists. */
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/assets/images/hero-illustration.png`,
  width: 1200,
  height: 630,
  alt: 'GulfStream Technologies — Managed Cloud Services Saudi Arabia',
};
