"use client";

import { useMemo, useState } from "react";
import { type GenreFilter } from "@/types/author";
import { AUTHORS, surnameOf, workTitle } from "@/lib/authors";
import { AFFILIATE_ACTIVE, ACTIVE_RETAILER } from "@/lib/bookLinks";
import GenreRail from "@/components/GenreRail";
import AuthorCard from "@/components/AuthorCard";

export default function AuthorIndex() {
  const [genre, setGenre] = useState<GenreFilter>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    return AUTHORS.filter((author) => {
      const inGenre = genre === "All" || author.genres.includes(genre);
      if (!inGenre) return false;
      if (!q) return true;

      return (
        author.name.toLowerCase().includes(q) ||
        author.note.toLowerCase().includes(q) ||
        author.works.some((work) => workTitle(work).toLowerCase().includes(q)) ||
        author.genres.some((g) => g.toLowerCase().includes(q))
      );
    }).sort((a, b) => surnameOf(a.name).localeCompare(surnameOf(b.name)));
  }, [genre, query]);

  const reset = () => {
    setQuery("");
    setGenre("All");
  };

  return (
    <>
      <header className="idx-head">
        <div className="idx-wrap">
          <p className="idx-eyebrow">Scout-A-Book</p>
          <h1 className="idx-title">
            Black authors,
            <br />
            filed by <em>genre.</em>
          </h1>
          <p className="idx-sub">
            Pull a drawer, search a name. A living catalog of the writers shaping every shelf —
            from Afrofuturist epics to inaugural verse.
          </p>

          <div className="idx-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E4A11B" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search author, title, or theme…"
              aria-label="Search authors"
            />
          </div>
        </div>
      </header>

      <div className="idx-wrap">
        <GenreRail active={genre} onSelect={setGenre} />

        <p className="idx-count">
          {results.length} {results.length === 1 ? "card" : "cards"}
          {genre !== "All" ? ` in ${genre}` : " across the catalog"}
          {query ? ` matching \u201C${query}\u201D` : ""}
        </p>

        {results.length === 0 ? (
          <div className="idx-empty">
            <h3>No cards in this drawer</h3>
            <p>Nothing matched that search. Try a different genre or clear the field.</p>
            <button onClick={reset}>Reset the catalog</button>
          </div>
        ) : (
          <div className="idx-grid" key={genre + query}>
            {results.map((author, i) => (
              <AuthorCard key={author.name} author={author} index={i} onGenreSelect={setGenre} />
            ))}
          </div>
        )}

        <footer className="idx-foot">
          {AUTHORS.length} authors · 11 genres · a starting catalog you can grow
          <br />
          {AFFILIATE_ACTIVE
            ? `Some links are affiliate links to ${ACTIVE_RETAILER.label}; purchases may earn a commission that supports independent bookstores.`
            : `Book titles link out to ${ACTIVE_RETAILER.label}.`}
        </footer>
      </div>
    </>
  );
}