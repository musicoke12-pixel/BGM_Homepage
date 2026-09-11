import Link from 'next/link';

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm10.1 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.3 2H22l-8.1 9.2L23.4 22H16l-5.8-7.6L3.5 22H0l8.6-9.8L-.5 2H7l5.2 6.9L18.3 2Zm-1.3 18h2L5.9 3.9H3.8L17 20Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8H17V2.3c-.3 0-1.5-.3-2.8-.3-2.8 0-4.7 1.7-4.7 4.9v2.6H6.4V13h3.1v9h4Z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">

        <nav className="header-nav">
          <Link href="/">HOME</Link>
          <Link href="/company/about">COMPANY</Link>
          <Link href="/artist">ARTISTS</Link>
          <Link href="/news">NEWS</Link>
          <Link href="/company/contact">CONTACT</Link>
        </nav>

        <div className="header-socials">

          <a
            href="#"
            aria-label="YouTube"
            className="social-icon"
          >
            <YouTubeIcon />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="social-icon"
          >
            <InstagramIcon />
          </a>

          <a
            href="#"
            aria-label="X"
            className="social-icon"
          >
            <XIcon />
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="social-icon"
          >
            <FacebookIcon />
          </a>

        </div>

      </div>
    </header>
  );
}
