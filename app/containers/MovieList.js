import {FlatList, Image, StyleSheet, Text, View} from "react-native"
import React, {Component} from "react"
import * as movieActions from '../actions/movieActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


const REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json"

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {
        movies: [],
        loaded: false
      }
    }
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'movies',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    }
  }

  componentDidMount() {
    // this.fetchData()
    const { movieAction } = this.props
    movieAction.fetchMovies()
  }

  render() {
    const { movie } = this.props
    // const { movie } = this.state
    if (!movie.loaded) {
      return this.renderLoadingView()
    }

    return (
      <FlatList
        style={styles.list}
        renderItem={this.renderMovie}
        data={movie.movies}
        keyExtractor={item => item.id}
      />
    )
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载电影数据......
        </Text>
      </View>
    )
  }

  renderMovie({item}) {
    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail}
               source={{uri: item.posters.thumbnail}}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    )
  }

  async fetchData() {
    let response = await fetch(REQUEST_URL)
    let responseData = await response.json()

    this.setState({
      movie: {
        movies: responseData.movies,
        loaded: true,
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  },
  list: {
    paddingTop: 50,
    backgroundColor: '#F5FCFF'
  },

  default: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 4,
    flex: 1,
    fontSize: 13,
  },

})


function mapStateToProps(state) {
  return {
    movie: state.movieReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    movieAction: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
