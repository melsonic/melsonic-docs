import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Template from '../components/Template'
import RecentDocuments from '../components/RecentDocuments'
import { useSession } from 'next-auth/client'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs</title>
      </Head>

      {/* header */}
      <Header />

      {/* template */}
      <section >
        <div className="bg-gray-100">
          <Template />
        </div>
      </section>

      {/* documents */}
      <section>
        <RecentDocuments />
      </section>

    </div>
  )
}
