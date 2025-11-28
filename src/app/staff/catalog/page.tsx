// app/staff/catalog/page.tsx
"use client";

import { useState } from "react";
import AddBookForm from "../../../components/staff/catalog/AddBookForm";
import EditBookForm from "../../../components/staff/catalog/EditBookForm";
import BookTable from "../../../components/staff/catalog/BookTable";

type CatalogView = "browse" | "add" | "edit";

interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  publishedYear: number;
  copies: number;
  available: number;
}

export default function CatalogPage() {
  const [activeView, setActiveView] = useState<CatalogView>("browse");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Catalog Management
          </h1>
          <p className="mt-2 text-gray-600">Manage library book collection</p>
        </div>

        <button
          onClick={() => setActiveView("add")}
          className="mt-4 sm:mt-0 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          + Add New Book
        </button>
      </div>

      {activeView === "browse" && (
        <BookTable
          onEditBook={(book) => {
            setSelectedBook(book);
            setActiveView("edit");
          }}
        />
      )}

      {activeView === "add" && (
        <AddBookForm onCancel={() => setActiveView("browse")} />
      )}

      {activeView === "edit" && selectedBook && (
        <EditBookForm
          book={selectedBook}
          onCancel={() => setActiveView("browse")}
        />
      )}
    </div>
  );
}
