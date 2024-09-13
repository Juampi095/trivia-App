import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff7ff',
        padding: 20,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        fontFamily: 'Avenir',

    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        margin: 20,
        backgroundColor: '#fff7ff',
        borderRadius: 30,
        padding: 40,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
        width: '90%',
        justifyContent: 'center',
    },
    modalTitle: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    optionText: {
        fontSize: 16,
        padding: 10,
        color: '#9ebaff',
        textAlign: 'center',
    },

})