import Link from 'next/link';
import { getNews } from '../../lib/notion';

export default function NewsPage({ news }) {
  return (
    <main>
      <section className="section">
        <div className="site-container">

          <div className="news-page-head">
            <div>
              <span className="section-number">02</span>
              <h1 className="display-title">NEWS</h1>
            </div>

            <p className="news-page-copy">
              BGM Creative Studio의
              <br />
              새로운 소식을 전합니다.
            </p>
          </div>


          <div className="news-page-list">
            {news.map((item, index) => (
              <Link
                href={`/news/${item.id}`}
                key={item.id}
                className="news-page-row"
              >
                <div className="news-page-index">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="news-page-date">
                  {formatDate(item.date)}
                </div>

                <div className="news-page-main">
                  <span className="news-page-category">
                    {item.category || 'NEWS'}
                  </span>

                  <h2>
                    {item.title}
                  </h2>
                </div>

                <div className="news-page-arrow">
                  →
                </div>
              </Link>
            ))}

            {news.length === 0 && (
              <div className="empty-message">
                등록된 소식이 없습니다.
              </div>
            )}
          </div>

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
  const news = await getNews();

  return {
    props: {
      news,
    },

    revalidate: 60,
  };
}
