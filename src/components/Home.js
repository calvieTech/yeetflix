import React, { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Row from "./Row";
import Footer from "./Footer";
import Banner from "../components/Banner";
import "../sass/home.scss";
import Nav from "./Nav";

function Home({ requests }) {
  return (
    <>
      <nav className="home__nav">
        <Nav />
      </nav>
      <main className="home">
        <Banner requests={requests} fetchUrl={requests.fetchNetflixOriginals} />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </main>
      <footer className="home__footer">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
