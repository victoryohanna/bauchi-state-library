"use client";

import { useState, useEffect } from "react";
import { SearchFilters } from "../../components/SearchFilters";
import { BookGrid } from "../../components/BookGrid";
import { LoadingSkeleton } from "../../components/LoadingSkeleton";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  isbn: string;
  category: string;
  publishedYear: number;
  description: string;
  availableCopies: number;
  totalCopies: number;
  rating: number;
}

export interface SearchFiltersType {
  query: string;
  category: string;
  availability: string;
  sortBy: string;
}

export default function BookDiscovery(){
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [filters, setFilters] = useState<SearchFiltersType>({
    query: "",
    category: "all",
    availability: "all",
    sortBy: "title",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Fetch books (replace with your API)
  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        // Mock data - replace with actual API call
        const mockBooks: Book[] = [
          {
            id: "1",
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            coverUrl: "/covers/great-gatsby.jpg",
            isbn: "9780743273565",
            category: "Fiction",
            publishedYear: 1925,
            description: "A classic novel of the Jazz Age...",
            availableCopies: 3,
            totalCopies: 5,
            rating: 4.5,
          },
          {
            id: "2",
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            coverUrl: "/covers/mockingbird.jpg",
            isbn: "9780061120084",
            category: "Fiction",
            publishedYear: 1960,
            description: "A gripping tale of racial injustice...",
            availableCopies: 0,
            totalCopies: 3,
            rating: 4.8,
          },
          {
            id: "3",
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            coverUrl: "/covers/time-history.jpg",
            isbn: "9780553380163",
            category: "Science",
            publishedYear: 1988,
            description: "Exploring the nature of time and universe...",
            availableCopies: 2,
            totalCopies: 2,
            rating: 4.6,
          },
        ];
        setBooks(mockBooks);
        setFilteredBooks(mockBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Apply filters
  useEffect(() => {
    let result = books;

    // Search query filter
    if (filters.query) {
      const query = filters.query.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.isbn.includes(query)
      );
    }

    // Category filter
    if (filters.category !== "all") {
      result = result.filter((book) => book.category === filters.category);
    }

    // Availability filter
    if (filters.availability !== "all") {
      if (filters.availability === "available") {
        result = result.filter((book) => book.availableCopies > 0);
      } else if (filters.availability === "unavailable") {
        result = result.filter((book) => book.availableCopies === 0);
      }
    }

    // Sorting
    result = [...result].sort((a, b) => {
      switch (filters.sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "author":
          return a.author.localeCompare(b.author);
        case "year-newest":
          return b.publishedYear - a.publishedYear;
        case "year-oldest":
          return a.publishedYear - b.publishedYear;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setFilteredBooks(result);
  }, [books, filters]);

  const handleFilterChange = (newFilters: Partial<SearchFiltersType>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      query: "",
      category: "all",
      availability: "all",
      sortBy: "title",
    });
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Discover Books
              </h1>
              <p className="mt-2 text-gray-600">
                Explore our collection of {books.length} books
              </p>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 lg:hidden"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
                />
              </svg>
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div
            className={
              isMobileFiltersOpen
                ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto lg:hidden"
                : "hidden lg:block lg:w-80 shrink-0"
            }
          >
            {isMobileFiltersOpen && (
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-500"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}

            <SearchFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
              bookCount={filteredBooks.length}
            />
          </div>

          {/* Book Grid */}
          <div className="flex-1">
            <BookGrid books={filteredBooks} />
          </div>
        </div>
      </div>
    </div>
  );
};
