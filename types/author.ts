// The canonical list of genres. Declared `as const` so the values
// become a literal union type (`Genre`) rather than plain `string[]`.
export const GENRES = [
  "Literary Fiction",
  "Science Fiction & Fantasy",
  "Romance",
  "Mystery & Thriller",
  "Poetry",
  "Nonfiction & Essays",
  "Memoir",
  "Young Adult",
  "Historical Fiction",
  "Horror",
  "Children's",
] as const;

export type Genre = (typeof GENRES)[number];

/** Sentinel used by the filter UI to mean "no genre filter". */
export type GenreFilter = Genre | "All";

/**
 * A notable work. A bare string is just a title (fine for search-based buy
 * links). Upgrade any entry to `{ title, isbn }` to get a direct Bookshop.org
 * affiliate link for that book. Because `string` is part of the union, every
 * existing plain-string entry stays valid — no data migration required.
 */
export type WorkEntry = string | { title: string; isbn?: string };

export interface Author {
  name: string;
  /** Country or region of origin, shown as a small tag on each card. */
  origin: string;
  /** Every genre the author is filed under. First entry drives the call number. */
  genres: Genre[];
  /** A few notable works. */
  works: WorkEntry[];
  /** One-line editorial note. */
  note: string;
}

/** Short "call number" codes, one per genre, used on the catalog cards. */
export const GENRE_CODE: Record<Genre, string> = {
  "Literary Fiction": "LIT",
  "Science Fiction & Fantasy": "SFF",
  "Romance": "ROM",
  "Mystery & Thriller": "MYS",
  "Poetry": "PO",
  "Nonfiction & Essays": "NF",
  "Memoir": "MEM",
  "Young Adult": "YA",
  "Historical Fiction": "HIS",
  "Horror": "HOR",
  "Children's": "CHI",
};