// components/MovieCard.jsx
function MovieCard({ movie }) {
  return (
    <div className="w-[200px] h-[300px]">
      <img src={movie.poster} alt={movie.title} className="rounded-lg w-full h-60 object-cover" />
      <div className="text-white text-sm mt-2">
        <h3>{movie.title}</h3>
        <p className="text-xs opacity-70">{movie.ageLimit}+</p>
      </div>
    </div>
  );
}

export default MovieCard;
