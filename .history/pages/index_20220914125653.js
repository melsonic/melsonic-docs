import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Template from '../components/Template'
import RecentDocuments from '../components/RecentDocuments'
import { useSession, getSession } from 'next-auth/react'
import Login from '../components/Login'

export default function Home() {

  const { data, status } = useSession();
  console.log("data : " + data)
  console.log("status : " + status);

  if(status == 'authenticates'){
    return(
      <>  
        <Login />
      </>
    )
  }

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
