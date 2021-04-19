import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native';
import AudioPlayer from '../common/AudioPlayer';
import Button from '../common/Button';
import DialogMessage from '../common/DialogMessage';
import TestingPartHeader from '../common/TestingPartHeader';
import PartOneComponent from './PartOneComponent';
import route from '../constants/route';
import TestingPartSkeleton from '../skeleton/TestingPart';
import PartStorage from '../storage/TesingPartStorage';
import { testingStyles } from './style';

interface Props {
    navigation: any,
    route: any,
    data: any;
    partType: string;
}

interface Question {
    audio: string;
    images: string;
    answers: any[];
    question_id: number;
    level: number;
}

function TestingPart(props: Props) {
    const { navigation, data = [], partType } = props

    const [isShowDes, setIsShowDes] = useState(false);
    const [progressQuestion, setProgressQuestion] = useState(0);
    let [countQuestion, setCountQuestion] = useState(1);
    const [question, setQuestion] = useState({} as Question);
    const [totalQuestion, setTotalQuestion] = useState(0);
    const [progressTimer, setProgressTimer] = useState(0);
    const [isStop, setIsStop] = useState(false);
    const [isPlay, setIsPlay] = useState(false);
    const [isNext, setIsNext] = useState(false);
    const [isOpenDialog, setIsOpenDialog] = useState(true);
    const [title, setTitle] = useState('Thông báo');
    const [messsage, setMesssage] = useState('Bạn đã sẵn sàng?');
    let [scrore, setScrore] = useState(0);
    const [answerSelected, setAnswerSelected] = useState(0);
    const [btnText, setBtnText] = useState('OK');
    const [isCountDown, setIsCountDown] = useState(false);

    useEffect(() => {
        if (data.length) {
            handleGetData(data);
        }
    }, [data]);

    const handleGetData = (data: any) => {
        const totalQuestion = data.length;
        const question = data[countQuestion - 1];
        let newProgressQuestion = progressQuestion + (100 / totalQuestion);
        setQuestion(question);
        setProgressQuestion(newProgressQuestion);
        setTotalQuestion(totalQuestion);
    }

    const handleCheckAnswer = () => {
        let { answers = [] } = {} = question;
        const indexCorrect = answers.findIndex(ans => ans.correct === '1');
        const isCorrect = indexCorrect === answerSelected;
        const newScore = isCorrect ? scrore += 1 : scrore;
        setIsShowDes(true);
        setIsStop(true);
        setScrore(newScore);
        setIsCountDown(false);
        handleSaveQuestionId();
    }

    const handleNextQuestion = () => {
        const countQuestionTemp = countQuestion += 1;
        const question = data[countQuestionTemp - 1];
        let newProgressQuestion = progressQuestion + (100 / totalQuestion);
        setIsShowDes(false);
        setQuestion(question);
        setProgressQuestion(newProgressQuestion);
        setCountQuestion(countQuestionTemp);
        setIsCountDown(true);
        setIsStop(false);
    }

    const handleSaveQuestionId = async () => {
        const { question_id, level } = question;
        const PartStorageInfo = await PartStorage.getData() || [];       
        const data = {
            level,
            questionId: question_id,
            partType
        }
        const newPartStorage = [...PartStorageInfo, data];       
        await PartStorage.setData(newPartStorage);
    }

    const handleActionDialog = () => {
        if (progressQuestion >= 100) {
            navigation.navigate(route.PART_DES);
            return;
        }
        setIsOpenDialog(false);
        setIsPlay(true);
        setIsCountDown(true);
    }

    const handleFinish = () => {
        setMesssage(`Bạn đã làm đúng ${scrore}/${totalQuestion} câu.`);
        setIsOpenDialog(true);
    }

    const onSelectedAnswer = (index: number) => {
        setAnswerSelected(index);
    }

    const { audio } = question;

    return (
        data.length ? (
            <View style={testingStyles.container}>
                <View style={testingStyles.header}>
                    <TestingPartHeader
                        progressQuestion={progressQuestion}
                        countQuestion={countQuestion}
                        totalQuestion={totalQuestion}
                        isCountDown={isCountDown}
                        handleCompleted={handleCheckAnswer}
                    />
                </View>
                <View style={testingStyles.content}>
                    <PartOneComponent question={question} isShowDes={isShowDes} isNext={isNext} onSelectedAnswer={onSelectedAnswer} />
                </View>
                <View style={testingStyles.audioPlayer}>
                    <AudioPlayer
                        source={{ uri: audio }}
                        navigation={navigation}
                        isPlay={isPlay}
                        isStop={isStop}
                    />
                </View>
                <View style={testingStyles.bottomButton}>
                    {
                        isShowDes ? (
                            progressQuestion >= 100 ? (
                                <Button label='Hoàn thành' onPress={handleFinish} />
                            )
                                : (
                                    <Button label='Next' onPress={handleNextQuestion} />
                                )
                        )
                            : (
                                <Button label='Kiểm tra' onPress={handleCheckAnswer} />
                            )
                    }
                </View>
                <DialogMessage
                    visible={isOpenDialog}
                    onPress={handleActionDialog}
                    title={title}
                    message={messsage}
                    btnText={btnText}
                />
            </View>
        ) : (
            <TestingPartSkeleton items={4} />
        )
    )
}

export default TestingPart;
