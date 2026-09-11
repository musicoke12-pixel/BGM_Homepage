import Link from 'next/link';
import { getArtistById } from '../../lib/notion';

export default function ArtistDetailPage({ artist }) {
  if (!artist) {
    return (
      <main>
        <section className="section">
          <div className="site-container">
            <p className="empty-message">
              아티스트 정보를 불러올 수 없습니다.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="artist-detail">
        <div className="site-container">

          <div className="artist-detail-top">

            <div className="artist-detail-image-wrap">
              <img
                src={artist.thumbnail}
                alt={artist.name}
                className="artist-detail-image"
              />
            </div>

            <div className="artist-detail-info">

              <div className="artist-detail-label">
                ARTIST
              </div>

              <h1 className="artist-detail-name">
                {artist.englishName || artist.name}
              </h1>

              {artist.englishName && (
                <div className="artist-detail-korean-name">
                  {artist.name}
                </div>
              )}

              <div className="artist-detail-meta">

                {artist.type && (
                  <div className="artist-detail-meta-row">
                    <span>TYPE</span>
                    <strong>{artist.type}</strong>
                  </div>
                )}

                {artist.debutDate && (
                  <div className="artist-detail-meta-row">
                    <span>DEBUT</span>
                    <strong>
                      {formatDate(artist.debutDate)}
                    </strong>
                  </div>
                )}

              </div>

              {artist.summary && (
                <p className="artist-detail-summary">
                  {artist.summary}
                </p>
              )}

              {artist.sns && (
                <a
                  href={artist.sns}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link artist-detail-sns"
                >
                  OFFICIAL SNS
                  <span>↗</span>
                </a>
              )}

            </div>

          </div>


          {(artist.detail || artist.blocks?.length > 0) && (
            <div className="artist-detail-content">

              <div className="artist-detail-content-title">
                PROFILE
              </div>

              <div className="artist-detail-body">

                {artist.detail && (
                  <p className="artist-detail-description">
                    {artist.detail}
                  </p>
                )}

                {artist.blocks?.map((block) => (
                  <NotionBlock
                    key={block.id}
                    block={block}
                  />
                ))}

              </div>

            </div>
          )}


          <div className="artist-detail-bottom">
            <Link
              href="/artist"
              className="text-link"
            >
              ← ARTISTS
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}


function NotionBlock({ block }) {
  const type = block.type;
  const data = block[type];

  if (!data) return null;

  const text = data.rich_text
    ?.map((item) => item.plain_text)
    .join('');

  if (!text) return null;

  if (type === 'heading_1') {
    return <h2 className="notion-heading-1">{text}</h2>;
  }

  if (type === 'heading_2') {
    return <h3 className="notion-heading-2">{text}</h3>;
  }

  if (type === 'heading_3') {
    return <h4 className="notion-heading-3">{text}</h4>;
  }

  if (type === 'bulleted_list_item') {
    return (
      <div className="notion-list-item">
        <span>•</span>
        <p>{text}</p>
      </div>
    );
  }

  if (type === 'numbered_list_item') {
    return (
      <div className="notion-list-item">
        <span>—</span>
        <p>{text}</p>
      </div>
    );
  }

  if (type === 'quote') {
    return (
      <blockquote className="notion-quote">
        {text}
      </blockquote>
    );
  }

  return (
    <p className="notion-paragraph">
      {text}
    </p>
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


export async function getServerSideProps({ params }) {
  const artist = await getArtistById(params.id);

  return {
    props: {
      artist,
    },
  };
}
