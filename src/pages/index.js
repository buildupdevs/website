import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import { IndexStyles } from '../styles/IndexStyles';

export default function HomePage() {
  return (
    <>
      <SEO />
      <IndexStyles>
        <HeroSection />
        <div className="howto">
          <div className="title">
            <h2>So how do you join?</h2>
          </div>
          <p>
            You don't really. You follow these{' '}
            <Link to="/principles">Principles</Link> in your interactions on
            social media and IRL. You can however, join our{' '}
            <Link to="/discord">Discord</Link> and meet other fellow BUDs.
          </p>
        </div>
      </IndexStyles>
    </>
  );
}
