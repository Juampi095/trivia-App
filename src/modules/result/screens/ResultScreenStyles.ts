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
        titleText: {
            fontSize: 28,
            fontWeight: 'bold',
            color: '#FFF',
            marginBottom: 20,
            fontFamily: 'Avenir',
        },
        buttonRestart: {
            width: '80%',
            padding: 15,
            marginVertical: 10,
            backgroundColor: '#FF7F50',
            borderRadius: 10,
            alignItems: 'center',
        },
        buttonExit: {
            width: '80%',
            padding: 15,
            marginVertical: 10,
            backgroundColor: '#d63031',
            borderRadius: 10,
            alignItems: 'center',
        },
        buttonText: {
            fontSize: 18,
            color: '#fff',
        },

    });
};
