import { useRef } from "react";

const AddMovie = (props) => {
  const titleRef = useRef();
  const openingTextRef = useRef();
  const releaseDateRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const openingText = openingTextRef.current.value;
    const releaseDate = releaseDateRef.current.value;

    if (title === "" && openingText === "" && releaseDate === "") return;

    const movie = {
      title: title,
      openingText: openingText,
      releaseDate: releaseDate,
    };

    props.onAddMovie(movie);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title" className=" block font-bold mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          className="w-full border rounded mb-2 focus:outline-[#200048] px-1"
        />
      </div>
      <div>
        <label htmlFor="opening-text" className=" block font-bold mb-1">
          Opening Text
        </label>
        <textarea
          ref={openingTextRef}
          rows="5"
          id="opening-text"
          className="w-full border rounded mb-2 focus:outline-[#200048] px-1"
        ></textarea>
      </div>
      <div>
        <label htmlFor="release-date" className=" block font-bold mb-1">
          Release Date
        </label>
        <input
          ref={releaseDateRef}
          type="text"
          id="release-date"
          className="w-full border rounded mb-5 focus:outline-[#200048] px-1"
        />
      </div>
      <button className="block mx-auto py-2.5 px-9 text-xl text-white hover:bg-purple-900 bg-[#200048] rounded-full">
        Add Movie
      </button>
    </form>
  );
};

export default AddMovie;
