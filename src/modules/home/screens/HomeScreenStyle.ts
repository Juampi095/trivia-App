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
            marginBottom: '10%',
            fontFamily: 'Avenir',
        },
        button: {
            width: '80%',
            padding: 15,
            marginVertical: 10,
            backgroundColor: '#74b9ff',
            borderRadius: 10,
            alignItems: 'center',
        },
        buttonText: {
            fontSize: 18,
            color: '#fff',
        },
        buttonPlay: {
            backgroundColor: '#FF7F50',
        },
    });
};
