import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Rows from "../Rows";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Rows
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={false}
      />
      <Rows
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={false}
      />
      <Rows
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <Rows
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}
      />
      <Rows
        title="Horror Movies"
        fetchUrl={requests.fetchHorroMovies}
        isLargeRow={false}
      />
      <Rows
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Rows
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={false}
      />
    </div>
    //rows
  );
}

export default HomeScreen;
