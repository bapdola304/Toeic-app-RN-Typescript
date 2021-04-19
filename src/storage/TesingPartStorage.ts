import { AsyncStorage } from 'react-native';

async function setData(data: any) {
    await AsyncStorage.setItem(
        'TESTING',
        JSON.stringify(data)
    );
}

async function getData() {
    const data: any = await AsyncStorage.getItem(
        'TESTING',
    );
    return JSON.parse(data);
}

export default {
    setData,
    getData
}