import React from "react";
import { View, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

interface Props {
    items: number;
}

const TestingPartSkeleton = (props: Props) => {

    const renderItems = () => {
        const { items } = props;
        return Array(items).fill(items).map(item => {
            return (
                <View
                    style={{
                        padding: 14,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            width: 60,
                            height: 100,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >

                    </View>
                </View>
            )
        })
    }

    return (
        <View>
            <SkeletonPlaceholder>
                <View style={
                    {
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 16,
                        paddingHorizontal: 16,
                        display: 'flex',
                        justifyContent: 'center',
                        height: (screenHeight * 10) / 100
                    }}>
                    <View style={{ width: (screenWidth * 75) / 100, height: 20, borderRadius: 20, marginRight: 8 }} />
                    <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                </View>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
                <View style={{ height: (screenHeight * 50) / 100 }}>
                    <View style={{ width: (screenWidth * 90) / 100, paddingHorizontal: 16, height: 230, marginTop: 30, marginLeft: (screenWidth * 5) / 100 }}>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        {renderItems()}
                    </View>
                </View>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
                <View style={{ width: (screenWidth * 90) / 100, paddingHorizontal: 16, height: 100, marginTop: 10, marginLeft: (screenWidth * 5) / 100 }}>
                </View>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
                <View style={
                    {
                        width: (screenWidth * 90) / 100,
                        paddingHorizontal: 16,
                        height: 60,
                        marginTop: 20,
                        marginLeft: (screenWidth * 5) / 100,
                        borderRadius: 100
                    }} >
                </View>
            </SkeletonPlaceholder>
        </View>
    );
};

export default TestingPartSkeleton;