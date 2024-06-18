// src/App.tsx
import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <div className="bg-dark text-light p-5 flex-grow-1 mb-3">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
