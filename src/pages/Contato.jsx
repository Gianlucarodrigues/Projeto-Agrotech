import Contato from "../componentes/Comcontato";
import Header from "../componentes/header";
import Footer from "../componentes/footer";
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
