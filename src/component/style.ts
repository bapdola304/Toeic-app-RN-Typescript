import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
};

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    header: {
        flexDirection: 'row',
        height: 50
    },
    headerLeft: {
        width: 50,
        paddingLeft: SIZES.padding * 2,
        justifyContent: 'center'
    },
    headerCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        width: '70%',
        height: "100%",
        backgroundColor: COLORS.lightGray3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius
    },
    headerRight: {
        width: 50,
        paddingRight: SIZES.padding * 2,
        justifyContent: 'center'
    },
    playButton: {
        padding: SIZES.padding,
        backgroundColor: COLORS.primary,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        ...shadow
    },
    buttonView: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white
    },
    menuItem: {
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: "center",
        marginRight: SIZES.padding,
        ...shadow
    },
    menuView: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.lightGray
    },
    menuListWrapper: {
        padding: SIZES.padding * 2
    },
    menuListView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    newsWrapper: {
        marginBottom: SIZES.padding * 2
    },
    newsView: {
        marginBottom: SIZES.padding
    },
    newsImage: {
        width: "100%",
        height: 200,
        borderRadius: SIZES.radius
    },
    newsItem: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: SIZES.width * 0.3,
        backgroundColor: COLORS.white,
        borderTopRightRadius: SIZES.radius,
        borderBottomLeftRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        ...shadow
    }
});


const desStyles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 30,
        left: SIZES.padding,
        right: SIZES.padding
    },
    backIcon: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.5)'
    },
    iconSize: {
        width: 20,
        height: 20,
        tintColor: COLORS.black
    },
    titleView: {
        flexDirection: 'row',
        marginTop: "15%",
        width: '70%'
    },
    text: {
        color: COLORS.white,
        ...FONTS.largeTitle,
        fontWeight: 'bold'
    },
    levelView: {
        marginTop: 10,
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: "center",
        marginRight: SIZES.padding,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    footerWrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: SIZES.padding
    },
    footerView: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: COLORS.primary
    },
    enterTest: {
        color: COLORS.white,
        ...FONTS.h2
    },
    levelListStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: SIZES.padding
    },
    banner: {
        height: "35%"
    },
    bannerTitleView: {
        flex: 1,
        marginTop: -40,
        backgroundColor: COLORS.lightGray,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingVertical: SIZES.padding
    },
    bannerText: {
        paddingHorizontal: SIZES.padding,
        color: COLORS.primary,
        ...FONTS.h1,
        marginVertical: 10
    },
    des: {
        fontSize: 18,
        paddingHorizontal: 16,
        lineHeight: 25
    }
})

const partOneStyles = StyleSheet.create({
    textAnswer: {
        fontSize: 18
    },
    wrapDesText: {
        flexDirection: 'row',
        marginTop: 10,
    },
    keyQuestion: {
        fontSize: 17
    },
    valueQuestion: {
        fontSize: 17,
        fontWeight: 'bold',
        width: '76%'
    },
    correctQuestion: {
        color: '#49CC96'
    },
    inCorrectQuestion: {
        color: '#ff0000bd'
    },
    wrapTranslateText: {
        flexDirection: 'row'
    },
    keyTranslate: {
        fontSize: 14,
    },
    valueTranslate: {
        width: '78%',
        fontSize: 14,
        fontWeight: 'bold',
    },
    transIcon: {
        width: 24, height: 24
    },
    answerItem: {
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: "center",
        marginRight: SIZES.padding,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    ansView: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    ansText: {
        ...FONTS.body2
    },
    flWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: { height: '50%' },
    questionImage: {
        width: '90%',
        marginLeft: '5%',
        height: '100%',
        resizeMode: 'cover'
    },
    content: {
        paddingHorizontal: 10,
        marginTop: 10,
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8
    }
})

const testingStyles = StyleSheet.create({
    container: {
        height: '100%'
    },
    header: {
        height: '10%',
        marginTop: 10
    },

    bottomButton: {
        marginTop: 20,
        paddingHorizontal: 8
    },
    audioPlayer: {
        width: '100%',
        marginTop: 20
    },
    content: { height: '50%' }
})


export { homeStyles, desStyles, partOneStyles, testingStyles };