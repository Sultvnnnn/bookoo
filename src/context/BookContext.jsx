import React, { createContext, useState, useEffect, useContext } from "react";

//! URL MOCK API
const API_URL = "https://697b9afb889a1aecfeb055dd.mockapi.io/api/v1/books";

//! CREATE CONTEXT
const BookContext = createContext();

//! PROVIDER COMPONENT
export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //* [CREATE] Tambah buku (API POST)
  const addBook = async (newBook) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      //? Buat ID unik dan default cover jika kosong
      const bookData = {
        ...newBook,
        id: Date.now().toString(),
        rating: 0,
        createdAt: new Date().toISOString(),
        coverImage:
          newBook.coverImage || "https://placehold.co/400x600?text=No+Cover",
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) throw new Error("Gagal menambahkan buku");

      await fetchBooks();

      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  //* [READ] Load data (API GET)
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Gagal mengambil data dari API");

      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError("Gagal memuat data buku.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  //* [UPDATE] Edit buku (API PUT)
  const updateBook = async (id, updatedData) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error("Gagal mengedit buku");

      await fetchBooks();

      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  //* [DELETE] Hapus buku (API DELETE)
  const deleteBook = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Gagal menghapus buku");

      await fetchBooks();

      return { success: true };
    } catch (err) {
      alert("Gagal menghapus buku.");
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  //? Load data saat pertama kali mount
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider
      value={{
        books,
        loading,
        error,
        addBook,
        updateBook,
        deleteBook,
        refreshBooks: fetchBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
