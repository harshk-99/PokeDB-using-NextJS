import Head from 'next/head'

const Layout = ({ title, children }) => {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>{title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>

      <main className="container mx-auto max-w-m pt-8 min-h-screen">
        {children}
      </main>
    </div>
  )
}

export default Layout
