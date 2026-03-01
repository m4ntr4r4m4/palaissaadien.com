'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const mapUrl =
  'https://www.google.com/maps/place/Palais+Sa%C3%A2diens/@31.6280522,-7.9912659,15z/data=!4m5!3m4!1s0x0:0x9befd8af5840b82f!8m2!3d31.6280522!4d-7.9912659';

const familyImages = [
  '/images/the-family/family-1.jpg',
  '/images/the-family/family-2.jpg',
  '/images/the-family/family-3.jpg',
  '/images/the-family/family-4.jpg',
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % familyImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <div className="geometric-overlay" />

      <header className="siteHeader">
        <div className="container headerRow">
          <div className="brand">Palais Saadien <span>Marrakech</span></div>
          <nav>
            <a href="#heritage">Heritage</a>
            <a href="#wonderland">Wonderland</a>
            <a href="#collections">Collections</a>
            <a href="#visit">Visit</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="heroImageWrapper">
          <Image
            src="/images/magical-door.png"
            alt="Magical Moroccan Doorway"
            fill
            priority
            className="heroImage"
          />
        </div>
        <div className="heroOverlay" />
        <div className="container heroContent animate">
          <span className="kicker">Est. 1940 • Medina of Marrakech</span>
          <h1>
            A Magical Door to the
            <br />
            Wonderland of Morocco
          </h1>
          <p className="lead">
            Step through our threshold into a world of vibrant colors,
            intricate patterns, and timeless craftsmanship. Discover the
            soul of the Orient.
          </p>
          <div className="ctaRow">
            <a className="btn btnPrimary" href="#wonderland">Explore the Wonderland</a>
            <a className="btn btnGhost" href="#visit">Plan Your Journey</a>
          </div>
        </div>
      </section>

      <section id="heritage" className="section">
        <div className="container twoCol">
          <div className="animate delay-1">
            <span className="kicker">Maison Abouothman</span>
            <h2>Heritage Rooted in Tradition</h2>
            <p className="body-text">
              Founded in the heart of Marrakech, Palais Saadien carries a family tradition
              that spans generations. Our story began in the 1940s, a legacy of sourcing
              the finest Berber rugs and Arabian treasures.
            </p>
            <p className="body-text">
              Every piece in our collection tells a story—a narrative of the Atlas
              mountains, the nomadic soul, and the rhythmic loom.
            </p>
          </div>
          <div className="card animate delay-2">
            <div className="cardImageWrapper" style={{ height: '500px' }}>
              <Image
                src="/images/the-galleries/gallery-1.jpg"
                alt="Heritage Collection"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      <section id="wonderland" className="section alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="kicker">The Experience</span>
            <h2>A Gallery of Dreams</h2>
          </div>

          <div className="grid3">
            {[2, 4, 5, 7, 8, 9].map((num) => (
              <article key={num} className="card animate delay-1">
                <div className="cardImageWrapper">
                  <Image
                    src={`/images/the-galleries/gallery-${num}.jpg`}
                    alt={`Gallery piece ${num}`}
                    fill
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="section">
        <div className="container twoCol">
          <div className="card animate delay-1" style={{ height: '600px' }}>
            <div className="cardImageWrapper" style={{ height: '100%', position: 'relative' }}>
              {familyImages.map((src, index) => (
                <div
                  key={src}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <Image
                    src={src}
                    alt={`Family Legacy ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="animate delay-2">
            <span className="kicker">Legacy</span>
            <h2>The Family Behind the Craft</h2>
            <p className="body-text">
              Palais Saadien is more than a boutique; it is a living museum of Moroccan
              culture, preserved and protected by the Abouothman family. Our passion is
              to bridge the gap between ancient artistry and modern lifestyle.
            </p>
          </div>
        </div>
      </section>

      <section id="visit" className="section alt">
        <div className="container twoCol">
          <div className="animate delay-1">
            <span className="kicker">Visit Us</span>
            <h2>Find Us in the Medina</h2>
            <p className="body-text" style={{ marginBottom: '10px' }}>
              <strong>Address:</strong> 1, Haram Cheikh. Ksour - Médina
            </p>
            <p className="body-text" style={{ marginBottom: '10px' }}>
              <strong>City:</strong> Marrakech, Morocco 40000
            </p>
            <p className="body-text" style={{ marginBottom: '10px' }}>
              <strong>Inquiries:</strong> info@palaissaadien.com
            </p>
            <p className="body-text">
              <strong>Phone:</strong> +212 5 24 44 51 76
            </p>
            <div className="ctaRow" style={{ justifyContent: 'flex-start', marginTop: '30px' }}>
              <Link className="btn btnPrimary" target="_blank" href={mapUrl}>Open in Maps</Link>
              <Link className="btn btnGhost" target="_blank" href="https://instagram.com/palaissaadien">Instagram</Link>
            </div>
          </div>
          <div className="card animate delay-2">
            <div className="cardImageWrapper" style={{ height: '400px' }}>
              <Image src="/images/the-galleries/gallery-8.jpg" alt="Visit our space" fill />
            </div>
          </div>
        </div>
      </section>

      <footer className="section" style={{ padding: '60px 0', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="kicker">&copy; {new Date().getFullYear()} Palais Saadien. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}

