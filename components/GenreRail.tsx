import { GENRES, type GenreFilter } from "@/types/author";

interface GenreRailProps {
  active: GenreFilter;
  onSelect: (genre: GenreFilter) => void;
}

export default function GenreRail({ active, onSelect }: GenreRailProps) {
  return (
    <nav className="idx-rail" aria-label="Filter by genre">
      <button
        className="idx-tab"
        aria-pressed={active === "All"}
        onClick={() => onSelect("All")}
      >
        All Shelves
      </button>

      {GENRES.map((genre) => (
        <button
          key={genre}
          className="idx-tab"
          aria-pressed={active === genre}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </nav>
  );
}