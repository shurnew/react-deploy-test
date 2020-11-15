import React,{Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/movie";
import NavigationBar from "./components/navi";
import Slide from "./components/SlideMenu";
import Subject from "./components/Subject";
import SeachBox from "./components/SeachBox";

var firebase = require("firebase");
class App extends Component {
  state ={
  
  }
  //라이프사이클 마운트전
  componentWillMount(){
    
  }
  //라이프사이클 마운트후
  componentDidMount(){
    this.getMovies();
  }

  getMovies = async () => {
    const movies = await this.callApi();
    this.setState({
      movies
    });
  };

  renderMovies = () =>{
    const movies = this.state.movies.map((movie, index) => {
      return <Movie 
        title={movie.title_english} 
        poster={movie.large_cover_image} 
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
        />;
    })
    return movies
  } 

  callApi = () =>{
    console.log(firebase)
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    .then(movie => movie.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }


  render(){
    return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Slide></Slide>
      <SeachBox></SeachBox>
      <Subject></Subject>
      <div className = "Posts">
        {this.state.movies ? this.renderMovies():"loding" }
      </div>
      
    </div>
    );
  }
}

export default App;
