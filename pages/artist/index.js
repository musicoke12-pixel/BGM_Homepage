import Link from 'next/link';
import { getArtists } from '../../lib/notion';

export default function ArtistPage({ artists }) {
  return (
    <main>
      <section className="section">
        <div className="site-container">

          <div className="artist-page-head">
            <div>
              <span className="section-number">01</span>
              <h1 className="display-title">ARTISTS</h1>
            </div>

            <p className="artist-page-copy">
              BGM Creative Studio와
              <br />
              함께하는 아티스트를 소개합니다.
            </p>
          </div>


          <div className="artist-grid artist-page-grid">
            {artists.map((artist, index) => (
              <Link
                href={`/artist/${artist.id}`}
                key={artist.id}
                className="artist-card"
              >
                <div className="artist-card-image-wrap">
                  <img
                    src={artist.thumbnail}
                    alt={artist.name}
                    className="artist-card-image"
                  />
                </div>

                <div className="artist-card-meta">
                  <div>
                    <h2>
                      {artist.englishName || artist.name}
                    </h2>

                    {artist.englishName && (
                      <p className="artist-card-korean-name">
                        {artist.name}
                      </p>
                    )}

                    <span className="artist-card-type">
                      {artist.type || 'ARTIST'}
                    </span>
                  </div>

                  <span className="artist-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </Link>
            ))}

            {artists.length === 0 && (
              <div className="empty-message">
                등록된 아티스트가 없습니다.
              </div>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}


export async function getStaticProps() {
  const artists = await getArtists();

  return {
    props: {
      artists,
    },

    revalidate: 60,
  };
}
