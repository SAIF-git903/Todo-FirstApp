import React from "react";
import { StyleSheet, View, Text } from "react-native"

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomColor: "goldenrod",
        borderBottomWidth: 2,
        padding: 20,
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "goldenrod"
    }
});