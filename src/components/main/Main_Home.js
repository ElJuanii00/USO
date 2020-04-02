import React from 'react';
import Header from './Header'
import Hero from './Hero'
import FeatureFood from './Feature_Foods'
import StepsOrder from './Steps_Order'
import FeatureResturants from './Feature_Restaurants'
import Footer from './Footer'

function Main_Home(){
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <FeatureFood/>
            <StepsOrder/>
            <FeatureResturants/>
            <Footer/>
        </div>
    )
}


export default Main_Home