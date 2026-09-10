import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">

        <div className="footer-top">

          {/* COMPANY LOGO */}
          <div className="footer-brand">
            <Link href="/">
              <img
                src="/bgm-logo.png"
                alt="BGM Creative Studio"
                className="footer-logo-image"
              />
            </Link>
          </div>

          {/* FOOTER INFO */}
          <div className="footer-company">
            <div>BOX GLOBAL MEDIA</div>
            <div>MUSIC · ARTIST · CONTENT</div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} BOX GLOBAL MEDIA
          </span>

          <span>
            ALL RIGHTS RESERVED.
          </span>
        </div>

      </div>
    </footer>
  );
}
