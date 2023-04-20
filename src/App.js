import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Modal from "./UI/modalka/Modal";
import MovieItem from "./components/movieItem/MovieItem";
import { createPortal } from "react-dom";

function App() {
  const [modal, setModal] = useState(false);
  const [movie, setMovie] = useState([
    {
      title: "Daniel",
      url: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
      rating: "1",
      id: "01",
    },
  ]);

  function removeHandler(id) {
    const remove = movie.filter((i) => i.id !== id);
    console.log("id", id);
    setMovie(remove);
  }

  function addMovieHandler(data) {
    const addedMovie = [...movie, data];
    setMovie(addedMovie);
  }

  function openModalHandler() {
    setModal(!modal);
  }

  return (
    <>
      <div className="App">
        <Header modal={modal} onClick={openModalHandler} />
      </div>
      {modal &&
        createPortal(
          <Modal addMovie={addMovieHandler} onClose={openModalHandler} />,
          document.getElementById("modal")
        )}

      <div>
        {movie.map((el) => (
          <MovieItem
            removeHandler={removeHandler}
            key={el.id}
            id={el.id}
            title={el.title}
            rating={el.rating}
            url={el.url}
          />
        ))}
      </div>
    </>
  );
}

export default App;
