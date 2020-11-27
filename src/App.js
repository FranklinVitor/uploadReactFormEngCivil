
import React, { useEffect } from "react";
import Form from "./components/user-form/Form";
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"


export const App = () => {


  return (
    <main className="main-container">

      <Header />
      <Form />
      <Footer />
    </main>
  );
}


export default App

