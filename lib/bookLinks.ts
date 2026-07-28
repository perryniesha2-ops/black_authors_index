// Buy-link configuration. This directory links OUT to a retailer for each
// title — it never sells or hosts books itself.
//
// Two modes, chosen automatically per title:
//
//   1. Search link (default, zero setup): a keyword search on the active
//      retailer built from the title + author. Always lands on the right
//      book, but earns no affiliate commission.
//
//   2. Affiliate product link (Bookshop.org): used when BOTH an affiliate ID
//      is set below AND the title has an `isbn`. Points straight at the
//      product page with your affiliate tag, which earns commission.
//
// Bookshop.org pays non-bookstore affiliates 10% and directs most of its
// margin to independent bookstores — a good fit for a mission-driven catalog.
// Sign up at https://bookshop.org/affiliates, then paste your ID here.

export const BOOKSHOP_AFFILIATE_ID = ""; // e.g. "12345"

export interface Retailer {
  id: string;
  label: string;
  /** Build a keyword-search URL from a title + author. */
  searchUrl: (title: string, author: string) => string;
}

export const BOOKSHOP: Retailer = {
  id: "bookshop",
  label: "Bookshop.org",
  searchUrl: (title, author) =>
    `https://bookshop.org/beta-search?keywords=${encodeURIComponent(`${title} ${author}`)}`,
};

export const AMAZON: Retailer = {
  id: "amazon",
  label: "Amazon",
  searchUrl: (title, author) =>
    `https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author} book`)}&i=stripbooks`,
};

/** The retailer used for every buy link. Swap to AMAZON if you prefer. */
export const ACTIVE_RETAILER: Retailer = BOOKSHOP;

/**
 * Best buy URL for a title:
 *  - a Bookshop.org affiliate product link when an ISBN is known and an
 *    affiliate ID is configured (earns commission), otherwise
 *  - a keyword-search link on the active retailer.
 */
export function buyUrl(title: string, author: string, isbn?: string): string {
  if (isbn && BOOKSHOP_AFFILIATE_ID && ACTIVE_RETAILER.id === "bookshop") {
    return `https://bookshop.org/a/${BOOKSHOP_AFFILIATE_ID}/${isbn}`;
  }
  return ACTIVE_RETAILER.searchUrl(title, author);
}

/**
 * True when links can carry affiliate attribution. Used to show the required
 * affiliate disclosure. (US FTC rules and Bookshop's terms require disclosing
 * that you may earn a commission.)
 */
export const AFFILIATE_ACTIVE =
  Boolean(BOOKSHOP_AFFILIATE_ID) && ACTIVE_RETAILER.id === "bookshop";