'use client';

import { useEffect, useState } from 'react';

function ArticleLinks({ items, activeId }) {
  return (
    <ol>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={activeId === item.id ? 'is-active' : undefined}
            aria-current={activeId === item.id ? 'location' : undefined}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function ArticleTableOfContents({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!('IntersectionObserver' in window) || targets.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);

      if (visibleSections[0]) {
        setActiveId(visibleSections[0].target.id);
      }
    }, {
      rootMargin: '-15% 0px -70% 0px',
      threshold: 0,
    });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <aside className="article-toc article-toc-desktop" aria-label="Article contents">
        <nav className="article-toc-card">
          <p className="article-toc-label">In this article</p>
          <ArticleLinks items={items} activeId={activeId} />
        </nav>
      </aside>

      <details className="article-toc-mobile">
        <summary>In this article</summary>
        <nav aria-label="Article contents">
          <ArticleLinks items={items} activeId={activeId} />
        </nav>
      </details>
    </>
  );
}