import Sobre from "../componentes/comsobre";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../css/home.css"

function Home() {
  return (
    <div className="home">
      <Header />
      <Sobre />
      <Footer />
    </div>
  );
}


export default Home;