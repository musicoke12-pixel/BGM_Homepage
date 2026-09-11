import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">

        <nav className="header-nav header-nav-left">
          <Link href="/" className="active">
            HOME
          </Link>

          <Link href="/company/about">
            COMPANY
          </Link>

          <Link href="/artist">
            ARTISTS
          </Link>

          <Link href="/news">
            NEWS
          </Link>

          <Link href="/company/contact">
            CONTACT
          </Link>
        </nav>


        <div className="header-right">
          <div className="header-socials">
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

          <div className="header-divider" />

          <div className="header-languages">
            <button type="button">
              KR
            </button>

            <button type="button">
              EN
            </button>

            <button type="button">
              VI
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
