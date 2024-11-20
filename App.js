import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; // Import vector icons

const datasource = [
    {
        title: 'Head Only',
        bgColor: 'yellow',
        icon: 'face-smile',
        color: 'orange',
        textColor: 'orange',
        data: [
            {
                key: 'Excited',
                desc: 'A wide smile',
                image: require('./assets/fire.png'),
            },
            {
                key: 'Happy',
                desc: 'An innocent smile',
                image: require('./assets/fang.png'),
            },
        ],
    },
    {
        title: 'Bigger Picture',
        bgColor: 'olive',
        icon: 'file-image',
        color: 'green',
        textColor: 'green',
        data: [
            {
                key: 'P-Ko',
                desc: 'An excited Peko',
                image: require('./assets/pko.png'),
            },
            {
                key: 'Peashy',
                desc: 'A hungry Peashy',
                image: require('./assets/peashy.png'),
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
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'left',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        alignItems: 'center',
        width: 100,
    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginBottom: 10,
    },
    cardText: {
        fontSize: 14,
        textAlign: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    headerIcon: {
        marginRight: 10,
    },
});

const renderCard = ({ item }) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => alert(item.desc)}
        >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.key}</Text>
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <View style={styles.container}>
            {datasource.map((section, index) => (
                <View key={index} style={{ marginBottom: 20 }}>
                    <View
                        style={[
                            styles.headerContainer,
                            { backgroundColor: section.bgColor },
                        ]}
                    >
                        <Icon
                            name={section.icon}
                            size={20}
                            color={section.color}
                            style={styles.headerIcon}
                        />
                        <Text
                            style={[
                                styles.sectionHeader,
                                { color: section.textColor },
                            ]}
                        >
                            {section.title}
                        </Text>
                    </View>
                    <FlatList
                        data={section.data}
                        horizontal
                        renderItem={renderCard}
                        keyExtractor={(item, idx) => item.key + idx}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            ))}
        </View>
    );
};

export default App;
