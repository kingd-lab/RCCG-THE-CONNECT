import Link from "next/link";

export default function EventsPage() {
  return (
    <main>

      {/* ================= EVENTS HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            Upcoming Events
          </div>

          <h1>
            Stay Connected <br />
            With What's <span>Happening</span>
          </h1>

          <p>
            Join us for worship nights, conferences and church programs
            throughout the year.
          </p>

        </div>

      </section>

      {/* ================= EVENTS LIST ================= */}

      <section className="section">

        <div className="container">

          <div className="event-grid">

            <div className="event-card">

              <div className="event-image-wrap">
                <img
                  src="/event2.jpg"
                  alt=""
                  className="event-image"
                />
              </div>

              <div className="event-content">

                <span className="event-date">
                  Friday • 9:00 PM
                </span>

                <h3>
                  Night of Worship
                </h3>

                <p>
                  A night of worship, revival and supernatural encounters.
                </p>

                <Link href="/events/night-of-worship" className="btn-primary event-btn">
                  Learn More
                </Link>

              </div>

            </div>

            {/* Add more event-card blocks here as you create more event pages */}

          </div>

        </div>

      </section>

    </main>
  );
}
