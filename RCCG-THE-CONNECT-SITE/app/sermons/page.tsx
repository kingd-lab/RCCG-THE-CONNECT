export default function SermonsPage() {
  return (
    <main className="sermons-page">
      <section className="sermons-coming-soon">
        <div className="coming-soon-icon">🎧</div>

        <span className="eyebrow">SERMONS</span>

        <h1>Coming Soon</h1>

        <p>
          Our sermon library is currently being prepared.
          Soon you will be able to listen to, watch and
          download messages from The Connect Church.
        </p>

        <div className="coming-soon-actions">
          <a href="/" className="coming-soon-btn">
            Back Home
          </a>

          <a href="/blog" className="coming-soon-btn secondary">
            Visit Church Blog
          </a>
        </div>
      </section>
    </main>
  );
}
