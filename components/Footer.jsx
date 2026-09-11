import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">

        <div className="footer-brand">
          <div className="footer-title">
            BGM Entertainment
          </div>

          <p className="footer-subtitle">
            Music · Artist · Content
          </p>

          <p className="footer-company">
            Box Global Media
          </p>
        </div>


        <div className="footer-nav-wrap">

          <nav className="footer-nav">
            <Link href="/">HOME</Link>
            <Link href="/company/about">COMPANY</Link>
            <Link href="/artist">ARTISTS</Link>
            <Link href="/news">NEWS</Link>
            <Link href="/company/contact">CONTACT</Link>
          </nav>


          <div className="footer-socials">
            <a href="#" aria-label="YouTube">
              YT
            </a>

            <a href="#" aria-label="Instagram">
              IG
            </a>

            <a href="#" aria-label="X">
              X
            </a>

            <a href="#" aria-label="Facebook">
              FB
            </a>
          </div>

        </div>


        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} BGM Entertainment
          </span>

          <span>
            SEOUL · HO CHI MINH CITY
          </span>
        </div>

      </div>
    </footer>
  );
}
