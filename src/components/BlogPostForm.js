import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

//Created for the simple reason that the form to add a post and to edit a post are same
const BlogPostForm = ({ postTitle, postContent, buttonFunction, onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)//Depending on the screen the title will either be filled(in case of editing a post) or it will have it's default value of ''(in case of creating a post)
    const [content, setcontent] = useState(initialValues.content)// " "

    //Creation of the Form Screen
    return (
        <View>
            <Text style={styles.label}>{postTitle}</Text>
            <TextInput
                value={title}
                onChangeText={text => setTitle(text)}
                autoCorrect={false}
                style={styles.input} />
            <Text style={styles.label}>{postContent}</Text>
            <TextInput
                value={content}
                onChangeText={text => setcontent(text)}
                autoCorrect={false}
                style={styles.input} />
            <Button
                title={buttonFunction}
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

//Giving default properties to "initialValues", since the CreateScreen does not have initialValues
BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5,
        borderRadius: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 5
    }
})

export default BlogPostForm