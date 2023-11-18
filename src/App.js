
import './App.css';
import Banner from './component/Banner';
import Content from './component/Content';
import Header from './component/Header';
import Notice from './component/Notice';
import requests from './requests';

function App() {
  return (
    <div className="App" >
      <Header/>
      <Banner/>

      
    
    
      <Content isPresent={true} title="Watch Premieres For Free" fetchUrl={requests.fetchNetflixOriginals}/>

<Content isPresent={true} title="Newest Releases" fetchUrl={requests.fetchTrending}/>

<Content  isPresent={true} title="Epic Sci-fi" fetchUrl={requests.fetchTopRated}/>

<Notice fetchUrl={requests.fetchNetflixOriginals}/>

<Content isPresent={true} title="All Drama Series" fetchUrl={requests.fetchActionMovies}/>

<Content isPresent={true} title=" ALL Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>

<Content isPresent={true} title="All Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>




    </div>
  );
}

export default App;
