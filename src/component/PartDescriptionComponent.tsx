import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList
} from 'react-native';

import { icons, COLORS, SIZES, FONTS } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { partData, levelPartTesting } from '../mock_data';
import { LevelTesting } from '../interface/testingPart';
import { desStyles } from './style';

const PlantDetail: React.FC<{
    navigation: any,
    route: any,
}> = ({ navigation, route }) => {

    const [ part, setPart ] = useState({} as any);
    const [ levelSelected, setLevelSelected ] = useState(levelPartTesting[0] as LevelTesting);

    const { title, image, des, titleDes } = part;

    useEffect(() => {
        const { params: { partSelected = {} } = {} } = route;
        const { type } = partSelected || {};
        const dataSelected = getPartDataByType(type);
        setPart(dataSelected);
    },[]);

    function getPartDataByType(type: string) {
        return partData.find(item => item.partType === type);
    }

    const onSelectLevel = (item: LevelTesting) => {
        setLevelSelected(item);
    }

    function renderHeader() {
        return (
            <View
                style={desStyles.header}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={desStyles.backIcon}
                            onPress={() => { navigation.navigate("Home") }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="contain"
                                style={desStyles.iconSize}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={desStyles.titleView}>
                    <View style={{ flex: 1 }}>
                        <Text style={desStyles.text}>{title}</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderLevelTesting() {
        const renderItem: React.FC<{
            item: LevelTesting;
        }> = ({ item }) => {
            return (
                <TouchableOpacity
                    style={[desStyles.levelView, levelSelected.id === item.id && { backgroundColor: COLORS.primary }]}
                    onPress={() => onSelectLevel(item)}
                >
                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: levelSelected.id === item.id  ? COLORS.white : COLORS.black,
                            ...FONTS.body3
                        }}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View>
                <FlatList
                    data={levelPartTesting}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderFooter() {
        return (
            <View style={desStyles.footerWrapper}>
                <TouchableOpacity
                    style={desStyles.footerView}
                    onPress={() => { navigation.navigate('TestingPart', { partSelected: part, level: levelSelected.level })}}
                >
                    <Text style={desStyles.enterTest}>Vào test</Text>
                    <Image
                        source={icons.chevron}
                        resizeMode="contain"
                        style={{
                            marginLeft: SIZES.padding,
                            width: 20,
                            height: 20
                        }}
                    />
                </TouchableOpacity>
                <View style={desStyles.levelListStyle}>
                    {renderLevelTesting()}
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* Banner Photo */}
            <View style={desStyles.banner}>
                <Image
                    source={image}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>

            {/* Requirements */}
            <View
                style={desStyles.bannerTitleView}
            >
                <Text style={desStyles.bannerText}>{titleDes}</Text>

                <View>
                    <Text style={desStyles.des}>
                        {des}
                    </Text>
                </View>
                {renderFooter()}
            </View>

            {renderHeader()}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PlantDetail;