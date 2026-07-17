const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Ewa+Trading+Co+Inc%2C+80+Mulberry+St%2C+New+York%2C+NY+10013";

const phoneHref = "tel:+12129642017";
const assetPath = (filename: string) => `/ewatrading/${filename}`;

export default function Home() {
  return (
    <main>
      <div className="notice-bar">
        <span>Serving Chinatown since 1984</span>
        <span className="notice-dot" aria-hidden="true" />
        <span>English · Cantonese · Mandarin</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ewa Trading home">
          <span className="brand-seal" aria-hidden="true">裕</span>
          <span>
            <strong>EWA TRADING CO.</strong>
            <small>裕華參茸藥材公司</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">Our story</a>
          <a href="#offerings">What we carry</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="button button-small" href={phoneHref}>Call the shop</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A Chinatown neighborhood institution</p>
          <h1>Rooted in Chinatown. Here for generations.</h1>
          <p className="hero-lede">
            A family-run shop for Chinese herbs, tea, ginseng, pantry staples,
            and thoughtful guidance—welcoming neighbors from Chinatown and beyond.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href={directionsUrl} target="_blank" rel="noreferrer">
              Get directions <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link light-link" href={phoneHref}>
              (212) 964-2017 <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="hero-meta" aria-label="Store highlights">
            <div><strong>40+</strong><span>years of history</span></div>
            <div><strong>80</strong><span>Mulberry Street</span></div>
            <div><strong>3</strong><span>languages spoken</span></div>
          </div>
        </div>
        <figure className="hero-photo">
          <img src={assetPath("ewa-storefront-v2.jpg")} alt="The Ewa Trading storefront and blue awning at 80 Mulberry Street" />
          <figcaption>
            <span>Find the gold sign</span>
            <strong>80 Mulberry St.</strong>
          </figcaption>
        </figure>
      </section>

      <section className="quick-info" aria-label="Store information">
        <article>
          <span className="info-icon" aria-hidden="true">01</span>
          <div><small>Visit us</small><strong>80 Mulberry St, New York</strong></div>
        </article>
        <article>
          <span className="info-icon" aria-hidden="true">02</span>
          <div><small>Store hours</small><strong>Daily, 10 AM–6 PM</strong></div>
        </article>
        <article>
          <span className="info-icon" aria-hidden="true">03</span>
          <div><small>Questions?</small><strong>Call (212) 964-2017</strong></div>
        </article>
      </section>

      <section className="offerings section" id="offerings">
        <div className="section-heading">
          <p className="eyebrow">What you’ll find</p>
          <h2>A shop full of time-honored essentials.</h2>
          <p>
            Come with a question or a shopping list. The staff is known for taking
            time to explain products and traditional preparation methods.
          </p>
        </div>
        <div className="offering-grid">
          <article className="offering-card card-teal">
            <span className="card-number">01</span>
            <div className="jar jar-tall" aria-hidden="true"><i /><i /><i /></div>
            <h3>Chinese herbs</h3>
            <p>A wide selection of dried roots, flowers, fruits, seeds, and traditional ingredients.</p>
          </article>
          <article className="offering-card card-gold">
            <span className="card-number">02</span>
            <div className="tea-cup" aria-hidden="true"><i /></div>
            <h3>Tea & pantry</h3>
            <p>Everyday teas, red dates, dried goods, and ingredients for soups and home cooking.</p>
          </article>
          <article className="offering-card card-cream">
            <span className="card-number">03</span>
            <div className="root-mark" aria-hidden="true">人</div>
            <h3>Ginseng & roots</h3>
            <p>Ginseng, astragalus root, and other carefully selected traditional staples.</p>
          </article>
          <article className="offering-card card-red">
            <span className="card-number">04</span>
            <div className="box-stack" aria-hidden="true"><i /><i /><i /></div>
            <h3>Wellness goods</h3>
            <p>Traditional packaged products and practical guidance to help you shop with confidence.</p>
          </article>
        </div>
      </section>

      <section className="story section" id="about">
        <div className="story-photos">
          <figure className="story-photo story-photo-old">
            <img src={assetPath("ewa-history-1.jpg")} alt="The original Ewa Imports storefront at 24 Mott Street" />
            <figcaption>Original 24 Mott Street storefront, 1980s</figcaption>
          </figure>
          <figure className="story-photo story-photo-shop">
            <img src={assetPath("ewa-detail.jpg")} alt="Herbal drawers and products inside Ewa Trading" />
          </figure>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Rooted here since 1984</p>
          <h2>A family story that keeps growing.</h2>
          <p className="story-intro">
            Ewa Trading began at 24 Mott Street and now welcomes customers at 80
            Mulberry Street. Mr. and Mrs. Zhou have carried the shop forward for more
            than two decades, preserving a tradition built on knowledge, care, and community.
          </p>
          <ol className="timeline">
            <li><strong>1984</strong><span>The original shop opens on Mott Street.</span></li>
            <li><strong>1990s</strong><span>The Zhou family becomes part of the shop’s story.</span></li>
            <li><strong>Today</strong><span>A new generation of customers visits from across New York and beyond.</span></li>
          </ol>
          <blockquote>
            “I regard it as a treasure. I hope that ten or twenty years from now,
            this industry will continue to be passed on to serve the community.”
            <cite>— Zhou Rui Xian, via Welcome to Chinatown</cite>
          </blockquote>
        </div>
      </section>

      <section className="guidance section">
        <div>
          <p className="eyebrow">Come ready to learn</p>
          <h2>Friendly guidance, from shelf to home.</h2>
        </div>
        <div className="guidance-steps">
          <article><span>1</span><h3>Tell us what you need</h3><p>Bring a product name, shopping list, photo, or question.</p></article>
          <article><span>2</span><h3>Explore the selection</h3><p>Ask about available herbs, teas, roots, and pantry goods.</p></article>
          <article><span>3</span><h3>Learn the basics</h3><p>Get practical product and preparation guidance from the team.</p></article>
        </div>
      </section>

      <section className="visit section" id="visit">
        <div className="visit-photo">
          <img src={assetPath("ewa-shop.jpg")} alt="A selection of herbs arranged inside Ewa Trading" />
          <div className="photo-badge"><strong>裕華</strong><span>Mulberry Street</span></div>
        </div>
        <div className="visit-copy">
          <p className="eyebrow">Plan your visit</p>
          <h2>Stop by and say hello.</h2>
          <div className="visit-list">
            <div><small>Address</small><p>80 Mulberry Street<br />New York, NY 10013</p></div>
            <div><small>Store hours</small><p>Daily<br />10 AM–6 PM</p></div>
            <div><small>Phone</small><p><a href={phoneHref}>(212) 964-2017</a><br />Call to confirm hours</p></div>
            <div><small>Languages</small><p>English<br />Cantonese · Mandarin</p></div>
          </div>
          <div className="visit-actions">
            <a className="button button-gold" href={directionsUrl} target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
            <a className="button button-outline-light" href="https://www.instagram.com/ewatradingnyc/" target="_blank" rel="noreferrer">@ewatradingnyc</a>
          </div>
          <p className="hours-note">Hours can change on holidays. Please call before making a special trip.</p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-seal" aria-hidden="true">裕</span>
          <span><strong>EWA TRADING CO.</strong><small>Serving Chinatown since 1984</small></span>
        </a>
        <p>Herbs · Tea · Ginseng · Traditional goods</p>
        <p className="disclaimer">Products and information are not intended to diagnose, treat, cure, or prevent any disease. Consult a qualified healthcare professional for medical advice.</p>
        <p className="credit">Historic details and photography referenced from <a href="https://welcometochinatown.com/news/then-and-now-ewa-trading" target="_blank" rel="noreferrer">Welcome to Chinatown</a>.</p>
      </footer>
    </main>
  );
}
