import React, { useState } from "react";
import { BookProvider, useBooks } from "./context/BookContext";
import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";
import BookCard from "./components/BookCard";
import Footer from "./components/Footer";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

const BookApp = () => {
  const { books, loading, error, deleteBook } = useBooks();
  const [editingBooks, setEditingBooks] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen pb-20 bg-white text-black font-sans">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="container mx-auto px-4 mt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase mb-8 tracking-tighter flex flex-col sm:block items-center justify-center gap-1 leading-none">
            <span className="text-black">Perpus</span>

            <span className="bg-main text-black border-2 border-black px-3 py-1 sm:ml-4 inline-block transform -rotate-1 sm:-rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors duration-300">
              Katalog
            </span>
          </h1>

          <div className="mt-10 max-w-lg mx-auto flex gap-2">
            <input
              type="text"
              placeholder="Cari buku apa..."
              className="flex-grow bg-white border-2 border-black h-12 px-4 font-bold rounded-none focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:font-normal"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-main text-black border-2 border-black h-12 w-12 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
              <Search className="w-6 h-6" strokeWidth={3} />
            </button>
          </div>
        </div>

        <BookForm currentBook={editingBooks} setEditing={setEditingBooks} />
        <div id="koleksi" className="pt-10">
          <Badge className="mb-5 text-3xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Koleksi
          </Badge>
          {/* --- LOGIC SKELETON LOADING --- */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Render 4 Skeleton Cards */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="pt-8 flex flex-col space-y-3 border-2 border-black p-4 rounded-lg"
                >
                  <Skeleton className="h-[200px] w-full rounded-md bg-gray-200" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-3/4 bg-gray-200" />
                    <Skeleton className="h-4 w-1/2 bg-gray-200" />
                  </div>
                  <div className="pt-4 mt-auto flex gap-2">
                    <Skeleton className="h-9 w-full bg-gray-200" />
                    <Skeleton className="h-9 w-full bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onEdit={setEditingBooks}
                    onDelete={deleteBook}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12 border-2 border-dashed border-black rounded-lg bg-gray-50">
                  <p className="font-bold text-xl uppercase">
                    Data Buku tidak ditemukan.
                  </p>
                </div>
              )}
            </div>
          )}
          {/* ----------------------------- */}
        </div>
        <Footer />
      </main>
    </div>
  );
};

function App() {
  return (
    <BookProvider>
      <BookApp />
    </BookProvider>
  );
}

export default App;
