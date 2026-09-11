export default function AboutPage() {
  return (
    <main>
      <section className="section">
        <div className="site-container">

          <div className="company-page-head">
            <div>
              <span className="section-number">03</span>
              <h1 className="display-title">COMPANY</h1>
            </div>

            <p className="company-page-copy">
              음악과 아티스트,
              <br />
              그리고 콘텐츠를 만듭니다.
            </p>
          </div>


          <div className="company-about-grid">

            <div className="company-about-label">
              ABOUT
            </div>

            <div className="company-about-content">

              <h2>
                BGM Creative Studio는
                <br />
                음악을 중심으로 새로운 콘텐츠를 만듭니다.
              </h2>

              <div className="company-about-text">
                <p>
                  BGM Creative Studio는 아티스트와 음악의 가능성을 발견하고,
                  그 가치를 다양한 콘텐츠로 확장해 나가는 크리에이티브 스튜디오입니다.
                </p>

                <p>
                  음악 제작, 아티스트 매니지먼트, 영상 콘텐츠 등
                  다양한 분야를 연결하며 오래 기억될 수 있는 콘텐츠를 만들어갑니다.
                </p>
              </div>

            </div>

          </div>


          <div className="company-values">

            <div className="company-value-item">
              <span>01</span>
              <h3>MUSIC</h3>
              <p>
                좋은 음악이 가진 힘과
                가능성을 중요하게 생각합니다.
              </p>
            </div>

            <div className="company-value-item">
              <span>02</span>
              <h3>ARTIST</h3>
              <p>
                아티스트의 개성과 방향을
                함께 고민하고 성장합니다.
              </p>
            </div>

            <div className="company-value-item">
              <span>03</span>
              <h3>CONTENT</h3>
              <p>
                음악을 넘어 다양한 방식으로
                새로운 이야기를 만듭니다.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
