// ===== Books Database =====
// Comprehensive book collection stored as JSON

const booksDatabase = [
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "fiction",
        pages: 304,
        length: "medium",
        synopsis: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "4.2/5", reviews: "850K+" },
            { source: "Amazon", rating: "4.4/5", reviews: "45K+" },
            { source: "LibraryThing", rating: "4.1/5", reviews: "12K+" }
        ]
    },
    {
        id: 2,
        title: "Project Hail Mary",
        author: "Andy Weir",
        genre: "sci-fi",
        pages: 476,
        length: "long",
        synopsis: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "4.5/5", reviews: "500K+" },
            { source: "Amazon", rating: "4.7/5", reviews: "85K+" },
            { source: "Publishers Weekly", rating: "Starred", reviews: "Professional" }
        ]
    },
    {
        id: 3,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "thriller",
        pages: 325,
        length: "medium",
        synopsis: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "4.1/5", reviews: "900K+" },
            { source: "Amazon", rating: "4.3/5", reviews: "120K+" },
            { source: "New York Times", rating: "Bestseller", reviews: "Featured" }
        ]
    },
    {
        id: 4,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        genre: "fantasy",
        pages: 662,
        length: "long",
        synopsis: "Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen. The perfect read for fans of Harry Potter and The Lord of the Rings.",
        series: {
            prequels: [],
            sequels: ["The Wise Man's Fear", "The Doors of Stone (forthcoming)"]
        },
        ratings: [
            { source: "Goodreads", rating: "4.5/5", reviews: "750K+" },
            { source: "Amazon", rating: "4.6/5", reviews: "32K+" },
            { source: "Fantasy Book Review", rating: "9.5/10", reviews: "Professional" }
        ]
    },
    {
        id: 5,
        title: "Educated",
        author: "Tara Westover",
        genre: "non-fiction",
        pages: 334,
        length: "medium",
        synopsis: "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara's older brothers became violent.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "4.5/5", reviews: "1.2M+" },
            { source: "Amazon", rating: "4.6/5", reviews: "95K+" },
            { source: "New York Times", rating: "Bestseller", reviews: "Featured" }
        ]
    },
    {
        id: 6,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genre: "historical",
        pages: 388,
        length: "medium",
        synopsis: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "4.4/5", reviews: "1.5M+" },
            { source: "Amazon", rating: "4.6/5", reviews: "78K+" },
            { source: "BookPage", rating: "Starred", reviews: "Professional" }
        ]
    },
    {
        id: 7,
        title: "Dune",
        author: "Frank Herbert",
        genre: "sci-fi",
        pages: 688,
        length: "long",
        synopsis: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the 'spice' melange, a drug capable of extending life and enhancing consciousness.",
        series: {
            prequels: [],
            sequels: ["Dune Messiah", "Children of Dune", "God Emperor of Dune"]
        },
        ratings: [
            { source: "Goodreads", rating: "4.3/5", reviews: "950K+" },
            { source: "Amazon", rating: "4.5/5", reviews: "45K+" },
            { source: "Hugo Award", rating: "Winner", reviews: "1966" }
        ]
    },
    {
        id: 8,
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        genre: "mystery",
        pages: 384,
        length: "medium",
        synopsis: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "4.5/5", reviews: "2M+" },
            { source: "Amazon", rating: "4.7/5", reviews: "280K+" },
            { source: "New York Times", rating: "Bestseller", reviews: "142 weeks" }
        ]
    },
    {
        id: 9,
        title: "The Song of Achilles",
        author: "Madeline Miller",
        genre: "historical",
        pages: 352,
        length: "medium",
        synopsis: "Greece in the age of heroes. Patroclus, an awkward young prince, has been exiled to the court of King Peleus and his perfect son Achilles. Despite their differences, the boys develop a tender friendship, a bond which blossoms into something deeper.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "4.4/5", reviews: "850K+" },
            { source: "Amazon", rating: "4.6/5", reviews: "42K+" },
            { source: "Orange Prize", rating: "Winner", reviews: "2012" }
        ]
    },
    {
        id: 10,
        title: "The Invisible Life of Addie LaRue",
        author: "V.E. Schwab",
        genre: "fantasy",
        pages: 448,
        length: "medium",
        synopsis: "France, 1714: in a moment of desperation, a young woman makes a Faustian bargain to live forever—and is cursed to be forgotten by everyone she meets. Thus begins the extraordinary life of Addie LaRue, and a dazzling adventure that will play out across centuries and continents.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "4.3/5", reviews: "600K+" },
            { source: "Amazon", rating: "4.5/5", reviews: "38K+" },
            { source: "Locus Award", rating: "Winner", reviews: "2021" }
        ]
    },
    {
        id: 11,
        title: "It Ends with Us",
        author: "Colleen Hoover",
        genre: "romance",
        pages: 376,
        length: "medium",
        synopsis: "Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town where she grew up—she graduated from college, moved to Boston, and started her own business.",
        series: {
            prequels: [],
            sequels: ["It Starts with Us"]
        },
        ratings: [
            { source: "Goodreads", rating: "4.4/5", reviews: "1.8M+" },
            { source: "Amazon", rating: "4.6/5", reviews: "125K+" },
            { source: "Goodreads Choice", rating: "Winner", reviews: "2016" }
        ]
    },
    {
        id: 12,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "non-fiction",
        pages: 320,
        length: "medium",
        synopsis: "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "4.4/5", reviews: "850K+" },
            { source: "Amazon", rating: "4.8/5", reviews: "145K+" },
            { source: "Wall Street Journal", rating: "Bestseller", reviews: "Featured" }
        ]
    },
    {
        id: 13,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "fantasy",
        pages: 310,
        length: "medium",
        synopsis: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure.",
        series: {
            prequels: [],
            sequels: ["The Lord of the Rings: The Fellowship of the Ring", "The Lord of the Rings: The Two Towers", "The Lord of the Rings: The Return of the King"]
        },
        ratings: [
            { source: "Goodreads", rating: "4.3/5", reviews: "3.5M+" },
            { source: "Amazon", rating: "4.7/5", reviews: "65K+" },
            { source: "Classic Status", rating: "Literary Canon", reviews: "Since 1937" }
        ]
    },
    {
        id: 14,
        title: "Gone Girl",
        author: "Gillian Flynn",
        genre: "thriller",
        pages: 432,
        length: "medium",
        synopsis: "On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne's fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick's clever and beautiful wife disappears. Husband-of-the-Year Nick isn't doing himself any favors with cringe-worthy daydreams about the slope and shape of his wife's head.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "4.1/5", reviews: "2.8M+" },
            { source: "Amazon", rating: "4.3/5", reviews: "95K+" },
            { source: "New York Times", rating: "Bestseller", reviews: "Featured" }
        ]
    },
    {
        id: 15,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "fiction",
        pages: 208,
        length: "short",
        synopsis: "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago, who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "3.9/5", reviews: "3M+" },
            { source: "Amazon", rating: "4.6/5", reviews: "58K+" },
            { source: "International Bestseller", rating: "150M+ copies sold", reviews: "Worldwide" }
        ]
    },
    {
        id: 16,
        title: "Circe",
        author: "Madeline Miller",
        genre: "fantasy",
        pages: 393,
        length: "medium",
        synopsis: "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child—not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power—the power of witchcraft.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "4.3/5", reviews: "750K+" },
            { source: "Amazon", rating: "4.5/5", reviews: "48K+" },
            { source: "Women's Prize", rating: "Finalist", reviews: "2019" }
        ]
    },
    {
        id: 17,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "sci-fi",
        pages: 224,
        length: "short",
        synopsis: "Seconds before Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.",
        series: {
            prequels: [],
            sequels: ["The Restaurant at the End of the Universe", "Life, the Universe and Everything", "So Long, and Thanks for All the Fish"]
        },
        ratings: [
            { source: "Goodreads", rating: "4.2/5", reviews: "1.2M+" },
            { source: "Amazon", rating: "4.6/5", reviews: "18K+" },
            { source: "Classic Status", rating: "Cult Classic", reviews: "Since 1979" }
        ]
    },
    {
        id: 18,
        title: "Big Little Lies",
        author: "Liane Moriarty",
        genre: "mystery",
        pages: 460,
        length: "medium",
        synopsis: "Sometimes it's the little lies that turn out to be the most lethal... A murder... A tragic accident... Or just parents behaving badly? What's indisputable is that someone is dead.",
        series: {
            prequels: [],
            sequels: ["Truly Madly Guilty (companion)"]
        },
        ratings: [
            { source: "Goodreads", rating: "4.2/5", reviews: "1.5M+" },
            { source: "Amazon", rating: "4.4/5", reviews: "85K+" },
            { source: "Emmy Award", rating: "Winner (TV)", reviews: "2017" }
        ]
    },
    {
        id: 19,
        title: "Normal People",
        author: "Sally Rooney",
        genre: "romance",
        pages: 273,
        length: "medium",
        synopsis: "Connell and Marianne grew up in the same small town, but the similarities end there. At school, Connell is popular and well liked, while Marianne is a loner. But when the two strike up a conversation—awkward but electrifying—something life changing begins.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "3.9/5", reviews: "800K+" },
            { source: "Amazon", rating: "4.2/5", reviews: "35K+" },
            { source: "Costa Novel Award", rating: "Winner", reviews: "2018" }
        ]
    },
    {
        id: 20,
        title: "1984",
        author: "George Orwell",
        genre: "fiction",
        pages: 328,
        length: "medium",
        synopsis: "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes.",
        series: null,
        ratings: [
            { source: "Goodreads", rating: "4.2/5", reviews: "4M+" },
            { source: "Amazon", rating: "4.6/5", reviews: "45K+" },
            { source: "Classic Status", rating: "Literary Canon", reviews: "Since 1949" }
        ]
    }
];

