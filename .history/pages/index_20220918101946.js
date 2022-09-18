import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { useState } from "react";
import Template from '../components/Template'
import RecentDocuments from '../components/RecentDocuments'
import { useSession, getSession } from 'next-auth/react'
import Login from '../components/Login'
import { Dialog, DiglogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react'

export default function Home() {

  /* const { data : session } = useSession();

  if(!session){
    return(
      <>  
        <Login />
      </>
    )
  } */

  const modal = (
    <Dialog>
      <DialogBody>
        <input
          placeholder="Enter the name of the document"
          className=""
        />
      </DialogBody>
      <DialogFooter>

      </DialogFooter>
    </Dialog>
  )


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