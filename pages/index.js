import Link from 'next/link';
import { getArtists, getNews } from '../lib/notion';

export default function Home({ artists, news }) {
  const featuredArtists = artists?.slice(0, 4) || [];
  const latestNews = news?.slice(0, 3) || [];

  return (
    <main className="home-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="home-hero">
        <div className="site-container home-hero-inner">

          <div className="hero-label">
            MUSIC
            <br />
            ARTIST
            <br />
            CONTENT
          </div>

          <div className="hero-logo-wrap">
            <img
              src="/bgm-logo.png"
              alt="BGM Creative Studio"
              className="hero-logo"
            />
          </div>

          <div className="hero-bottom">

            <p className="hero-message">
              좋은 음악이,
              <br />
              더 나은 내일을 만듭니다.
            </p>

            <div className="hero-scroll">
              <span>SCROLL</span>
              <span className="hero-scroll-arrow">↓</span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ARTISTS
      ====================================================== */}
      <section className="home-artists-section">
        <div className="site-container home-feature-row">

          <div className="home-feature-heading">

            <div className="feature-index">
              <span>01</span>
              <span className="feature-line" />
            </div>

            <h2>ARTISTS</h2>

            <p>
              BGM Creative Studio와
              <br />
              함께하는 아티스트를 소개합니다.
            </p>

            <Link
              href="/artist"
              className="home-view-all"
            >
              VIEW ALL
              <span>→</span>
            </Link>

          </div>


          <div className="home-artist-list">
            {featuredArtists.map((artist) => (
              <Link
                href={`/artist/${artist.id}`}
                key={artist.id}
                className="home-artist-item"
              >
                <div className="home-artist-thumb">
                  <img
                    src={artist.thumbnail}
                    alt={artist.name}
                  />
                </div>

                <div className="home-artist-name">
                  {artist.englishName || artist.name}
                </div>
              </Link>
            ))}

            {featuredArtists.length === 0 && (
              <div className="empty-message">
                등록된 아티스트가 없습니다.
              </div>
            )}
          </div>

        </div>
      </section>


      {/* =====================================================
          NEWS
      ====================================================== */}
      <section className="home-news-section">
        <div className="site-container home-feature-row">

          <div className="home-feature-heading">

            <div className="feature-index">
              <span>02</span>
              <span className="feature-line" />
            </div>

            <h2>NEWS</h2>

            <p>
              BGM의 새로운 소식을
              <br />
              만나보세요.
            </p>

          </div>


          <div className="home-news-cards">

            {latestNews.map((item) => (
              <Link
                href={`/news/${item.id}`}
                key={item.id}
                className="home-news-card"
              >

                {item.media && (
                  <div className="home-news-thumb">
                    <img
                      src={item.media}
                      alt={item.title}
                    />
                  </div>
                )}

                <div className="home-news-info">
                  <span className="home-news-category">
                    {item.category || 'NEWS'}
                  </span>

                  <h3>{item.title}</h3>

                  <span className="home-news-date">
                    {formatDate(item.date)}
                  </span>
                </div>

              </Link>
            ))}

          </div>


          <Link
            href="/news"
            className="home-news-view-all"
          >
            VIEW ALL
            <span>→</span>
          </Link>

        </div>
      </section>

    </main>
  );
}


function formatDate(date) {
  if (!date) return '';

  const d = new Date(date);

  if (Number.isNaN(d.getTime())) {
    return date;
  }

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}


export async function getStaticProps() {
  const [artists, news] = await Promise.all([
    getArtists(),
    getNews(),
  ]);

  return {
    props: {
      artists,
      news,
    },

    revalidate: 60,
  };
}
