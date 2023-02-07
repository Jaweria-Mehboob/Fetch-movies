const Movie = (props) => {
  return (
    <li className="block mx-auto py-8 px-1 sm:px-5 text-center text-xl text-white bg-[#200048] rounded-lg my-5">
      <h2 className=" text-[#F7E208] font-semibold mb-5 text-4xl md:text-5xl">
        {props.title}
      </h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
