import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" aria-label="BGM Home">
              <div className="footer-logo-frame">
                <img
                  src="/bgm-logo.png"
                  alt="BGM Creative Studio"
                  className="footer-logo-image"
                />
              </div>
            </Link>
          </div>

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
