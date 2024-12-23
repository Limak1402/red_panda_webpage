import React from "react";
import Header from "./Components/Header";
import Information from "./Components/Information";
import Introduction from "./Components/Introduction";
import Facts from "./Components/Facts";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <Information />
        <Gallery />
        <Facts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
