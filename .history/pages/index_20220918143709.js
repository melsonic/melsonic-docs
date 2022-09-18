import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { useState } from "react";
import RecentDocuments from '../components/RecentDocuments'
import { useSession, getSession } from 'next-auth/react'
import Login from '../components/Login'
import { Dialog, DiglogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import blankdoc from "../Assets/docs-blank.png";
import { IconButton } from "@material-tailwind/react"

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
    <Dialog open={showModal} handler={handleOpen}
      className="flex flex-col items-center w-48"
      size="xs"
    >
      <DialogBody>
        <input
          placeholder="Enter the name of the document"
          className="outline-none"
        />
      </DialogBody>
      <DialogFooter className="flex flex-row justify-between" >
        <Button
          variant="text"
          color="blue"
          onClick={handleOpen}
        >Cancel</Button>
        <Button
          variant="text"
          color="blue"
          onClick={handleOpen}
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
              <div className="w-36 h-44 border-2 border-gray-300 bg-white hover:border-blue-500 cursor-pointer" onClick={handleOpen} >
                <Image src={blankdoc} alt="blank docs template" layout="responsive" objectFit="cover" />
              </div>
              <h3 className="my-2 font-medium">blank</h3>
            </div>
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
