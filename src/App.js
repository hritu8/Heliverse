import "./App.css";
import Apply from "./Component/Apply";
import Browser from "./Component/Browser";
import Cursor from "./Component/Cursor";
import Feature from "./Component/Feature";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Purchase from "./Component/Purchase";
import Stick from "./Component/Stick";
import Transform from "./Component/Transform";
import TrustedUsersSection from "./Component/TrustedUsersSection";

function App() {
  return (
    <div className="bg-[#0E0F1A]  min-h-screen">
      <Header />
      <Purchase />
      <Transform />
      <TrustedUsersSection />
      <Stick />
      <Apply />
      <Browser />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
