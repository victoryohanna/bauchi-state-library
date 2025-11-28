// components/staff/circulation/CheckoutForm.tsx
"use client";

import { useState } from "react";

export default function CheckoutForm() {
  const [memberId, setMemberId] = useState("");
  const [bookId, setBookId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate due date only when needed, not during render
  const getDueDate = () => {
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14); // 2 weeks from now
    return dueDate.toLocaleDateString();
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setMemberId("");
    setBookId("");
    setIsProcessing(false);

    // Show success message
    alert("Book checked out successfully!");
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Check Out Book
      </h2>

      <form onSubmit={handleCheckout} className="space-y-6">
        <div>
          <label
            htmlFor="memberId"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Member ID or Name
          </label>
          <input
            type="text"
            id="memberId"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            placeholder="Enter member ID or search by name..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="bookId"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Book ISBN or Title
          </label>
          <input
            type="text"
            id="bookId"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            placeholder="Enter ISBN or search by title..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Member & Book Preview (would be populated from search) */}
        {(memberId || bookId) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Member Info</h4>
              <p className="text-sm text-gray-600">Ahmed Musa (BSL2024001)</p>
              <p className="text-xs text-gray-500">2 books currently on loan</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Book Info</h4>
              <p className="text-sm text-gray-600">
                Things Fall Apart - Chinua Achebe
              </p>
              <p className="text-xs text-gray-500">ISBN: 9780385474542</p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-500">Due date: {getDueDate()}</div>

          <button
            type="submit"
            disabled={isProcessing}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isProcessing ? "Processing..." : "Check Out Book"}
          </button>
        </div>
      </form>
    </div>
  );
}
