import Link from "next/link";

export default function TheCallToPurityPage() {
  return (
    <>
      <main className="purity-page">

        <article className="purity-container">

          {/* BACK */}
          <Link href="/blog" className="purity-back">
            ← Back to Blog
          </Link>


          {/* HEADER */}
          <header className="purity-header">

            <span className="purity-author">
              Prophetic Spoken Word
            </span>

            <h1>
              The Call To Purity
            </h1>

            <p className="purity-subtitle">
              Purity is not old-fashioned. It is prophetic.
            </p>

          </header>


          {/* IMAGE + ARTICLE */}
          <div className="purity-layout">

            {/* LEFT SIDE */}
            <aside className="purity-image-column">

              <div className="purity-image-wrap">

                <img
                  src="/blog2.jpg"
                  alt="The Call To Purity"
                  className="purity-image"
                />

              </div>

              <div className="purity-image-note">

                <span>
                  Prophetic Spoken Word 
                </span>

                <p>
                  Holiness, discipline and standing apart
                  in a compromising world.
                </p>

              </div>

            </aside>


            {/* RIGHT SIDE */}
            <div className="purity-body">

              <p className="purity-lead">
                Purity… They say it is old-fashioned. They say it
                is for another generation, for another era, for
                people who do not understand &quot;real life.&quot;
              </p>

              <p>
                But the Spirit whispers, &quot;What is pure is never
                outdated.&quot; Purity is not a trend. It is a kingdom
                culture. It is heaven&apos;s language in the mouth of
                those who refuse to bow.
              </p>

              <p>
                In a world where everything sacred is mocked, where
                innocence is treated like ignorance, and compromise
                is celebrated as freedom, purity rises like a quiet
                fire, unmoved, unshaken and unashamed.
              </p>

              <p>
                Purity is not weakness. It is a mantle. It is a
                calling. It is the strength that stands when
                temptations roar, the grace that holds when every
                voice says, &quot;Give in.&quot; It is the fire that
                refuses to die even when the winds of lust blow
                fiercely.
              </p>

              <p>
                They say you are old school. They say you are too
                slow, too strict, too deep. But they do not know.
                You are guarding a gate. You are protecting a destiny.
                You are carrying a prophecy that cannot be mixed with
                defilement.
              </p>

              <p>
                Purity is not about shame or fear. It is not about
                pretending to be perfect. It is the boldness to say:
                &quot;I am choosing a higher road. I am choosing a
                brighter path. I am choosing what my spirit deserves,
                not what my flesh demands.&quot;
              </p>

              <p>
                Purity is a war. A beautiful, holy war. A war that
                proves you understand your worth, your calling, and
                the weight of the glory you carry.
              </p>

              <p>
                Hear this. There is a fragrance that only the pure
                can carry. A clarity that only the pure can hear.
                A strength that only the pure can walk in. Purity
                sharpens your discernment, makes your spirit
                sensitive, and keeps your destiny uncluttered.
              </p>

              <p>
                In the spirit, purity is not silence, it is a sound.
                A rising sound. A fierce sound. A sound that says:
                &quot;I will not bow. I will not bend. I will not
                trade my birthright for the temporary sweetness of
                compromise.&quot;
              </p>

              <p>
                Let them mock you. Let them misunderstand your
                discipline. Let them call you old-fashioned. Because
                when the noise fades, and the pleasures wash away
                like smoke, purity will still be standing, shining
                like a river that never loses its flow.
              </p>

              <p>
                For purity is not old. It is eternal. It is ancient
                and fresh at the same time. It is the posture of
                those who know who they are in God. It is the armor
                of those who walk with purpose. It is the language
                of those who rise like eagles, not trapped by mud,
                not consumed by shadows, but lifted by the wind of
                the Spirit.
              </p>

              <p>
                So hear the call today. Return to purity. Return to
                discipline. Return to holiness that carries fire.
                For there is a generation rising, a generation that
                will shine without shame, stand without fear, and
                walk without compromise.
              </p>

              <p>
                And you, you are part of that generation. Chosen.
                Set apart. Called to be light in a world that
                celebrates the dark.
              </p>

              <p>
                Purity is not old-fashioned. Purity is prophetic.
                Purity is powerful. Purity is freedom.
              </p>

              <p>
                And in this season, purity is God&apos;s roar.
              </p>


              {/* SIGNATURE */}
              <div className="purity-signature">
                PROPHETIC SPOKEN WORD: THE CALL TO PURITY by Bro Omosehin Victor 
                
              
              </div>

            </div>

          </div>


          {/* FOOTER */}
          <footer className="purity-footer">

            <Link
              href="/blog"
              className="purity-return"
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

        .purity-page {
          width: 100%;
          min-height: 100vh;

          background: #050505;
          color: #ffffff;

          padding: 45px 30px 100px;

          font-family: Arial, Helvetica, sans-serif;
        }

        .purity-container {
          width: 100%;
          max-width: 1350px;

          margin: 0 auto;
        }


        /* BACK */

        .purity-back {
          display: inline-flex;

          color: #8bffb0;

          text-decoration: none;

          font-size: 15px;
          font-weight: 700;

          margin-bottom: 35px;

          transition: 0.25s ease;
        }

        .purity-back:hover {
          transform: translateX(-4px);
          opacity: 0.8;
        }


        /* HEADER */

        .purity-header {
          width: 100%;
          max-width: 950px;

          margin: 0 auto 55px;

          text-align: center;
        }

        .purity-author {
          display: inline-block;

          color: #8bffb0;

          font-size: 15px;
          font-weight: 700;

          margin-bottom: 14px;
        }

        .purity-header h1 {
          color: #ffffff;

          font-size: clamp(45px, 5vw, 72px);

          line-height: 1.05;

          font-weight: 600;

          letter-spacing: -2px;

          margin: 0 0 18px;
        }

        .purity-subtitle {
          color: #aeb7c6;

          font-size: 20px;

          margin: 0;
        }


        /* =========================================
           TWO COLUMN LAYOUT
        ========================================= */

        .purity-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 0.9fr)
            minmax(0, 1.1fr);

          gap: 65px;

          align-items: start;
        }


        /* IMAGE */

        .purity-image-column {
          position: sticky;
          top: 110px;
        }

        .purity-image-wrap {
          width: 100%;

          overflow: hidden;

          border-radius: 24px;

          background: #111;

          border: 1px solid rgba(255,255,255,0.1);
        }

        .purity-image {
          display: block;

          width: 100%;
          height: auto;

          object-fit: cover;
        }

        .purity-image-note {
          margin-top: 18px;

          padding: 18px 20px;

          border-radius: 14px;

          background: rgba(139,255,176,0.06);

          border: 1px solid rgba(139,255,176,0.15);
        }

        .purity-image-note span {
          display: block;

          color: #8bffb0;

          font-size: 14px;
          font-weight: 700;

          margin-bottom: 6px;
        }

        .purity-image-note p {
          color: #9ca3af;

          font-size: 14px;

          line-height: 1.6;

          margin: 0;
        }


        /* ARTICLE */

        .purity-body {
          width: 100%;

          color: #cbd0d8;

          font-size: 18px;

          line-height: 1.9;
        }

        .purity-body p {
          margin: 0 0 27px;
        }

        .purity-lead {
          color: #ffffff;

          font-size: 25px;

          line-height: 1.6;

          font-weight: 500;

          padding-bottom: 25px;

          margin-bottom: 30px !important;

          border-bottom:
            1px solid rgba(255,255,255,0.1);
        }


        /* SIGNATURE */

        .purity-signature {
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


        /* FOOTER */

        .purity-footer {
          margin-top: 75px;

          padding-top: 35px;

          border-top:
            1px solid rgba(255,255,255,0.1);

          text-align: center;
        }

        .purity-return {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          background: #8bffb0;

          color: #000;

          text-decoration: none;

          padding: 15px 28px;

          border-radius: 13px;

          font-size: 15px;

          font-weight: 700;

          transition: 0.3s ease;
        }

        .purity-return:hover {
          background: #73f39d;

          transform: translateY(-2px);
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 950px) {

          .purity-layout {
            gap: 35px;

            grid-template-columns:
              minmax(0, 0.95fr)
              minmax(0, 1.05fr);
          }

          .purity-body {
            font-size: 17px;
          }

          .purity-lead {
            font-size: 21px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {

          .purity-page {
            padding: 30px 16px 65px;
          }

          .purity-back {
            margin-bottom: 25px;
          }

          .purity-header {
            text-align: left;

            margin-bottom: 28px;
          }

          .purity-author {
            font-size: 13px;
          }

          .purity-header h1 {
            font-size: 37px;

            line-height: 1.08;

            letter-spacing: -1px;

            margin-bottom: 14px;
          }

          .purity-subtitle {
            font-size: 17px;
          }


          /* STACK IMAGE ABOVE ARTICLE */

          .purity-layout {
            display: block;
          }

          .purity-image-column {
            position: static;

            width: 100%;

            margin-bottom: 35px;
          }

          .purity-image-wrap {
            border-radius: 16px;
          }

          .purity-image-note {
            margin-top: 12px;
          }

          .purity-body {
            width: 100%;

            font-size: 16px;

            line-height: 1.8;
          }

          .purity-body p {
            margin-bottom: 22px;
          }

          .purity-lead {
            font-size: 20px;

            padding-bottom: 20px;

            margin-bottom: 25px !important;
          }

          .purity-signature {
            margin-top: 32px;

            padding: 18px;

            font-size: 12px;
          }

          .purity-footer {
            margin-top: 50px;
          }

          .purity-return {
            width: 100%;
          }

        }

      `}</style>

    </>
  );
}
