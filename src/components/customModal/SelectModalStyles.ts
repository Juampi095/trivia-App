import { StyleSheet, useWindowDimensions } from 'react-native';

export const makeStyles = () => {
    const { height } = useWindowDimensions();

    return StyleSheet.create({
        container: {
            flex: 1,
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
    });
};
