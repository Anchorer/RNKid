import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

var MOCKED_MOVIES_DATA = [
    {
        title: '标题',
        year: '2015',
        posters: { thumbnail: "http://i.imgur.com/UePbdph.jpg" }
    }
];

var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class MovieApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null    // Custom state variable and assignment
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount(): void {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies
                });
            });
    }

    render() {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }
        var movie = this.state.movies[0];
        return this.renderMovie(movie);
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>正在获取数据...</Text>
            </View>
        );
    }

    renderMovie(movie) {
        return(
            <View style={styles.container}>
                <Image source={{ uri: movie.posters.thumbnail }} style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingLeft: 30,
        paddingRight: 30
    },
    rightContainer: {
        flex: 1
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    year: {
        textAlign: 'center'
    }
});