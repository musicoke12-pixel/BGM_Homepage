export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="site-container">

          <div className="contact-page-head">
            <div>
              <span className="section-number">05</span>
              <h1 className="display-title">CONTACT</h1>
            </div>

            <p className="contact-page-copy">
              함께 만들고 싶은
              <br />
              이야기를 들려주세요.
            </p>
          </div>


          <div className="contact-grid">

            <div className="contact-label">
              GET IN TOUCH
            </div>

            <div className="contact-content">

              <div className="contact-block">
                <span className="contact-block-label">
                  EMAIL
                </span>

                <a
                  href="mailto:contact@bgmcreativestudio.com"
                  className="contact-main-link"
                >
                  contact@bgmcreativestudio.com
                </a>
              </div>


              <div className="contact-block">
                <span className="contact-block-label">
                  BUSINESS
                </span>

                <p>
                  음악 제작, 아티스트 협업,
                  <br />
                  콘텐츠 제작 및 기타 비즈니스 문의
                </p>
              </div>


              <div className="contact-block">
                <span className="contact-block-label">
                  LOCATION
                </span>

                <p>
                  SEOUL
                  <br />
                  HO CHI MINH CITY
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
