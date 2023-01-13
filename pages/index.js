import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Quark 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Our website is being rebuildt<code>until then check our QuarkToken.io</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
