import React from 'react';
import Card from "../components/Card";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Home = () => {
    return(
        <>
            <Header />
            <Nav />
            <div className='container'>
                <div className='row'>
                <Card />
                <Card />
                <Card />
                </div>
            </div>
        </>
    );
};

export default Home;
