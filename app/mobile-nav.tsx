"use client";

import { useEffect, useState } from "react";

const sectionLinks = [
  { href: "#top", label: "Home", number: "01" },
  { href: "#offerings", label: "What we carry", number: "02" },
  { href: "#about", label: "Our story", number: "03" },
  { href: "#features", label: "Features", number: "04" },
  { href: "#visit", label: "Visit the shop", number: "05" },
];

type MobileNavProps = {
  directionsUrl: string;
  phoneHref: string;
};

export default function MobileNav({ directionsUrl, phoneHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        className={`menu-toggle${open ? " is-open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <div
        className="mobile-menu"
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        hidden={!open}
      >
        <div className="mobile-menu-intro">
          <span>Explore Ewa Trading</span>
          <p>Jump to any part of the shop’s story.</p>
        </div>
        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          {sectionLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              <small>{link.number}</small>
              <strong>{link.label}</strong>
              <span aria-hidden="true">↘</span>
            </a>
          ))}
        </nav>
        <div className="mobile-menu-actions">
          <a className="button button-gold" href={directionsUrl} target="_blank" rel="noreferrer">
            Get directions <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-outline-dark" href={phoneHref} onClick={() => setOpen(false)}>
            Call (212) 964-2017
          </a>
        </div>
      </div>
    </div>
  );
}
