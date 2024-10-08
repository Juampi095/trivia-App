import { StyleSheet, useWindowDimensions } from 'react-native';

export const makeStyles = () => {
    const { height } = useWindowDimensions();

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#9D5BF5',
            padding: 20,

        },
        viewMainContainer: {
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: height * 0.03,
        },

        questionTitle: {
            fontSize: 24,
            fontWeight: '600',
            color: '#FFF',
            marginVertical: 15,
        },
        questionContainer: {
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#17d4a5',
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
            color: '#FFF',
        },
        answerButton: {
            width: '80%',
            paddingVertical: 12,
            paddingHorizontal: 15,
            borderRadius: 10,
            marginVertical: 10,
            backgroundColor: '#74b9ff',
            alignItems: 'center',
        },
        loadingText: {
            fontSize: 18,
            padding: 10,
            color: '#9D5BF5',
            textAlign: 'center',
        },
        text: {
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
    });
};
