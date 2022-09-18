import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { useState } from "react";
import Template from '../components/Template'
import RecentDocuments from '../components/RecentDocuments'
import { useSession, getSession } from 'next-auth/react'
import Login from '../components/Login'
import { Dialog, DiglogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';
import { IconButton } from "@material-tailwind/react"
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";


export default function Home() {

  const [showModal, setShowModal] = useState(false);
  var handleOpen = () => setShowModal(!showModal);

  /* const { data : session } = useSession();

  if(!session){
    return(
      <>  
        <Login />
      </>
    )
  } */

  const modal = (
    <Dialog open={showModal} handler={handleOpen}>
      {console.log("modal opened")}
      <DialogBody>
        <input
          placeholder="Enter the name of the document"
          className=""
        />
      </DialogBody>
      <DialogFooter className="flex flex-row justify-between" >
        <Button
          variant="text"
          color="blue"
        >Cancel</Button>
        <Button
          variant="text"
          color="blue"
        >Create</Button>
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

      {/* modal */}
      {modal}

      {/* template */}
      <section >
        <div className="bg-gray-100">
          <div className="max-w-3xl mx-auto p-8">
            <div className="flex flex-row justify-between">
              <p>Start a new Document</p>
              <IconButton
                variant="text"
                color="gray"
                className="rounded-full"
              >
                <EllipsisVerticalIcon className="h-6" />
              </IconButton>
            </div>
            <div className="my-8">
              <Template onClick={handleOpen} />
            </div>
            <h3 className="my-2 font-medium">blank</h3>
          </div>
        </div>
      </section>

      {/* documents */}
      <section>
        <RecentDocuments />
      </section>

    </div>
  )
}
