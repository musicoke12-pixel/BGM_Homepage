export default function BusinessPage() {
  return (
    <main>
      <section className="section">
        <div className="site-container">

          <div className="business-page-head">
            <div>
              <span className="section-number">04</span>
              <h1 className="display-title">BUSINESS</h1>
            </div>

            <p className="business-page-copy">
              음악을 중심으로
              <br />
              다양한 영역을 연결합니다.
            </p>
          </div>


          <div className="business-list">

            <div className="business-item">
              <div className="business-item-number">01</div>

              <div className="business-item-title">
                <h2>MUSIC</h2>
              </div>

              <div className="business-item-content">
                <h3>
                  음악 제작
                </h3>

                <p>
                  아티스트와 프로젝트의 방향에 맞는 음악을 기획하고
                  제작합니다. 음원 제작부터 프로듀싱까지 음악의 완성도를
                  함께 만들어갑니다.
                </p>
              </div>
            </div>


            <div className="business-item">
              <div className="business-item-number">02</div>

              <div className="business-item-title">
                <h2>ARTIST</h2>
              </div>

              <div className="business-item-content">
                <h3>
                  아티스트 매니지먼트
                </h3>

                <p>
                  아티스트의 개성과 가능성을 기반으로 활동 방향을 함께
                  설계하고, 음악과 콘텐츠를 통해 지속적으로 성장할 수 있는
                  기반을 만들어갑니다.
                </p>
              </div>
            </div>


            <div className="business-item">
              <div className="business-item-number">03</div>

              <div className="business-item-title">
                <h2>CONTENT</h2>
              </div>

              <div className="business-item-content">
                <h3>
                  콘텐츠 제작
                </h3>

                <p>
                  뮤직비디오와 영상 콘텐츠를 비롯해 음악과 아티스트의
                  이야기를 효과적으로 전달할 수 있는 다양한 콘텐츠를
                  기획하고 제작합니다.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
