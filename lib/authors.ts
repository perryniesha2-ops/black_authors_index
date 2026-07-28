import { type Author, type WorkEntry, GENRE_CODE } from "@/types/author";

// Authors can belong to multiple genres — they'll appear under each one
// they're filed in. Because `genres` is typed `Genre[]`, TypeScript will
// reject any misspelled or unknown genre here at compile time.
//
// This is a hardcoded starting catalog. When you're ready to make it
// editable without a redeploy, swap this array for a Supabase query that
// returns the same `Author[]` shape and the components won't change.
export const AUTHORS: Author[] = [
  // Literary Fiction
  { name: "Toni Morrison", origin: "USA", genres: ["Literary Fiction"], works: ["Beloved", "Song of Solomon", "The Bluest Eye"], note: "Nobel laureate whose novels reshaped the American canon." },
  { name: "James Baldwin", origin: "USA", genres: ["Literary Fiction", "Nonfiction & Essays"], works: ["Go Tell It on the Mountain", "Giovanni's Room", "The Fire Next Time"], note: "Novelist and essayist of race, faith, and desire." },
  { name: "Colson Whitehead", origin: "USA", genres: ["Literary Fiction", "Historical Fiction"], works: ["The Underground Railroad", "The Nickel Boys", "Harlem Shuffle"], note: "Two-time Pulitzer winner who bends genre at will." },
  { name: "Jesmyn Ward", origin: "USA", genres: ["Literary Fiction"], works: ["Salvage the Bones", "Sing, Unburied, Sing"], note: "Two National Book Awards for her Mississippi Gulf fiction." },
  { name: "Zora Neale Hurston", origin: "USA", genres: ["Literary Fiction"], works: ["Their Eyes Were Watching God", "Mules and Men"], note: "Harlem Renaissance writer and folklorist." },
  { name: "Ralph Ellison", origin: "USA", genres: ["Literary Fiction"], works: ["Invisible Man"], note: "A single towering novel on visibility and identity." },
  { name: "Chimamanda Ngozi Adichie", origin: "Nigeria", genres: ["Literary Fiction"], works: ["Half of a Yellow Sun", "Americanah"], note: "Chronicler of Nigeria, migration, and love." },
  { name: "Alice Walker", origin: "USA", genres: ["Literary Fiction"], works: ["The Color Purple", "Meridian"], note: "Pulitzer winner; coined 'womanist.'" },
  { name: "Zadie Smith", origin: "UK", genres: ["Literary Fiction"], works: ["White Teeth", "On Beauty", "NW"], note: "Sharp, polyphonic novels of multicultural London." },
  { name: "Marlon James", origin: "Jamaica", genres: ["Literary Fiction"], works: ["A Brief History of Seven Killings", "Black Leopard, Red Wolf"], note: "Booker Prize winner with a maximalist voice." },
  { name: "Brandon Taylor", origin: "USA", genres: ["Literary Fiction"], works: ["Real Life", "The Late Americans"], note: "Interior, precise fiction of campus and queer life." },

  // Science Fiction & Fantasy
  { name: "Octavia E. Butler", origin: "USA", genres: ["Science Fiction & Fantasy"], works: ["Kindred", "Parable of the Sower", "Dawn"], note: "The foundational voice of Black speculative fiction." },
  { name: "N.K. Jemisin", origin: "USA", genres: ["Science Fiction & Fantasy"], works: ["The Fifth Season", "The City We Became"], note: "First to win the Hugo for Best Novel three years running." },
  { name: "Samuel R. Delany", origin: "USA", genres: ["Science Fiction & Fantasy"], works: ["Dhalgren", "Babel-17", "Nova"], note: "New Wave pioneer of language and desire in SF." },
  { name: "Nnedi Okorafor", origin: "USA / Nigeria", genres: ["Science Fiction & Fantasy", "Young Adult", "Horror"], works: ["Binti", "Who Fears Death", "Akata Witch"], note: "Coined 'Africanfuturism'; blends myth and tech." },
  { name: "Tomi Adeyemi", origin: "USA", genres: ["Science Fiction & Fantasy", "Young Adult"], works: ["Children of Blood and Bone", "Children of Virtue and Vengeance"], note: "West-African-inspired epic fantasy phenomenon." },
  { name: "P. Djèlí Clark", origin: "USA", genres: ["Science Fiction & Fantasy"], works: ["A Master of Djinn", "Ring Shout"], note: "Alt-history fantasy rich with folklore and steam." },
  { name: "Rivers Solomon", origin: "USA", genres: ["Science Fiction & Fantasy"], works: ["An Unkindness of Ghosts", "The Deep"], note: "Speculative fiction of diaspora, gender, and memory." },
  { name: "Tochi Onyebuchi", origin: "USA", genres: ["Science Fiction & Fantasy"], works: ["Riot Baby", "War Girls"], note: "Near-future SF fused with racial reckoning." },

  // Romance
  { name: "Beverly Jenkins", origin: "USA", genres: ["Romance"], works: ["Indigo", "Forbidden"], note: "Pioneer of Black historical romance." },
  { name: "Jasmine Guillory", origin: "USA", genres: ["Romance"], works: ["The Wedding Date", "The Proposal"], note: "Breezy, modern contemporary romance." },
  { name: "Talia Hibbert", origin: "UK", genres: ["Romance"], works: ["Get a Life, Chloe Brown", "Take a Hint, Dani Brown"], note: "Warm, funny, body-positive love stories." },
  { name: "Alyssa Cole", origin: "USA", genres: ["Romance"], works: ["A Princess in Theory", "An Extraordinary Union"], note: "Ranges from royal rom-coms to Civil War spies." },
  { name: "Kennedy Ryan", origin: "USA", genres: ["Romance"], works: ["Before I Let Go", "Long Shot"], note: "Emotionally weighty, socially aware romance." },
  { name: "Farrah Rochon", origin: "USA", genres: ["Romance"], works: ["The Boyfriend Project", "The Dating Playbook"], note: "STEM-smart contemporary rom-coms." },

  // Mystery & Thriller
  { name: "Walter Mosley", origin: "USA", genres: ["Mystery & Thriller"], works: ["Devil in a Blue Dress", "Little Scarlet"], note: "Creator of P.I. Easy Rawlins and post-war L.A. noir." },
  { name: "Attica Locke", origin: "USA", genres: ["Mystery & Thriller"], works: ["Bluebird, Bluebird", "Black Water Rising"], note: "Texas crime fiction steeped in place and history." },
  { name: "S.A. Cosby", origin: "USA", genres: ["Mystery & Thriller"], works: ["Blacktop Wasteland", "Razorblade Tears"], note: "Hard-charging Southern noir with a beating heart." },
  { name: "Kellye Garrett", origin: "USA", genres: ["Mystery & Thriller"], works: ["Hollywood Homicide", "Like a Sister"], note: "Witty amateur-sleuth and domestic suspense." },
  { name: "Rachel Howzell Hall", origin: "USA", genres: ["Mystery & Thriller"], works: ["Land of Shadows", "These Toxic Things"], note: "L.A. detective series and twisty standalones." },
  { name: "Barbara Neely", origin: "USA", genres: ["Mystery & Thriller"], works: ["Blanche on the Lam"], note: "Domestic-worker sleuth Blanche White; genre trailblazer." },

  // Poetry
  { name: "Amanda Gorman", origin: "USA", genres: ["Poetry"], works: ["The Hill We Climb", "Call Us What We Carry"], note: "Youngest inaugural poet in U.S. history." },
  { name: "Rita Dove", origin: "USA", genres: ["Poetry"], works: ["Thomas and Beulah", "Grace Notes"], note: "Pulitzer winner and former U.S. Poet Laureate." },
  { name: "Gwendolyn Brooks", origin: "USA", genres: ["Poetry"], works: ["Annie Allen", "A Street in Bronzeville"], note: "First Black writer to win the Pulitzer Prize." },
  { name: "Langston Hughes", origin: "USA", genres: ["Poetry"], works: ["The Weary Blues", "Montage of a Dream Deferred"], note: "Voice of the Harlem Renaissance and jazz poetry." },
  { name: "Maya Angelou", origin: "USA", genres: ["Poetry", "Memoir"], works: ["And Still I Rise", "I Know Why the Caged Bird Sings"], note: "Poet and memoirist of survival and grace." },
  { name: "Claudia Rankine", origin: "USA / Jamaica", genres: ["Poetry"], works: ["Citizen: An American Lyric"], note: "Lyric essay-poetry on race and everyday aggression." },
  { name: "Jericho Brown", origin: "USA", genres: ["Poetry"], works: ["The Tradition", "The New Testament"], note: "Pulitzer winner; inventor of the 'duplex' form." },
  { name: "Nikki Giovanni", origin: "USA", genres: ["Poetry"], works: ["Black Feeling, Black Talk", "Bicycles"], note: "Beloved Black Arts Movement poet." },
  { name: "Tracy K. Smith", origin: "USA", genres: ["Poetry"], works: ["Life on Mars", "Wade in the Water"], note: "Pulitzer winner and former U.S. Poet Laureate." },

  // Nonfiction & Essays
  { name: "Ta-Nehisi Coates", origin: "USA", genres: ["Nonfiction & Essays", "Historical Fiction"], works: ["Between the World and Me", "The Water Dancer"], note: "Essayist on race, power, and American memory." },
  { name: "bell hooks", origin: "USA", genres: ["Nonfiction & Essays"], works: ["All About Love", "Ain't I a Woman"], note: "Feminist theorist writing in accessible prose." },
  { name: "Ibram X. Kendi", origin: "USA", genres: ["Nonfiction & Essays"], works: ["How to Be an Antiracist", "Stamped from the Beginning"], note: "Historian of racist ideas and antiracism." },
  { name: "Roxane Gay", origin: "USA", genres: ["Nonfiction & Essays"], works: ["Bad Feminist", "Hunger"], note: "Cultural critic with candor and wit." },
  { name: "Isabel Wilkerson", origin: "USA", genres: ["Nonfiction & Essays"], works: ["The Warmth of Other Suns", "Caste"], note: "Narrative nonfiction on migration and hierarchy." },
  { name: "Michelle Alexander", origin: "USA", genres: ["Nonfiction & Essays"], works: ["The New Jim Crow"], note: "Legal scholar on mass incarceration." },
  { name: "Angela Y. Davis", origin: "USA", genres: ["Nonfiction & Essays"], works: ["Women, Race & Class", "Are Prisons Obsolete?"], note: "Activist-scholar of abolition and feminism." },

  // Memoir
  { name: "Michelle Obama", origin: "USA", genres: ["Memoir"], works: ["Becoming", "The Light We Carry"], note: "Record-breaking memoir from the former First Lady." },
  { name: "Barack Obama", origin: "USA", genres: ["Memoir"], works: ["Dreams from My Father", "A Promised Land"], note: "Reflective memoir and presidential account." },
  { name: "Kiese Laymon", origin: "USA", genres: ["Memoir"], works: ["Heavy: An American Memoir"], note: "Unflinching memoir of body, family, and the South." },
  { name: "Saeed Jones", origin: "USA", genres: ["Memoir", "Poetry"], works: ["How We Fight for Our Lives", "Prelude to Bruise"], note: "Poet-memoirist of coming of age and grief." },
  { name: "Trevor Noah", origin: "South Africa", genres: ["Memoir"], works: ["Born a Crime"], note: "Comic, incisive memoir of apartheid-era childhood." },

  // Young Adult
  { name: "Angie Thomas", origin: "USA", genres: ["Young Adult"], works: ["The Hate U Give", "On the Come Up"], note: "Contemporary YA on justice and voice." },
  { name: "Jason Reynolds", origin: "USA", genres: ["Young Adult"], works: ["Long Way Down", "Ghost"], note: "Prolific, kinetic writer for young readers." },
  { name: "Nic Stone", origin: "USA", genres: ["Young Adult"], works: ["Dear Martin", "Odd One Out"], note: "Frank YA on race, identity, and belonging." },
  { name: "Elizabeth Acevedo", origin: "USA", genres: ["Young Adult", "Poetry"], works: ["The Poet X", "Clap When You Land"], note: "Novels in verse from an Afro-Dominican poet." },
  { name: "Tiffany D. Jackson", origin: "USA", genres: ["Young Adult"], works: ["Monday's Not Coming", "Grown"], note: "Suspense-driven YA that doesn't flinch." },
  { name: "Dhonielle Clayton", origin: "USA", genres: ["Young Adult", "Science Fiction & Fantasy"], works: ["The Belles", "Blackout"], note: "Lush fantasy and champion of diverse books." },

  // Historical Fiction
  { name: "Yaa Gyasi", origin: "USA / Ghana", genres: ["Historical Fiction"], works: ["Homegoing"], note: "Generational epic tracing slavery's long shadow." },
  { name: "Esi Edugyan", origin: "Canada", genres: ["Historical Fiction"], works: ["Washington Black", "Half-Blood Blues"], note: "Two-time Giller Prize winner." },
  { name: "Robert Jones Jr.", origin: "USA", genres: ["Historical Fiction"], works: ["The Prophets"], note: "Lyric antebellum novel of queer love and survival." },
  { name: "Edward P. Jones", origin: "USA", genres: ["Historical Fiction", "Literary Fiction"], works: ["The Known World", "Lost in the City"], note: "Pulitzer winner on Black slaveholding and D.C. life." },

  // Horror
  { name: "Tananarive Due", origin: "USA", genres: ["Horror"], works: ["The Reformatory", "The Good House"], note: "Leading voice in Black horror, fiction and scholarship." },
  { name: "Victor LaValle", origin: "USA", genres: ["Horror"], works: ["The Ballad of Black Tom", "The Changeling"], note: "Literary horror reworking Lovecraft and folklore." },
  { name: "L.A. Banks", origin: "USA", genres: ["Horror"], works: ["Minion", "The Awakening"], note: "Author of the Vampire Huntress Legend series." },

  // Children's
  { name: "Jacqueline Woodson", origin: "USA", genres: ["Children's", "Young Adult"], works: ["Brown Girl Dreaming", "The Day You Begin"], note: "National Ambassador for Young People's Literature." },
  { name: "Kwame Alexander", origin: "USA", genres: ["Children's"], works: ["The Crossover", "The Undefeated"], note: "Newbery Medalist writing sport and rhythm." },
  { name: "Derrick Barnes", origin: "USA", genres: ["Children's"], works: ["Crown: An Ode to the Fresh Cut"], note: "Picture books that celebrate Black boyhood." },
  { name: "Vashti Harrison", origin: "USA", genres: ["Children's"], works: ["Little Leaders", "Big"], note: "Caldecott-winning author-illustrator." },
];

/** Last whitespace-separated token of a name, used for sorting and codes. */
export function surnameOf(name: string): string {
  return name.split(" ").at(-1) ?? name;
}

/** Builds a library-style call number, e.g. "SFF · BUT" for Octavia Butler. */
export function callNumber(author: Author): string {
  const primary = author.genres[0];
  const code = primary ? GENRE_CODE[primary] : "GEN";
  return `${code} · ${surnameOf(author.name).slice(0, 3).toUpperCase()}`;
}

/** The display title of a work, whether it's a bare string or a `{ title }` object. */
export function workTitle(work: WorkEntry): string {
  return typeof work === "string" ? work : work.title;
}

/** The ISBN of a work, if one has been added. */
export function workIsbn(work: WorkEntry): string | undefined {
  return typeof work === "string" ? undefined : work.isbn;
}