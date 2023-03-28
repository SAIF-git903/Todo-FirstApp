import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native"


export default function AppTodo(props) {
    const { submitHandler } = props
    const [text, setText] = useState("")

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Add todo..."
                onChangeText={changeHandler}
                value={text}
                multiline
            />
            <View style={styles.btnView}>
                <Button onPress={() => {
                    submitHandler(text);
                    setText("")
                }} title="Add todo" color="goldenrod" />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: "#ddd",
        marginHorizontal: 20,
        height: 50
    },
    btnView: {
        margin: 20,
        width: 100,
    },
})