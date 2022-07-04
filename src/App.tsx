import React from 'react';
import Header from "./components/header";
import HomePage from "./pages/home-page";
import {Route, Routes} from "react-router-dom";
import BookPage from "./pages/book-page";

const App = () => {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/:book" element={<BookPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
