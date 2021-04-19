import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { COLORS } from '../constants';

const barWidth = Dimensions.get('screen').width - 120;
const timeOfQuestionDefault = 60;

interface Props {
    isCountDown: boolean;
    countQuestion: number;
    totalQuestion: number;
    progressQuestion: number;
    handleCompleted: () => void;
}
interface State {
    timeOfQuestion: number;
    timeOfQuestionState: number;
    processTimer: number;
}

class TestingPartHeader extends Component<Props, State> {

    private timer: any;

    constructor(props: Props) {
        super(props)

        this.state = {
            timeOfQuestion: 0,
            processTimer: 0,
            timeOfQuestionState: timeOfQuestionDefault
        }
        this.timer = null;
    }

    componentWillReceiveProps(nextProps: Props) {
        const { isCountDown } = nextProps;
        if (isCountDown) {
            clearInterval(this.timer);
            this.setState({ timeOfQuestionState: timeOfQuestionDefault, processTimer: 0 }, () => this.countDown());
        }
        if (!isCountDown) {
            clearInterval(this.timer);
        }
    }

    countDown = () => {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            let { timeOfQuestionState } = this.state;
            const { handleCompleted } = this.props;
            let newProcess = (100 - ((timeOfQuestionState / timeOfQuestionDefault) * 100));
            let newTimeOfQuestionState = timeOfQuestionState -= 1;
            this.setState({ timeOfQuestionState: newTimeOfQuestionState, processTimer: newProcess });
            if (newTimeOfQuestionState < 0) {
                clearInterval(this.timer);
                handleCompleted && handleCompleted();
                return;
            }
        }, 1000);
    }

    render() {
        const { countQuestion = 0, totalQuestion = 0, progressQuestion = 0 } = this.props;
        const { processTimer, timeOfQuestionState } = this.state;
        return (
            <View style={styles.header}>
                <View style={styles.wrapProcessbar}>
                    <ProgressBarAnimated
                        width={barWidth}
                        value={progressQuestion > 100 ? 100 : progressQuestion}
                        backgroundColorOnComplete={COLORS.primary}
                        backgroundColor={COLORS.primary}
                        height={20}
                        borderRadius={10}
                        borderColor={COLORS.primary}
                    />
                    <Text style={styles.numberOfQuestion}>{`câu ${countQuestion}/${totalQuestion}`}</Text>
                </View>
                <View style={styles.wrapTime}>
                    <AnimatedCircularProgress
                        size={70}
                        width={5}
                        fill={processTimer}
                        tintColor={COLORS.primary}
                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#3d5875"
                    >
                        {
                            (fill) => (
                                <View style={styles.wrapTimer}>
                                    <Text style={styles.textTimer}>{'Thời gian'}</Text>
                                    <Text style={styles.valueTimer}>{timeOfQuestionState < 0 ? 0 : timeOfQuestionState}</Text>
                                </View>
                            )
                        }
                    </AnimatedCircularProgress>
                </View>
            </View>
        )
    }
}

export default TestingPartHeader

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    wrapTimer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#65C8D0'
    },
    wrapTime: {
        width: '20%'
    },
    textTimer: {
        fontSize: 12,
    },
    valueTimer: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#65C8D0'
    },
    wrapProcessbar: {
        paddingHorizontal: 10,
        width: '80%'
    },
    numberOfQuestion: {
        position: 'absolute',
        top: 0,
        left: 20,
        color: '#000000',
        fontWeight: 'bold'
    },
})