// components/staff/circulation/CheckinForm.tsx
"use client";

import { useState } from "react";

export default function CheckinForm() {
  const [bookId, setBookId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setBookId("");
    setIsProcessing(false);

    // Show success message
    alert("Book checked in successfully!");
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Check In Book
      </h2>

      <form onSubmit={handleCheckin} className="space-y-6">
        <div>
          <label
            htmlFor="bookId"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Book ISBN, Barcode, or Title
          </label>
          <input
            type="text"
            id="bookId"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            placeholder="Scan barcode or enter book details..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {bookId && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Book Information</h4>
            <p className="text-sm text-gray-600">
              Things Fall Apart - Chinua Achebe
            </p>
            <p className="text-sm text-gray-600">
              Loaned to: Ahmed Musa (BSL2024001)
            </p>
            <p className="text-sm text-gray-600">
              Due date: {new Date().toLocaleDateString()}
            </p>
          </div>
        )}

        <div className="flex justify-end pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={isProcessing}
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isProcessing ? "Processing..." : "Check In Book"}
          </button>
        </div>
      </form>
    </div>
  );
}
