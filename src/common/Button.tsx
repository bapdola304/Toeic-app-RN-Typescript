import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants';

//make a Component
const Button = (props: any) => {
    const { label = 'Button', onPress, style } = props;

    return (
        <TouchableOpacity
            style={[
                {
                    height: 50,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                    paddingHorizontal: 20
                },
                style
            ]}
            onPress={onPress && onPress}
        >
            <Text style={{ ...FONTS.h4, color: COLORS.white }}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Button;