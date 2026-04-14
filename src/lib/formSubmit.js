/**
 * Client-side form submission via Web3Forms webhook.
 * Works with static export (no server/API routes needed).
 *
 * Setup:
 *  1. Register at https://web3forms.com/ (free — 250 submissions/month)
 *  2. Create a `.env.local` file in project root:
 *       NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
 *  3. Rebuild the site — the key is inlined at build time.
 */

const ENDPOINT = 'https://api.web3forms.com/submit';

export async function submitForm(formData) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  if (!accessKey) {
    throw new Error(
      'Form submission is not configured. Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local'
    );
  }

  const payload = {
    access_key: accessKey,
    from_name: 'GulfStream Website',
    ...formData,
    // Honeypot field — Web3Forms ignores submissions where this has a value
    botcheck: '',
  };

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Form submission failed. Please try again.');
  }

  return data;
}
