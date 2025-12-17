"use client";

import { useState, useEffect } from "react";
import AddBookForm from "../../../components/staff/catalog/AddBookForm";
import EditBookForm from "../../../components/staff/catalog/EditBookForm";
import BookTable from "../../../components/staff/catalog/BookTable";
import { Book, BookFormData } from "../../../types/library";
import { booksApi } from "../../../utils/api";
import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/navigation";


type CatalogView = "browse" | "add" | "edit";

export default function CatalogPage() {
  const [activeView, setActiveView] = useState<CatalogView>("browse");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, token, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (activeView === "browse") {
      fetchBooks();
    }
  }, [activeView]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try to fetch from API first
      try {
        const response = await booksApi.getBooks();
        if (response.books && response.books.length > 0) {
          setBooks(response.books);
        } else {
          // Fallback to mock data
          setBooks(getMockBooks());
        }
      } catch (apiError) {
        console.log("API not available, using mock data", apiError);
        setBooks(getMockBooks());
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch books";
      setError(errorMessage);
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };
  // Handle adding a new book with file uploads
  const handleAddBook = async (formData: FormData) => {
    try {
      setError(null);

      // Check if user is authenticated
      if (!token) {
        throw new Error("You are not authenticated. Please login again.");
      }

      // Check if user has permission
      if (!user || (user.role !== "admin" && user.role !== "librarian")) {
        throw new Error("You don't have permission to add books.");
      }

      // Debug: Log form data before sending
      console.log("Submitting form data...");

      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
        }/api/books`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Handle 401 Unauthorized specifically
        if (response.status === 401) {
          logout();
          router.push("/login");
          throw new Error("Session expired. Please login again.");
        }
        throw new Error(
          data.message || `Failed to add book (Status: ${response.status})`
        );
      }

      if (!data.success) {
        throw new Error(data.message || "Failed to add book");
      }

      // Show success message
      alert("Book added successfully!");

      // Switch back to browse view and refresh
      setActiveView("browse");
      fetchBooks();
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to add book";
      console.error("Error adding book:", err);
      setError(errorMessage);
      alert(`Error: ${errorMessage}`);
    }
  };

  const handleUpdateBook = async (
    id: string,
    bookData: Partial<BookFormData>
  ) => {
    try {
      // Your existing update logic
      console.log("Updating book:", { id, ...bookData });
      setActiveView("browse");
      fetchBooks();
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to update book";
      console.error("Error updating book:", err);
      alert(errorMessage);
    }
  };

  const handleDeleteBook = async (id: string) => {
    if (!confirm("Are you sure you want to delete this book?")) {
      return;
    }

    try {
      // Try to delete from API first
      try {
        await booksApi.deleteBook(id);
      } catch (apiError) {
        console.log("API not available, using mock deletion", apiError);
        // For mock data, just filter out the deleted book
        setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
        return;
      }

      // Refresh the book list
      setActiveView("browse");
      fetchBooks();
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to delete book";
      console.error("Error deleting book:", err);
      alert(errorMessage);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Catalog Management
          </h1>
          <p className="mt-2 text-gray-600">Manage library book collection</p>
        </div>

        {user && (user.role === "admin" || user.role === "librarian") && (
          <button
            onClick={() => setActiveView("add")}
            className="mt-4 sm:mt-0 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            + Add New Book
          </button>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {activeView === "browse" && (
        <BookTable
          books={books}
          loading={loading}
          onEditBook={(book) => {
            setSelectedBook(book);
            setActiveView("edit");
          }}
          onDeleteBook={handleDeleteBook}
        />
      )}

      {activeView === "add" && (
        <AddBookForm
          onCancel={() => setActiveView("browse")}
          onSubmit={handleAddBook}
        />
      )}

      {activeView === "edit" && selectedBook && (
        <EditBookForm
          book={selectedBook}
          onCancel={() => setActiveView("browse")}
          onSubmit={(bookData) => handleUpdateBook(selectedBook._id, bookData)}
        />
      )}
    </div>
  );
}


// Helper function for mock data
function getMockBooks(): Book[] {
  return [
    {
      _id: "1",
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      coverUrl: "",
      coverImage: "",
      isbn: "9780385474542",
      category: "Fiction",
      publishedYear: 1958,
      description:
        "A classic novel about pre-colonial life in Nigeria and the arrival of Europeans.",
      availableCopies: 3,
      totalCopies: 5,
      rating: 4.5,
      ratingCount: 120,
      status: "available",
      barcode: "BK000001",
      keywords: ["Nigeria", "Colonialism", "Tradition"],
      addedBy: {
        _id: "1",
        firstName: "System",
        lastName: "Admin",
        staffId: "BSL0001",
      },
      addedDate: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      publisher: "Heinemann",
      edition: "First",
      language: "English",
      pages: 209,
      shelfLocation: "FIC-ACH-001",
      callNumber: "823.914 ACH",
    },
    {
      _id: "2",
      title: "Half of a Yellow Sun",
      author: "Chimamanda Ngozi Adichie",
      coverUrl: "",
      coverImage: "",
      isbn: "9780007200283",
      category: "Fiction",
      publishedYear: 2006,
      description: "A novel about the Nigerian Civil War.",
      availableCopies: 1,
      totalCopies: 3,
      rating: 4.8,
      ratingCount: 95,
      status: "available",
      barcode: "BK000002",
      keywords: ["Biafra", "Civil War", "History"],
      addedBy: {
        _id: "1",
        firstName: "System",
        lastName: "Admin",
        staffId: "BSL0001",
      },
      addedDate: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      publisher: "Fourth Estate",
      edition: "First",
      language: "English",
      pages: 448,
      shelfLocation: "FIC-ADI-001",
      callNumber: "823.914 ADI",
    },
  ];
}