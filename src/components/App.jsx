import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Info from "./Info";

function App() {
  return (
    <div>
      <Header />
      <Info
        title="Java Script and React.js"
        dis="A Basic Web React Js frontend Bootcamp"
      />
      <Info
        title="Dart Language and flutter"
        dis="A Basic Mobile Development Bootcamp"
      />
      <Info
        title="Java Language and SpringBoot"
        dis="A Basic Web SpringBoot backend Bootcamp"
      />
      <Info
        title="Kotlin Language and Android"
        dis="A Basic Mobile Development Bootcamp"
      />
      <Info
        title="HTML,CSS,JS,PHP WEB Development"
        dis="A Basic Web Development Bootcamp"
      />
      <Info
        title="Mysql,MongoDB,firebase Development"
        dis="A Basic Database design Bootcamp"
      />
      <Footer />
    </div>
  );
}

export default App;
