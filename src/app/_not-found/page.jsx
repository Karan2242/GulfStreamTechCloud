import Link from 'next/link';

export const metadata = {
  title: 'Page not found — GulfStream Technology',
};

export default function NotFound() {
  return (
    <main className="section">
      <div className="container" style={{ textAlign: 'left' }}>
        <h1 className="display-lg">Page not found</h1>
        <p style={{ color: 'var(--text-secondary)' }}>The page you requested could not be found. Try returning to the homepage.</p>
        <div style={{ marginTop: 20 }}>
          <Link href="/" className="btn btn-primary">Return home</Link>
        </div>
      </div>
    </main>
  );
}
