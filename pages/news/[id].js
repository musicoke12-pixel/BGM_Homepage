import Link from 'next/link';
import { getNewsById } from '../../lib/notion';

export default function NewsDetailPage({ article }) {
  if (!article) {
    return (
      <main>
        <section className="section">
          <div className="site-container">
            <p className="empty-message">
              게시물을 불러올 수 없습니다.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <article className="news-detail">
        <div className="site-container">

          <div className="news-detail-head">
            <div className="news-detail-meta">
              <span>{article.category || 'NEWS'}</span>
              <span>{formatDate(article.date)}</span>
            </div>

            <h1 className="news-detail-title">
              {article.title}
            </h1>
          </div>

          {article.media && (
            <div className="news-detail-media">
              <img
                src={article.media}
                alt={article.title}
              />
            </div>
          )}

          <div className="news-detail-content">
            <div className="news-detail-content-label">
              ARTICLE
            </div>

            <div className="news-detail-body">
              {article.blocks?.length > 0 ? (
                article.blocks.map((block) => (
                  <NotionBlock
                    key={block.id}
                    block={block}
                  />
                ))
              ) : (
                <p className="empty-message">
                  본문 내용이 없습니다.
                </p>
              )}
            </div>
          </div>

          <div className="news-detail-bottom">
            <Link
              href="/news"
              className="text-link"
            >
              ← NEWS
            </Link>
          </div>

        </div>
      </article>
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

  if (type === 'image') {
    const imageUrl =
      data.file?.url ||
      data.external?.url ||
      '';

    if (!imageUrl) return null;

    return (
      <div className="notion-image">
        <img
          src={imageUrl}
          alt=""
        />
      </div>
    );
  }

  if (!text) return null;

  if (type === 'heading_1') {
    return (
      <h2 className="notion-heading-1">
        {text}
      </h2>
    );
  }

  if (type === 'heading_2') {
    return (
      <h3 className="notion-heading-2">
        {text}
      </h3>
    );
  }

  if (type === 'heading_3') {
    return (
      <h4 className="notion-heading-3">
        {text}
      </h4>
    );
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
  const article = await getNewsById(params.id);

  return {
    props: {
      article,
    },
  };
}
