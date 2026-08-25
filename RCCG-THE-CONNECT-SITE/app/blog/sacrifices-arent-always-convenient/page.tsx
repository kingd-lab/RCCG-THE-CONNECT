import Link from "next/link";

export default function ArticlePage() {
  return (
    <>
      <main className="full-article-page">

        <article className="full-article-container">

          {/* BACK */}
          <Link href="/blog" className="full-article-back">
            ← Back to Blog
          </Link>


          {/* HEADER */}
          <header className="full-article-header">

            <span className="full-article-author">
              Notes By Sis Joy
            </span>

            <h1>
              Sacrifices Aren&apos;t Always Convenient
            </h1>

            <p className="full-article-subtitle">
              It&apos;s a covenant.
            </p>

          </header>


          {/* IMAGE + ARTICLE */}
          <div className="article-layout">

            {/* LEFT SIDE */}
            <aside className="article-image-column">

              <div className="full-article-image-wrap">

                <img
                  src="/blog1.jpg"
                  alt="Sacrifices aren't always convenient. It's a covenant."
                  className="full-article-image"
                />

              </div>

              <div className="image-note">

                <span>
                  Notes By Sis Joy
                </span>

                <p>
                  Faith, obedience and daily Christian living.
                </p>

              </div>

            </aside>


            {/* RIGHT SIDE */}
            <div className="full-article-body">

              <p className="full-article-lead">
                Sacrifices aren&apos;t always convenient.
                It&apos;s a covenant.
              </p>

              <p>
                We often think of sacrifice as something optional,
                something we give when it&apos;s easy. But true
                sacrifice is rarely convenient. It&apos;s not about
                comfort, it&apos;s about covenant.
              </p>

              <p>
                If sacrifice were easy, Abel wouldn&apos;t have been
                killed. His offering was accepted by God, not because
                it was convenient, but because it cost him something
                real.
              </p>

              <p>
                And that cost stirred up hatred in the heart of his
                brother, Cain. Why? Because true sacrifice exposes
                false ones. Genuine obedience makes half-hearted
                devotion uncomfortable.
              </p>

              <p>
                Real sacrifice carries a price that reaches heaven,
                and sometimes stirs resistance on earth.
              </p>

              <p>
                Don&apos;t expect your sacrifice to be celebrated by
                everyone. Don&apos;t expect it to always make sense.
              </p>

              <p>
                Sacrifice, by nature, costs. It stretches you. It pulls
                on your time, your energy, your pride, your resources.
              </p>

              <p>
                But it ties you to something deeper, covenant.
              </p>

              <p>
                Not just what you do for God, but what you do because
                you belong to Him.
              </p>

              <p>
                So give even when it&apos;s hard. Serve even when no
                one claps. Lay it down, not for recognition, but for
                reverence, because heaven responds to what&apos;s
                costly.
              </p>

              <p>
                God honors what&apos;s born out of covenant,
                not convenience.
              </p>


              {/* SIGNATURE */}
              <div className="full-article-signature">
                NOTE FROM SISTER JOY, SUPERWOMAN AYOLADUN.
              </div>

            </div>

          </div>


          {/* FOOTER */}
          <footer className="full-article-footer">

            <Link
              href="/blog"
              className="full-article-return"
            >
              ← Back to all articles
            </Link>

          </footer>

        </article>

      </main>


      <style>{`

        /* =========================================
           PAGE
        ========================================= */

        .full-article-page {
          width: 100%;
          min-height: 100vh;

          background: #050505;
          color: #ffffff;

          padding: 45px 30px 100px;

          font-family: Arial, Helvetica, sans-serif;
        }


        .full-article-container {
          width: 100%;
          max-width: 1350px;

          margin: 0 auto;
        }


        /* =========================================
           BACK
        ========================================= */

        .full-article-back {
          display: inline-flex;

          color: #8bffb0;

          text-decoration: none;

          font-size: 15px;
          font-weight: 700;

          margin-bottom: 35px;

          transition: 0.25s ease;
        }


        .full-article-back:hover {
          transform: translateX(-4px);
          opacity: 0.8;
        }


        /* =========================================
           HEADER
        ========================================= */

        .full-article-header {
          width: 100%;
          max-width: 950px;

          margin: 0 auto 55px;

          text-align: center;
        }


        .full-article-author {
          display: inline-block;

          color: #8bffb0;

          font-size: 15px;
          font-weight: 700;

          margin-bottom: 14px;
        }


        .full-article-header h1 {
          color: #ffffff;

          font-size: clamp(45px, 5vw, 72px);

          line-height: 1.05;

          font-weight: 600;

          letter-spacing: -2px;

          margin: 0 0 18px;
        }


        .full-article-subtitle {
          color: #aeb7c6;

          font-size: 20px;

          margin: 0;
        }


        /* =========================================
           TWO COLUMN LAYOUT
        ========================================= */

        .article-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 0.9fr)
            minmax(0, 1.1fr);

          gap: 65px;

          align-items: start;
        }


        /* =========================================
           IMAGE SIDE
        ========================================= */

        .article-image-column {
          position: sticky;

          top: 110px;
        }


        .full-article-image-wrap {
          width: 100%;

          overflow: hidden;

          border-radius: 24px;

          background: #111;

          border: 1px solid rgba(255,255,255,0.1);
        }


        .full-article-image {
          display: block;

          width: 100%;
          height: auto;

          object-fit: cover;
        }


        .image-note {
          margin-top: 18px;

          padding: 18px 20px;

          border-radius: 14px;

          background: rgba(139,255,176,0.06);

          border: 1px solid rgba(139,255,176,0.15);
        }


        .image-note span {
          display: block;

          color: #8bffb0;

          font-size: 14px;
          font-weight: 700;

          margin-bottom: 6px;
        }


        .image-note p {
          color: #9ca3af;

          font-size: 14px;

          line-height: 1.6;

          margin: 0;
        }


        /* =========================================
           ARTICLE SIDE
        ========================================= */

        .full-article-body {
          width: 100%;

          color: #cbd0d8;

          font-size: 18px;

          line-height: 1.9;
        }


        .full-article-body p {
          margin: 0 0 27px;
        }


        .full-article-lead {
          color: #ffffff;

          font-size: 25px;

          line-height: 1.6;

          font-weight: 500;

          padding-bottom: 25px;

          margin-bottom: 30px !important;

          border-bottom:
            1px solid rgba(255,255,255,0.1);
        }


        /* =========================================
           SIGNATURE
        ========================================= */

        .full-article-signature {
          margin-top: 42px;

          padding: 22px 24px;

          color: #8bffb0;

          background: rgba(139,255,176,0.07);

          border:
            1px solid rgba(139,255,176,0.18);

          border-radius: 16px;

          font-size: 13px;

          font-weight: 700;

          line-height: 1.6;
        }


        /* =========================================
           FOOTER
        ========================================= */

        .full-article-footer {
          margin-top: 75px;

          padding-top: 35px;

          border-top:
            1px solid rgba(255,255,255,0.1);

          text-align: center;
        }


        .full-article-return {
          display: inline-flex;

          justify-content: center;
          align-items: center;

          background: #8bffb0;

          color: #000;

          text-decoration: none;

          padding: 15px 28px;

          border-radius: 13px;

          font-size: 15px;

          font-weight: 700;

          transition: 0.3s ease;
        }


        .full-article-return:hover {
          background: #73f39d;

          transform: translateY(-2px);
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 950px) {

          .article-layout {
            gap: 35px;

            grid-template-columns:
              minmax(0, 0.95fr)
              minmax(0, 1.05fr);
          }


          .full-article-body {
            font-size: 17px;
          }


          .full-article-lead {
            font-size: 21px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {

          .full-article-page {
            padding: 30px 16px 65px;
          }


          .full-article-back {
            margin-bottom: 25px;
          }


          .full-article-header {
            text-align: left;

            margin-bottom: 28px;
          }


          .full-article-author {
            font-size: 13px;
          }


          .full-article-header h1 {
            font-size: 37px;

            line-height: 1.08;

            letter-spacing: -1px;

            margin-bottom: 14px;
          }


          .full-article-subtitle {
            font-size: 17px;
          }


          /* STACK ON MOBILE */

          .article-layout {
            display: block;
          }


          .article-image-column {
            position: static;

            width: 100%;

            margin-bottom: 35px;
          }


          .full-article-image-wrap {
            border-radius: 16px;
          }


          .image-note {
            margin-top: 12px;
          }


          .full-article-body {
            width: 100%;

            font-size: 16px;

            line-height: 1.8;
          }


          .full-article-body p {
            margin-bottom: 22px;
          }


          .full-article-lead {
            font-size: 20px;

            padding-bottom: 20px;

            margin-bottom: 25px !important;
          }


          .full-article-signature {
            margin-top: 32px;

            padding: 18px;

            font-size: 12px;
          }


          .full-article-footer {
            margin-top: 50px;
          }


          .full-article-return {
            width: 100%;
          }

        }

      `}</style>

    </>
  );
}