// Author database for "Author of the Day" feature
const authorsDatabase = [
    {
        name: "Matt Haig",
        bio: "Matt Haig is an English author and journalist known for his fiction and non-fiction books. His work often explores themes of mental health, depression, and anxiety with warmth and humor.",
        books: 12,
        genre: "Fiction & Non-Fiction",
        emoji: "📖"
    },
    {
        name: "Andy Weir",
        bio: "Andy Weir is an American novelist best known for his debut novel The Martian. His background in computer science brings scientific accuracy and technical detail to his science fiction works.",
        books: 4,
        genre: "Science Fiction",
        emoji: "🚀"
    },
    {
        name: "Taylor Jenkins Reid",
        bio: "Taylor Jenkins Reid is a bestselling American author known for her emotionally resonant novels about complex women and Hollywood glamour. Her books often explore themes of identity, love, and fame.",
        books: 8,
        genre: "Historical Fiction",
        emoji: "✨"
    },
    {
        name: "Madeline Miller",
        bio: "Madeline Miller is an American novelist and teacher known for her retellings of Greek mythology. She brings fresh perspectives to ancient stories with lyrical prose and deep character development.",
        books: 2,
        genre: "Historical Fantasy",
        emoji: "🏛️"
    },
    {
        name: "Colleen Hoover",
        bio: "Colleen Hoover is an American author who writes primarily romance and young adult fiction. Her emotionally powerful storytelling has made her one of the most popular contemporary romance authors.",
        books: 24,
        genre: "Romance",
        emoji: "💕"
    },
    {
        name: "J.R.R. Tolkien",
        bio: "J.R.R. Tolkien was an English writer and philologist who created the legendary Middle-earth universe. His work laid the foundation for modern fantasy literature.",
        books: 15,
        genre: "Fantasy",
        emoji: "🧙‍♂️"
    },
    {
        name: "Paulo Coelho",
        bio: "Paulo Coelho is a Brazilian lyricist and novelist best known for The Alchemist. His books combine spirituality, philosophy, and simple yet profound storytelling.",
        books: 30,
        genre: "Philosophical Fiction",
        emoji: "🌟"
    }
];
