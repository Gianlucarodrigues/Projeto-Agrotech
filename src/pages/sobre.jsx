import Sobre from "../componentes/comsobre";
import Header from "../componentes/header";
import Footer from "../componentes/footer";
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
