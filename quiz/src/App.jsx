import React from "react";
import "./App.css";
import HomeComponent from "./Components/HomeComponent ";
import QuizComponent from "./Components/QuizComponent";
import ResultComponent from "./Components/ResultComponent";

export default function App() {
  return (
    <>
      <HomeComponent />
      <QuizComponent />
      <ResultComponent/>  
    </>
  );
}