
import Head from "next/head";
import AboutIndex from "../components/About/AboutIndex";
import ContactForm from "../components/Contact/ContactForm";
import HomeIndex from "../components/Home/HomeIndex";
import Gallery from "../components/Photo/Gallery";
import Video from "../components/Video/Video";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ResponsiveHeader from "../layouts/ResponsiveHeader";

export default function Home() {
  return (
    <>
     <Head>
        <title>GrooveHub dance studio</title>
        <link rel="icon" href="/mainLogo.png"></link>
    </Head>
    <Header/>
    <ResponsiveHeader/>
    <HomeIndex/>
    <AboutIndex/>
    <ContactForm/>
    <Gallery/>
    {/* <Video/> */}
    <Footer/>
    </>
  )
}
