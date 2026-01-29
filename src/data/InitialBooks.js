export const initialBooks = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0-7432-7356-5",
    publishYear: 1925,
    genre: "Classic Fiction",
    pages: 180,
    publisher: "Scribner",
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    description:
      "A classic American novel set in the Jazz Age that explores themes of decadence, idealism, and excess.",
    rating: 5,
    createdAt: new Date("2024-01-15").toISOString(),
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "978-0-06-112008-4",
    publishYear: 1960,
    genre: "Classic Fiction",
    pages: 324,
    publisher: "J.B. Lippincott & Co.",
    coverImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    description:
      "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
    rating: 5,
    createdAt: new Date("2024-01-16").toISOString(),
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    isbn: "978-0-452-28423-4",
    publishYear: 1949,
    genre: "Dystopian Fiction",
    pages: 328,
    publisher: "Secker & Warburg",
    coverImage:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
    description:
      "A dystopian social science fiction novel that explores the dangers of totalitarianism and mass surveillance.",
    rating: 5,
    createdAt: new Date("2024-01-17").toISOString(),
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "978-0-14-143951-8",
    publishYear: 1813,
    genre: "Romance",
    pages: 432,
    publisher: "T. Egerton",
    coverImage:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    description:
      "A romantic novel of manners that critiques the British landed gentry at the end of the 18th century.",
    rating: 4,
    createdAt: new Date("2024-01-18").toISOString(),
  },
  {
    id: "5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "978-0-316-76948-0",
    publishYear: 1951,
    genre: "Coming-of-Age Fiction",
    pages: 277,
    publisher: "Little, Brown and Company",
    coverImage:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=600&fit=crop",
    description:
      "A story about teenage rebellion and alienation that has become a classic of American literature.",
    rating: 4,
    createdAt: new Date("2024-01-19").toISOString(),
  },
  {
    id: "6",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "978-0-547-92822-7",
    publishYear: 1937,
    genre: "Fantasy",
    pages: 310,
    publisher: "George Allen & Unwin",
    coverImage:
      "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
    description:
      "A fantasy novel about the quest of home-loving Bilbo Baggins to win a share of the treasure guarded by a dragon.",
    rating: 5,
    createdAt: new Date("2024-01-20").toISOString(),
  },
  {
    id: "7",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    isbn: "978-0-7475-3269-9",
    publishYear: 1997,
    genre: "Fantasy",
    pages: 223,
    publisher: "Bloomsbury",
    coverImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop",
    description:
      "The first novel in the Harry Potter series, following a young wizard's journey at Hogwarts School.",
    rating: 5,
    createdAt: new Date("2024-01-21").toISOString(),
  },
  {
    id: "8",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isbn: "978-0-618-64561-1",
    publishYear: 1954,
    genre: "Fantasy",
    pages: 1178,
    publisher: "George Allen & Unwin",
    coverImage:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop",
    description:
      "An epic high-fantasy novel chronicling the struggle of good against evil in the fictional world of Middle-earth.",
    rating: 5,
    createdAt: new Date("2024-01-22").toISOString(),
  },
];

export const getInitialBooksData = () => {
  const stored = localStorage.getItem("bookoo_books");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error(`Error parsing stored books: ${error}`);
      return initialBooks;
    }
  }
  return initialBooks;
};
