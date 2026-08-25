import Link from "next/link";

export default function NightOfWorshipPage() {
  return (
    <>
      <main className="night-event-page">

        <div className="night-event-container">

          {/* BACK */}

          <Link href="/#events" className="night-back">
            ← Back to Events
          </Link>


          {/* HEADER */}

          <header className="night-event-header">

            <span className="night-event-label">
              RCCG The Connect Church
            </span>

            <h1>
              Night of Worship
            </h1>

            <p>
              A night of worship, revival and supernatural encounters.
            </p>

          </header>


          {/* FLYER + ARTICLE */}

          <div className="night-event-layout">

            {/* LEFT SIDE - FLYER */}

            <div className="night-flyer-column">

              <img
                src="/event2.jpg"
                alt="Night of Worship Flyer"
                className="night-flyer"
              />

            </div>


            {/* RIGHT SIDE - ARTICLE */}

            <article className="night-event-article">

              <h2>
                An Evening in God&apos;s Presence
              </h2>

              <p>
                There are moments when we need to step away from the
                noise of everyday life and simply dwell in God&apos;s
                presence.
              </p>

              <p>
                <strong>Night of Worship</strong> is a special gathering
                dedicated to heartfelt worship, prayer, revival and
                spiritual renewal.
              </p>

              <p>
                It is an opportunity for us to come together as one
                family, lift our voices to God and create room for a
                deeper encounter with Him.
              </p>

              <p>
                Through worship, prayer and the Word, we believe God
                will strengthen hearts, restore hope and draw people
                into a closer relationship with Him.
              </p>

              <p>
                Whether you are trusting God for direction, renewal,
                healing, encouragement or simply desire to spend
                quality time in His presence, this night is for you.
              </p>

              <p>
                Come with an expectant heart and invite your family
                and friends.
              </p>


              <blockquote>
                Join us for a night of worship, revival and
                supernatural encounters.
              </blockquote>


              {/* EVENT DETAILS */}

              <div className="night-event-details">

                <h3>
                  Programme Details
                </h3>

                <p>
                  <strong>Programme:</strong> Night of Worship
                </p>

                <p>
                  <strong>Time:</strong> Friday • 10:00 PM
                </p>

                <p>
                  <strong>Venue:</strong> RCCG Dominion Parish, Opic Area 5,Iperin Gate ,Along Lusada ,Agbara Road,Ogun State.
                </p>

              </div>

            </article>

          </div>


          {/* BOTTOM */}

          <div className="night-bottom">

            <Link
              href="/#events"
              className="night-return-btn"
            >
              ← View Other Events
            </Link>

          </div>

        </div>

      </main>


      <style>{`

        /* ==========================================
           NIGHT OF WORSHIP PAGE
        ========================================== */

        .night-event-page {
          min-height: 100vh;

          background: #050505;
          color: white;

          padding: 60px 25px 100px;

          font-family: Arial, Helvetica, sans-serif;
        }


        .night-event-container {
          width: 100%;
          max-width: 1250px;

          margin: 0 auto;
        }


        /* BACK */

        .night-back {
          display: inline-block;

          color: #8bffb0;

          text-decoration: none;

          font-weight: 700;

          margin-bottom: 40px;
        }


        /* HEADER */

        .night-event-header {
          text-align: center;

          max-width: 850px;

          margin: 0 auto 55px;
        }


        .night-event-label {
          display: inline-block;

          color: #8bffb0;

          font-weight: 700;

          margin-bottom: 15px;
        }


        .night-event-header h1 {
          font-size: clamp(46px, 6vw, 78px);

          line-height: 1.05;

          margin-bottom: 20px;
        }


        .night-event-header p {
          color: #aeb7c6;

          font-size: 20px;

          line-height: 1.6;
        }


        /* ==========================================
           TWO COLUMN LAYOUT
        ========================================== */

        .night-event-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 0.85fr)
            minmax(0, 1.15fr);

          gap: 60px;

          align-items: start;
        }


        /* FLYER */

        .night-flyer-column {
          position: sticky;

          top: 100px;
        }


        .night-flyer {
          display: block;

          width: 100%;
          height: auto;

          border-radius: 24px;

          border: 1px solid rgba(255,255,255,0.1);
        }


        /* ARTICLE */

        .night-event-article {
          color: #cbd0d8;

          font-size: 18px;

          line-height: 1.9;
        }


        .night-event-article h2 {
          color: white;

          font-size: 36px;

          line-height: 1.2;

          margin-bottom: 25px;
        }


        .night-event-article p {
          margin-bottom: 25px;
        }


        .night-event-article strong {
          color: white;
        }


        /* QUOTE */

        .night-event-article blockquote {
          margin: 40px 0;

          padding: 25px 28px;

          border-left: 4px solid #8bffb0;

          background: rgba(139,255,176,0.06);

          border-radius: 0 15px 15px 0;

          color: white;

          font-size: 21px;

          line-height: 1.7;
        }


        /* EVENT DETAILS */

        .night-event-details {
          margin-top: 40px;

          padding: 28px;

          border-radius: 20px;

          background: #0d0d0d;

          border: 1px solid rgba(139,255,176,0.18);
        }


        .night-event-details h3 {
          color: #8bffb0;

          font-size: 24px;

          margin-bottom: 20px;
        }


        .night-event-details p {
          margin-bottom: 10px;
        }


        /* BOTTOM */

        .night-bottom {
          text-align: center;

          margin-top: 70px;

          padding-top: 35px;

          border-top: 1px solid rgba(255,255,255,0.1);
        }


        .night-return-btn {
          display: inline-flex;

          justify-content: center;
          align-items: center;

          background: #8bffb0;

          color: black;

          text-decoration: none;

          padding: 15px 28px;

          border-radius: 14px;

          font-weight: 700;

          transition: 0.3s ease;
        }


        .night-return-btn:hover {
          background: #73f39d;

          transform: translateY(-2px);
        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 750px) {

          .night-event-page {
            padding: 35px 18px 70px;
          }


          .night-event-header {
            text-align: left;

            margin-bottom: 30px;
          }


          .night-event-header h1 {
            font-size: 40px;
          }


          .night-event-header p {
            font-size: 17px;
          }


          .night-event-layout {
            display: block;
          }


          .night-flyer-column {
            position: static;

            margin-bottom: 35px;
          }


          .night-flyer {
            border-radius: 16px;
          }


          .night-event-article {
            font-size: 16px;

            line-height: 1.8;
          }


          .night-event-article h2 {
            font-size: 29px;
          }


          .night-event-article blockquote {
            font-size: 18px;

            padding: 20px;
          }


          .night-event-details {
            padding: 20px;
          }


          .night-return-btn {
            width: 100%;
          }

        }

      `}</style>

    </>
  );
}