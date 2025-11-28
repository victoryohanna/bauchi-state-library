// components/BookCard.tsx
import Image from "next/image";
import { Book } from "./BookDiscovery";

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const isAvailable = book.availableCopies > 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden">
      {/* Book Cover */}
      <div className="aspect-3/4 bg-gray-200 relative">
        <Image
          src={book.coverUrl || "/book-placeholder.jpg"}
          alt={`Cover of ${book.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover"
          onError={(e) => {
            // Fallback if image fails to load
            e.currentTarget.src = "/book-placeholder.jpg";
          }}
        />
        {/* Availability Badge */}
        <div
          className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
            isAvailable
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isAvailable ? "Available" : "Checked Out"}
        </div>
      </div>

      {/* Book Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">
          {book.title}
        </h3>

        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{book.publishedYear}</span>
          <span>{book.category}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${
                  star <= Math.floor(book.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-1 text-sm text-gray-600">({book.rating})</span>
        </div>

        {/* Availability Info */}
        <div className="flex items-center justify-between text-sm">
          <span
            className={`font-medium ${
              isAvailable ? "text-green-600" : "text-red-600"
            }`}
          >
            {book.availableCopies}/{book.totalCopies} copies
          </span>

          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
