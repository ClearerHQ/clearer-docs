import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const exploreCards = [
  {
    title: 'Constitution',
    description:
      "Why Clearer exists and the principles we'll never compromise.",
    to: '/docs/operating-system/constitution',
  },
  {
    title: 'Brand Bible',
    description: 'How Clearer communicates and presents itself.',
    to: '/docs/operating-system/brand-bible',
  },
  {
    title: 'Design Language',
    description: 'How Clearer should look and feel.',
    to: '/docs/operating-system/design-language',
  },
  {
    title: 'Product Principles',
    description: 'How every feature should behave.',
    to: '/docs/operating-system/product-principles',
  },
];

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.brand}>
          Clearer
        </Heading>
        <p className={styles.tagline}>
          Five minutes. A clearer digital life.
        </p>
        <p className={styles.mission}>
          Help people feel lighter by turning overwhelming digital clutter into
          small, confident decisions.
        </p>
      </div>
    </header>
  );
}

function ExploreSection() {
  return (
    <section className={styles.explore}>
      <div className="container">
        <p>
          These documents define how we build Clearer—from our philosophy and
          design language to the engineering decisions behind the product.
        </p>
        <Heading as="h2" className={styles.exploreTitle}>
          Explore
        </Heading>
        <div className={styles.cardGrid}>
          {exploreCards.map((card) => (
            <Link key={card.to} className={styles.card} to={card.to}>
              <span className={styles.cardTitle}>{card.title}</span>
              <span className={styles.cardDescription}>{card.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Clearer documentation — five minutes toward a clearer digital life.">
      <HomepageHeader />
      <main>
        <ExploreSection />
      </main>
    </Layout>
  );
}
