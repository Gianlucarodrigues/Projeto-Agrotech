import Contato from "../componentes/Comcontato";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../css/home.css"

function Home() {
  return (
    <div className="home">
      <Header />
      <Contato />
      <Footer />
    </div>
  );
}


export default Home;
