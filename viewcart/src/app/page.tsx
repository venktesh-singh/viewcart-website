import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import TopBar from "./components/common/TopBar/TopBar";
import Index from "./pages/Index";

export default function Home() {
  return <>
        <TopBar></TopBar>
        <Header></Header>
        <Index></Index>
        <Footer></Footer>
  </>
}
