import React, { useState, useEffect } from 'react'
import { View, Image, TouchableOpacity, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { translateApi } from '../apiCaller/api';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { answersOption } from '../mock_data';
import { partOneStyles } from './style';

interface Props {
    question: any;
    isShowDes: boolean;
    isNext: boolean;
    onSelectedAnswer: (index: number) => void;
}

function PartOneComponent(props: Props) {
    const { question, isShowDes, onSelectedAnswer } = props
    const { images } = question;
    const [answerSelected, setAnswerSelected] = useState(0);
    const [translate, setTranslate] = useState({
        0: null,
        1: null,
        2: null,
        3: null
    } as any);
    const [translateIndex, setTranslateIndex] = useState(-1);

    useEffect(() => {
        setTranslate({});
    }, [isShowDes])

    function onSelectAnswer(index: number) {
        setAnswerSelected(index);
        onSelectedAnswer && onSelectedAnswer(index);
    }

    const handleTranslate = async (text: string, quetionIndex: number) => {
        setTranslateIndex(quetionIndex);
        const { result } = await translateApi(`translate/single/${text}`);
        const newTranslate = {
            ...translate,
            [quetionIndex]: result
        }
        setTranslate(newTranslate);
        setTranslateIndex(-1);
    }

    const renderAnswerDes = () => {
        const { answers = [] } = question;
        return answers.length ? answers.map((ans: any, index: number) => {
            const { content = '', answer_id = '', correct } = ans;
            const isAnswerCorrect = correct === '1';
            const isAnswerSelectedInCorrect = !isAnswerCorrect && answerSelected === index;
            return (
                <View key={answer_id}>
                    <View style={partOneStyles.wrapDesText}>
                        <Text style={[partOneStyles.keyQuestion, isAnswerSelectedInCorrect && partOneStyles.inCorrectQuestion, isAnswerCorrect && partOneStyles.correctQuestion]}>{`Câu ${answersOption[index]}: `}</Text>
                        <Text style={[partOneStyles.valueQuestion, isAnswerSelectedInCorrect && partOneStyles.inCorrectQuestion, isAnswerCorrect && partOneStyles.correctQuestion]}>{content}</Text>
                        {!translate[index] && translateIndex === index ? (
                            <Image source={icons.spinner} style={partOneStyles.transIcon} />
                        ) : (
                            !translate[index] && (
                                <TouchableOpacity onPress={() => handleTranslate(content, index)}>
                                    <Image source={icons.translate} style={partOneStyles.transIcon} />
                                </TouchableOpacity>
                            )
                        )}
                    </View>
                    {
                        translate[index] && <View style={partOneStyles.wrapTranslateText}>
                            <Text style={partOneStyles.keyTranslate}>{`Dịch ${answersOption[index]}: `}</Text>
                            <Text style={partOneStyles.valueTranslate}>{translate[index]}</Text>
                        </View>
                    }
                </View>
            )
        }) : null;
    }

    function rendernAnswersOption() {
        const renderItem: React.FC<{
            item: any;
            index: number
        }> = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={[partOneStyles.answerItem, { backgroundColor: answerSelected === index ? COLORS.primary : COLORS.white, }]}
                    onPress={() => onSelectAnswer(index)}
                >
                    <View
                        style={[partOneStyles.ansView, {  backgroundColor: answerSelected === index ? COLORS.white : COLORS.lightGray }]}
                    >
                        <Text
                            style={[partOneStyles.ansText, { color: answerSelected === index ? COLORS.primary : COLORS.black, }]}
                        >
                            {item}
                        </Text>
                    </View>

                </TouchableOpacity>
            )
        }


        return (
            <View style={{ padding: SIZES.padding }}>
                <View style={partOneStyles.flWrapper}>
                    <FlatList
                        data={answersOption}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item}`}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingVertical: SIZES.padding / 6 }}
                    />
                </View>
            </View>
        )
    }

    return (
        <>
            <View style={partOneStyles.container}>
                <Image
                    source={{ uri: images }}
                    style={partOneStyles.questionImage} />
            </View>
            <View style={partOneStyles.content}>
                {
                    isShowDes ? (
                        <View style={{
                            paddingHorizontal: 10,
                            flex: 1
                        }}>
                            <ScrollView>
                                {renderAnswerDes()}
                            </ScrollView>
                        </View>
                    )
                        : (
                            rendernAnswersOption()
                        )
                }
            </View>
        </>
    )
}


export default PartOneComponent
