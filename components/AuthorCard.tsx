import { type Author, type Genre } from "@/types/author";
import { callNumber, workTitle, workIsbn } from "@/lib/authors";
import { buyUrl, ACTIVE_RETAILER } from "@/lib/bookLinks";

interface AuthorCardProps {
  author: Author;
  /** Index in the list, used to stagger the entrance animation. */
  index: number;
  /** Clicking a genre tag filters the catalog to that genre. */
  onGenreSelect: (genre: Genre) => void;
}

export default function AuthorCard({ author, index, onGenreSelect }: AuthorCardProps) {
  return (
    <article className="card" style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}>
      <span className="card__call">{callNumber(author)}</span>
      <span className="card__origin">{author.origin}</span>
      <h2 className="card__name">{author.name}</h2>

      <ul className="card__works">
        {author.works.map((work) => {
          const title = workTitle(work);
          return (
            <li key={title}>
              <a
                className="card__buy"
                href={buyUrl(title, author.name, workIsbn(work))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Find \u201C${title}\u201D by ${author.name} at ${ACTIVE_RETAILER.label}`}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>

      <p className="card__note">{author.note}</p>

      <div className="card__tags">
        {author.genres.map((genre) => (
          <button key={genre} className="tag" onClick={() => onGenreSelect(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </article>
  );
}