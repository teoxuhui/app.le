
import React from 'react';
import {
    View,
    Text,
    SectionList,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Image,
    Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; // Import vector icons
const datasource = [
    {
        title: 'Fighting',
        bgColor: 'red',
        icon: 'hand-fist',
        color: 'darkred',
        data: [
            {
                key: 'Hitmanlee',
                image:
                    'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_106-2x.png',
            },
            {
                key: 'Hitmanchan',
                image:
                    'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_107-2x.png',
            },
        ],
    },
    {
        title: 'Psychic',
        bgColor: 'pink',
        icon: 'eye',
        color:'purple',
        data: [
            {
                key: 'Mew',
                image:
                    'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_151-2x.png',
            },
            {
                key: 'Mewtwo',
                image:
                    'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_150-2x.png',
            },
        ],
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: StatusBar.currentHeight || 0,
    },
    addButton: {
        marginBottom: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 10,
        color: 'white',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    itemText: {
        fontSize: 16,
        flex: 1,
        textAlign: 'left',
    },
    itemImage: {
        width: 60,
        height: 80,
        borderRadius: 8,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerIcon: {
        marginRight: 10,
    },
});

const renderItem = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.key}</Text>
            <Image
                source={{ uri: item.image }}
                style={styles.itemImage}
                resizeMode="contain"
            />
        </View>
    );
};

const App = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Pokémon</Text>
            </TouchableOpacity>
            <SectionList
                sections={datasource}
                keyExtractor={(item, index) => item.key + index}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, icon, color } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                        <Icon name={icon} size={20} color={color} style={styles.headerIcon} />
                        <Text style={[styles.sectionHeader]}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
};
export default App;
