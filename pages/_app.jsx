import { ThemeProvider } from "next-themes";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Internals
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MainContainer from "@/components/MainContainer";
import PageContainer from "@/components/PageContainer";
import Modal from "@/components/Modal";
import GotoTop from "@/components/GotoTop";
import "@/styles/index.scss";

export default function Application({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(30);
    })

    router.events.on("routeChangeError", () => {
      setProgress(100);
    })

    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    })
  }, []);

  return (
    <ThemeProvider themes={["light", "dark"]} defaultTheme="dark" enableSystem={false} attribute="class">
      <GotoTop/>
      <Modal/>
      <LoadingBar 
        color="blueviolet"
        waitingTime={500}
        height={5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <PageContainer>
        <Navbar/>

        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>

        <Footer/>
      </PageContainer>
    </ThemeProvider>
  )
}