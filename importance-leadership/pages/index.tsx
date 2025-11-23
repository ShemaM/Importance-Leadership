import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Importance of Leadership</title>
        <meta name="description" content="Inspiring leaders and transforming communities" />
      </Head>

      <main className="min-h-screen px-8 py-16">
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            The Importance of Leadership
          </h1>

          <p className="text-lg text-gray-600">
            Leadership is the cornerstone of progress, unity, and sustainable
            development. Through strong leadership, communities thrive and
            individuals discover their true potential.
          </p>

          <p className="text-gray-500">
            This platform focuses on empowering leaders, strengthening
            refugee-led initiatives, and promoting impactful leadership that
            drives meaningful change.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <button className="px-6 py-3 bg-black text-white rounded-lg">
              Discover More
            </button>
            <button className="px-6 py-3 border rounded-lg">
              View Programs
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
