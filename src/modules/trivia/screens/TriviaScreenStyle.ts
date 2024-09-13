import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff7ff',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    questionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#636e72',
        marginVertical: 15,
    },

    questionContainer: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#dfe6e9',
        marginBottom: 20,
        width: '90%',
        shadowColor: '#2d3436',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 5,
    },
    questionText: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#333',
    },
    answerButton: {
        width: '80%',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: '#818ada',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 16,
        padding: 10,
        color: '#40a0ff',
        textAlign: 'center',

    },
    answerText: {
        color: '#fff',
        fontSize: 16,
    },


    nextButton: {
        width: '80%',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: '#9ebaff',
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
    },

})