// app/books/page.tsx - FIXED VERSION
"use client";

import { useState, useEffect } from "react";
import { SearchFilters } from "../../components/SearchFilters";
import { BookGrid } from "../../components/BookGrid";
import { LoadingSkeleton } from "../../components/LoadingSkeleton";
import { Book, SearchFiltersType } from "../../types/library";

// Cover service utility
class BookCoverService {
  static generateCoverUrl(isbn: string): string {
    if (!isbn) {
      return "/images/book-placeholder.jpg";
    }

    // Try Open Library first (free, no API key needed)
    const openLibraryUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;

    // You can add more services here later
    return openLibraryUrl;
  }

  static async validateCoverUrl(url: string): Promise<boolean> {
    if (url === "/images/book-placeholder.jpg") {
      return true; // Local placeholder always exists
    }

    try {
      const response = await fetch(url, { method: "HEAD" });
      return response.ok;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default function BookDiscovery() {
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

  // Fetch books from your API
  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        // First, try to fetch from your actual API
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
          }/api/books`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.books) {
            // Define interface for API book response
            interface ApiBookResponse {
              _id: string;
              id?: string;
              title: string;
              author: string;
              coverImage?: string;
              isbn: string;
              category: string;
              publicationYear?: number;
              publishedYear?: number;
              description?: string;
              availableCopies: number;
              totalCopies: number;
              rating?: number;
              ratingCount?: number;
              status?: string;
              barcode?: string;
              keywords?: string[];
              addedBy?: {
                _id: string;
                firstName: string;
                lastName: string;
                staffId: string;
              };
              addedDate?: string;
              lastUpdated?: string;
              publisher?: string;
              edition?: string;
              language?: string;
              pages?: number;
              shelfLocation?: string;
              callNumber?: string;
            }

            // Transform API data to match our frontend Book type
            const apiBooks: Book[] = data.books.map(
              (apiBook: ApiBookResponse) => ({
                _id: apiBook._id || apiBook.id || "",
                title: apiBook.title,
                author: apiBook.author,
                coverUrl: apiBook.coverImage || "/images/book-placeholder.jpg", // Use coverImage for coverUrl
                coverImage: apiBook.coverImage,
                isbn: apiBook.isbn,
                category: apiBook.category,
                publishedYear:
                  apiBook.publicationYear ||
                  apiBook.publishedYear ||
                  new Date().getFullYear(),
                description:
                  apiBook.description ||
                  `${apiBook.title} by ${apiBook.author}`,
                availableCopies: apiBook.availableCopies,
                totalCopies: apiBook.totalCopies,
                rating: apiBook.rating || 0,
                ratingCount: apiBook.ratingCount,
                status: apiBook.status,
                barcode: apiBook.barcode,
                keywords: apiBook.keywords || [],
                addedBy: apiBook.addedBy,
                addedDate: apiBook.addedDate,
                lastUpdated: apiBook.lastUpdated,
                publisher: apiBook.publisher,
                edition: apiBook.edition,
                language: apiBook.language || "English",
                pages: apiBook.pages,
                shelfLocation: apiBook.shelfLocation,
                callNumber: apiBook.callNumber,
              })
            );

            setBooks(apiBooks);
            setFilteredBooks(apiBooks);
            setIsLoading(false);
            return;
          }
        }

        // If API fails or returns no data, use mock data
        console.log("API not available, using mock data");
        const mockBooks: Book[] = [
          {
            _id: "1",
            title: "Things Fall Apart",
            author: "Chinua Achebe",
            isbn: "9780385474542",
            coverUrl: "", // Will be generated
            category: "Fiction",
            publishedYear: 1958,
            description:
              "A classic novel about the clash of traditional African culture and colonial influences...",
            availableCopies: 4,
            totalCopies: 6,
            rating: 4.7,
          },
          {
            _id: "2",
            title: "Half of a Yellow Sun",
            author: "Chimamanda Ngozi Adichie",
            isbn: "9780007200283",
            coverUrl: "",
            category: "Fiction",
            publishedYear: 2006,
            description:
              "A powerful story about the Nigerian Civil War and its impact on ordinary people...",
            availableCopies: 2,
            totalCopies: 3,
            rating: 4.8,
          },
          {
            _id: "3",
            title: "The Secret Lives of Baba Segi's Wives",
            author: "Lola Shoneyin",
            isbn: "9781846687630",
            coverUrl: "",
            category: "Fiction",
            publishedYear: 2010,
            description:
              "A dramatic and humorous exploration of polygamy in modern Nigeria...",
            availableCopies: 1,
            totalCopies: 2,
            rating: 4.4,
          },
          {
            _id: "4",
            title: "Purple Hibiscus",
            author: "Chimamanda Ngozi Adichie",
            isbn: "9780007189885",
            coverUrl: "",
            category: "Fiction",
            publishedYear: 2003,
            description:
              "A coming-of-age story set in post-colonial Nigeria...",
            availableCopies: 3,
            totalCopies: 4,
            rating: 4.6,
          },
          {
            _id: "5",
            title: "Arrow of God",
            author: "Chinua Achebe",
            isbn: "9780385089200",
            coverUrl: "",
            category: "Fiction",
            publishedYear: 1964,
            description:
              "The third book in Achebe's African trilogy about traditional Igbo society...",
            availableCopies: 2,
            totalCopies: 3,
            rating: 4.5,
          },
          {
            _id: "6",
            title: "Stay With Me",
            author: "Ayobami Adebayo",
            isbn: "9781524733449",
            coverUrl: "",
            category: "Fiction",
            publishedYear: 2017,
            description:
              "A devastating story of marriage, motherhood, and the power of family...",
            availableCopies: 2,
            totalCopies: 2,
            rating: 4.3,
          },
          {
            _id: "7",
            title: "The Fishermen",
            author: "Chigozie Obioma",
            isbn: "9780316338370",
            coverUrl: "",
            category: "Fiction",
            publishedYear: 2015,
            description:
              "A striking debut novel about brotherhood and fate in 1990s Nigeria...",
            availableCopies: 1,
            totalCopies: 2,
            rating: 4.2,
          },
          {
            _id: "8",
            title: "Americanah",
            author: "Chimamanda Ngozi Adichie",
            isbn: "9780307455925",
            coverUrl: "",
            category: "Fiction",
            publishedYear: 2013,
            description:
              "A story of love, race, and identity spanning Nigeria and the United States...",
            availableCopies: 3,
            totalCopies: 5,
            rating: 4.7,
          },
        ];

        // Generate cover URLs and validate them
        const booksWithCovers = await Promise.all(
          mockBooks.map(async (book) => {
            const coverUrl = BookCoverService.generateCoverUrl(book.isbn);

            // Validate if the cover exists, fallback to placeholder if not
            const coverExists = await BookCoverService.validateCoverUrl(
              coverUrl
            );

            return {
              ...book,
              coverUrl: coverExists ? coverUrl : "/images/book-placeholder.jpg",
            };
          })
        );

        setBooks(booksWithCovers);
        setFilteredBooks(booksWithCovers);
      } catch (error) {
        console.error("Error fetching books:", error);
        // Fallback to basic data without cover validation
        const fallbackBooks: Book[] = [
          {
            _id: "1",
            title: "Things Fall Apart",
            author: "Chinua Achebe",
            isbn: "9780385474542",
            coverUrl: "/images/book-placeholder.jpg",
            category: "Fiction",
            publishedYear: 1958,
            description:
              "A classic novel about the clash of traditional African culture and colonial influences...",
            availableCopies: 4,
            totalCopies: 6,
            rating: 4.7,
          },
          {
            _id: "2",
            title: "Half of a Yellow Sun",
            author: "Chimamanda Ngozi Adichie",
            isbn: "9780007200283",
            coverUrl: "/images/book-placeholder.jpg",
            category: "Fiction",
            publishedYear: 2006,
            description:
              "A powerful story about the Nigerian Civil War and its impact on ordinary people...",
            availableCopies: 2,
            totalCopies: 3,
            rating: 4.8,
          },
        ];
        setBooks(fallbackBooks);
        setFilteredBooks(fallbackBooks);
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

  const filtersSidebarClass = isMobileFiltersOpen
    ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto lg:hidden"
    : "hidden lg:block lg:w-80 flex-shrink-0";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header Section */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              {/* Header Text */}
              <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Discover Our Collection
                </h1>
                <p className="text-lg sm:text-xl text-blue-100 max-w-3xl">
                  Explore our vast collection of books, journals, and resources
                  spanning various subjects and interests
                </p>
              </div>

              {/* Mobile Filter Button - Positioned properly */}
              <div className="flex justify-center md:justify-end">
                <button
                  onClick={() => setIsMobileFiltersOpen(true)}
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-blue-50 hover:shadow-lg transition-all duration-200 lg:hidden"
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
                  Search Books
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={filtersSidebarClass}>
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
}
