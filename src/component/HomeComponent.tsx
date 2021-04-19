import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { icons, SIZES, COLORS, FONTS } from '../constants'
import { PartItem } from '../interface/home';
import { categoryData, restaurantData } from "../mock_data";
import { homeStyles } from "./style";

const HomeComponent: React.FC<{
    navigation: any;
}> = ({ navigation }) => {
    
    const [categories, setCategories] = React.useState(categoryData as PartItem[])
    const [selectedCategory, setSelectedCategory] = React.useState({ id: 2 } as PartItem);
    const [restaurants, setRestaurants] = React.useState(restaurantData)

    function onSelectCategory(category: PartItem) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id: number) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={homeStyles.header}>
                <TouchableOpacity
                    style={homeStyles.headerLeft}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={homeStyles.headerCenter}>
                    <View
                        style={homeStyles.headerTitle}
                    >
                        <Text style={{ ...FONTS.h3 }}>Toeic App</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={homeStyles.headerRight}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderButtonPlay() {
        return (
            <TouchableOpacity
                style={homeStyles.playButton}
                onPress={() => navigation.navigate("PartDescription", { partSelected: selectedCategory })}
            >
                <View
                    style={homeStyles.buttonView}
                >
                    <Image
                        source={icons.playButton}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    function renderMainCategories() {
        const renderItem: React.FC<{
            item: PartItem;
        }> = ({ item }) => {
            return (
                <TouchableOpacity
                    style={[homeStyles.menuItem, (selectedCategory?.id == item.id) && { backgroundColor: COLORS.primary }]}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={[homeStyles.menuView, (selectedCategory?.id == item.id) && { backgroundColor: COLORS.white }]}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={homeStyles.menuListWrapper}>
                <View style={homeStyles.menuListView}>
                    <View>
                        <Text style={{ ...FONTS.h1 }}>Thực hành</Text>
                        <Text style={{ ...FONTS.h1 }}>phần nghe</Text>
                    </View>
                    <View>
                        {renderButtonPlay()}
                    </View>
                </View>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem: React.FC<{
            item: any;
        }> = ({ item }) => (
            <TouchableOpacity
                style={homeStyles.newsWrapper}
            >
                {/* Image */}
                <View
                    style={homeStyles.newsView}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={homeStyles.newsImage}
                    />

                    <View
                        style={homeStyles.newsItem}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId: number) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={homeStyles.container}>
            {renderHeader()}
            <View style={{ marginLeft: 8 }}>
                {renderMainCategories()}
            </View>
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

export default HomeComponent;