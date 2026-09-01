export default function SermonsPage() {
  const sermons = [
    {
      id: 1,
      title: "Walking By Faith",
      speaker: "Pastor David Omosehin",
      date: "June 1, 2026",
      audio: "/sermons/walking-by-faith.mp3",
      youtube: "https://youtube.com",
    },
    {
      id: 2,
      title: "The Power Of Prayer",
      speaker: "Pastor David Omosehin",
      date: "May 25, 2026",
      audio: "/sermons/power-of-prayer.mp3",
      youtube: "https://youtube.com",
    },
    {
      id: 3,
      title: "Living In God's Purpose",
      speaker: "Pastor David Omosehin",
      date: "May 18, 2026",
      audio: "/sermons/gods-purpose.mp3",
      youtube: "https://youtube.com",
    },
  ];

  return (
    <main className="sermons-page">

      <section className="sermons-hero">
        <h1>Sermons & Messages</h1>

        <p>
          Listen, download and watch life-changing messages
          from RCCG The Connect Church.
        </p>
      </section>

      <section className="sermons-section">

        <h2 className="section-title">
          Latest Sermons
        </h2>

        <div className="sermons-grid">

          {sermons.map((sermon) => (
            <div key={sermon.id} className="sermon-card">

              <div className="sermon-header">

                <span className="sermon-tag">
                  Latest Message
                </span>

                <h3>{sermon.title}</h3>

                <p>
                  {sermon.speaker}
                </p>

                <small>
                  {sermon.date}
                </small>

              </div>

              <audio controls className="sermon-audio">
                <source
                  src={sermon.audio}
                  type="audio/mpeg"
                />
              </audio>

              <div className="sermon-actions">

                <a
                  href={sermon.audio}
                  download
                  className="download-btn"
                >
                  Download MP3
                </a>

                <a
                  href={sermon.youtube}
                  target="_blank"
                  className="youtube-btn"
                >
                  Watch Online
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>

      <section className="podcast-section">

        <h2 className="section-title">
          Church Podcast
        </h2>

        <div className="podcast-card">

          <h3>Weekly Faith Podcast</h3>

          <p>
            Encouragement, teachings, testimonies and
            practical Christian living.
          </p>

          <audio controls className="podcast-audio">
            <source
              src="/podcasts/weekly-faith-podcast.mp3"
              type="audio/mpeg"
            />
          </audio>

          <a
            href="/podcasts/weekly-faith-podcast.mp3"
            download
            className="download-btn"
          >
            Download Podcast
          </a>

        </div>

      </section>

    </main>
  );
}
