'use client'

import Link from 'next/link'
import styles from '@/styles/home.module.css'

export default function HomePage() {
  return (
    <main className={styles['article-page']}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>Journalite</div>
        <nav>
          {/* You can swap the magnifier for an icon if you like */}
          <Link href="/search" className={styles['nav-link']}>
            🔍
          </Link>
          <Link href="/login" className={styles['nav-link']}>
            Login
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles['hero-title']}>Read with intention.</h1>
        <p className={styles['hero-subtitle']}>
          Explore great thoughts from the thinkers of today.
        </p>
        <Link
          href="/articles/updated-first-article"
          className={styles['cta-button']}
        >
          Start Writing →
        </Link>
      </section>

      {/* CONTENT GRID */}
      <div className={styles['main-grid']}>
        {/* LEFT COLUMN: Featured */}
        <section className={styles['featured-section']}>
          <h2 className={styles['section-title']}>Featured Article</h2>

          <article className={styles['article-card']}>
            <h3>
              The Future of Artificial Intelligence: Transforming Our World
            </h3>
            <p className={styles['article-excerpt']}>
              How AI’s exponential growth will reshape healthcare, education,
              transportation, and beyond.
            </p>
            <span className={styles['article-tag']}>AI</span>
            <div className={styles['author-info']}>
              <img
                src="https://i.pravatar.cc/32?u=samuel"
                alt="Samuel Green"
                className={styles['author-avatar']}
              />
              <span className={styles['author-name']}>Samuel Green</span>
            </div>
          </article>

          <div className={styles.topics}>
            <Link href="#" className={styles['topic-tag']}>
              Education
            </Link>
            <Link href="#" className={styles['topic-tag']}>
              AI
            </Link>
            <Link href="#" className={styles['topic-tag']}>
              Migration
            </Link>
            <Link href="#" className={styles['topic-tag']}>
              Justice
            </Link>
          </div>
        </section>

        {/* RIGHT COLUMN: Trending & Top Writers */}
        <aside className={styles['trending-section']}>
          <div>
            <h2 className={styles['section-title']}>Trending Essays</h2>
            <ul className={styles['trending-list']}>
              <li>
              <Link href={`/articles/unravelling-ethics-of-ai`}>
                  <h4>Unravelling the <em>Ethics</em> of AI</h4>
                  <span>Kristen Lee</span>
                </Link>
              </li>
              <li>
              <Link href={`/articles/hidden-costs-of-urbanization`}>
                  <h4>The Hidden Costs of Urbanization</h4>
                  <span>Alex Wen</span>
                </Link>
              </li>
              <li>
                <Link href="/articles/justice-modern-society">
                  <h4>Justice and Equality in Modern Society</h4>
                  <span>Hannah Cole</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.writers}>
            <h2 className={styles['section-title']}>Top Writers This Week</h2>
            {[
              { name: 'Alex Martinez', avatar: 'https://i.pravatar.cc/32?u=alex' },
              { name: 'Olivia Chen', avatar: 'https://i.pravatar.cc/32?u=olivia' },
              { name: 'Jacob Rivera', avatar: 'https://i.pravatar.cc/32?u=jacob' },
            ].map(({ name, avatar }) => (
              <div key={name} className={styles['writer-item']}>
                <div className={styles['writer-info']}>
                  <img src={avatar} alt={name} className={styles['writer-avatar']} />
                  <span className={styles['writer-name']}>{name}</span>
                </div>
                <button className={styles['follow-button']}>Follow</button>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* WHY JOURNALITE */}
      <section className={styles.features}>
        {[
          { title: 'Clean.', desc: 'A distraction-free reading experience.' },
          { title: 'Commentable', desc: 'Engage thoughtfully with writers.' },
          { title: 'Curious', desc: 'Discover a world of new ideas.' },
        ].map((f) => (
          <div key={f.title} className={styles['feature-item']}>
            <h3 className={styles['feature-title']}>{f.title}</h3>
            <p className={styles['feature-desc']}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Journalite. All rights reserved.
      </footer>
    </main>
  )
}