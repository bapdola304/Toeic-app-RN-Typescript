import React from "react";
import PartDescriptionComponent from '../component/PartDescriptionComponent';

const PartDescription: React.FC<{
    navigation: any,
    route: any
}> = ({ navigation, route }) => {

    return (
       <PartDescriptionComponent 
            navigation={navigation}
            route={route}
       />
    )
}


export default PartDescription;