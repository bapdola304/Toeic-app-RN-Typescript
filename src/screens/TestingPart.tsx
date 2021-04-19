import React, { useEffect, useState } from "react";
import { apiCommon } from "../apiCaller/api";
import TestingPartComponent from '../component/TestingPart';
import Header from '../common/Header';
import { View } from 'react-native';
import PartStorage from '../storage/TesingPartStorage';

const PartDescription: React.FC<{
    navigation: any,
    route: any
}> = ({ navigation, route }) => {

    const [ data, setData ] = useState([]);
    const { params: { partSelected = {}, level = 1 } = {} } = route;
    const { partType, partKey, titleDes } = partSelected || {};

    useEffect(() => {
        handleSetData();
    }, []);

    const handleSetData = async () => {
        const partData = await apiCommon(`${partKey}/${level}`);
        const PartStorageInfo = await PartStorage.getData() || [];
        const { items = [] } = partData;
        const dataFiltered = filterDataExist(items, PartStorageInfo);
        const randomData = dataFiltered.slice(0, 10);    
        setData(randomData);
    }

    const filterDataExist = (arrFilter: any, arrData: any) => {
        const arr2Format = arrData.filter(item => {
            if (item?.partType === partType) {
                return item;
            }
        }).map(item3 => item3?.questionId);     
        return arrFilter.filter(item2 => !arr2Format.includes(item2?.question_id));
    }

    return (
        <View>
            <Header navigation={navigation} headerText={titleDes}/>
            <TestingPartComponent
                navigation={navigation}
                route={route}
                data={data}
                partType={partType}
            />
        </View>

    )
}


export default PartDescription;