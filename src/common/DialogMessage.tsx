import React, { useEffect, useState } from "react";
import { Alert, Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Button from './Button';

interface DialogProps {
    visible: boolean;
    width?: number;
    btnText?: string;
    title?: string;
    message?: string;
    onPress?: () => void;
}

const DialogMessage = (props: DialogProps) => {
    const { visible, width = 300, btnText = 'Ok', title = 'Title', message = 'Message', onPress } = props;
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setModalVisible(visible);
    }, [visible]);

    const handleOnPress = () => {
        onPress && onPress();
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
                onDismiss={() => setModalVisible(false)}
                style={{ position: 'relative' }}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { width }]}>
                        <View style={styles.dialogContent}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.message}>{message}</Text>
                        </View>
                        <View>
                            <Button label={btnText} onPress={handleOnPress} />
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.mask}
                >
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        zIndex: 99
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    dialogContent: {
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    message: {
        fontSize: 18,
        marginTop: 5,
        textAlign: 'center'
    },
    mask: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        opacity: 0.7,
        zIndex: 9
    }
});

export default DialogMessage;