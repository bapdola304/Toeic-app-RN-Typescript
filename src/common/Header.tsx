import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, icons } from '../constants';

//make a Component
const Header = (props: any) => {
    const { headerStyle, bgHeader } = styles;
    const { headerText = 'Header title', navigation = {} } = props;

    return (
        <View style={bgHeader}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity
                        style={styles.backIconWrapper}
                        onPress={() => { navigation.goBack() }}
                    >
                        <Image
                            source={icons.back}
                            resizeMode="contain"
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={headerStyle}>{headerText}</Text>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    bgHeader: {
        backgroundColor: COLORS.primary,
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 8,
    },
    headerStyle: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: COLORS.white,
        marginLeft: '25%'
    },
    backIconWrapper: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    backIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.black
    }
});