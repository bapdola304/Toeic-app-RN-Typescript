import React from "react";
import HomeComponent from '../component/HomeComponent';

const Home: React.FC<{
    navigation: any
}> = ({ navigation }) => {

    return (
       <HomeComponent navigation={navigation}/>
    )
}


export default Home;