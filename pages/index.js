import Link from 'next/link';
import { getArtists, getNews } from '../lib/notion';

export default function Home({ artists, news }) {
  const featuredArtists = artists?.slice(0, 2) || [];
  const latestNews = news?.slice(0, 3) || [];

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <main>
        <section className="home-hero">
          <div className="site-container home-hero-inner">

            <div className="hero-small-label">
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
        <section className="home-section artists-section">
          <div className="site-container home-section-grid">

            <div className="section-intro">
              <div className="section-number">01</div>

              <h2>ARTISTS</h2>

              <p>
                음악으로,
                <br />
                사람과 세상을 연결합니다.
              </p>

              <Link href="/artist" className="text-link">
                VIEW ALL
                <span>→</span>
              </Link>
            </div>


            <div className="home-artists-grid">
              {featuredArtists.map((artist, index) => (
                <Link
                  href={`/artist/${artist.id}`}
                  key={artist.id}
                  className="home-artist-card"
                >
                  <div className="home-artist-image-wrap">
                    <img
                      src={artist.thumbnail}
                      alt={artist.name}
                      className="home-artist-image"
                    />
                  </div>

                  <div className="home-artist-info">
                    <div>
                      <h3>{artist.englishName || artist.name}</h3>

                      <p>
                        {artist.type || 'ARTIST'}
                      </p>
                    </div>

                    <span className="artist-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
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
        <section className="home-section news-section">
          <div className="site-container home-section-grid">

            <div className="section-intro">
              <div className="section-number">02</div>

              <h2>NEWS</h2>

              <p>
                BGM의 새로운 소식을
                <br />
                가장 먼저 만나보세요.
              </p>

              <Link href="/news" className="text-link">
                VIEW ALL
                <span>→</span>
              </Link>
            </div>


            <div className="home-news-list">
              {latestNews.map((item) => (
                <Link
                  href={`/news/${item.id}`}
                  key={item.id}
                  className="home-news-row"
                >
                  <span className="home-news-date">
                    {formatDate(item.date)}
                  </span>

                  <span className="home-news-title">
                    {item.title}
                  </span>

                  <span className="home-news-arrow">
                    →
                  </span>
                </Link>
              ))}

              {latestNews.length === 0 && (
                <div className="empty-message">
                  등록된 소식이 없습니다.
                </div>
              )}
            </div>

          </div>
        </section>
      </main>
    </>
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
