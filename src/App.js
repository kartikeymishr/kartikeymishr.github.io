import React from "react";

import {About, Footer, Header, Skills} from "./container";
import {Navbar} from "./components";
import './App.scss'

const App = () => {
    return (
        <div className="app">
            <Navbar/>

            <Header/>
            <About/>
            <Skills/>
            {/*<Work/>*/}
            {/*<Testimonials/>*/}
            <Footer/>
        </div>
    )
}

export default App
