import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
