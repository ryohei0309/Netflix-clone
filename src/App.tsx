import React from 'react';
import './App.css';
import { Row } from "./Row";
import { requests } from "./request";

function App() {
  return (
    <div className="App">
      <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.feachNetflixOriginals}
          isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      <Row title="Action Movies" fetchUrl={requests.feactActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
