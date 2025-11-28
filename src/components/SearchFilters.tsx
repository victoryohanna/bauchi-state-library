

import { SearchFiltersType } from "./BookDiscovery";

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFilterChange: (filters: Partial<SearchFiltersType>) => void;
  onClearFilters: () => void;
  bookCount: number;
}

export const SearchFilters = ({
  filters,
  onFilterChange,
  onClearFilters,
  bookCount,
}: SearchFiltersProps) => {
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "Technology",
    "History",
    "Biography",
    "Children",
  ];

  return (
    <div className="space-y-6">
      {/* Search Box */}
      <div>
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Search Books
        </label>
        <div className="relative">
          <input
            type="text"
            id="search"
            placeholder="Search by title, author, or ISBN..."
            value={filters.query}
            onChange={(e) => onFilterChange({ query: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select
          value={filters.category}
          onChange={(e) => onFilterChange({ category: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Availability Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Availability
        </label>
        <select
          value={filters.availability}
          onChange={(e) => onFilterChange({ availability: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All Books</option>
          <option value="available">Available Now</option>
          <option value="unavailable">Currently Unavailable</option>
        </select>
      </div>

      {/* Sort By */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sort By
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => onFilterChange({ sortBy: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="title">Title (A-Z)</option>
          <option value="author">Author (A-Z)</option>
          <option value="year-newest">Publication Year (Newest)</option>
          <option value="year-oldest">Publication Year (Oldest)</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Results Count & Clear Filters */}
      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">
            {bookCount} {bookCount === 1 ? "book" : "books"} found
          </span>
          <button
            onClick={onClearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
};
