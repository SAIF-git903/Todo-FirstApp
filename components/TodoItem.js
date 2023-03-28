import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default function TodoItem(props) {

    const { item, pressHandler } = props
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
            <Icon name="delete" size={20} color="black" onPress={() => pressHandler(item.key)} style={styles.iconStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginTop: 15,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        marginHorizontal: 40,
        flexDirection: "row"
    },
    text: {
        marginLeft: 10,
    },
    iconStyle: {
        position: "absolute",
        marginLeft: 250,
        marginTop: 15
    }
})