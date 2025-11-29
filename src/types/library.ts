// types/library.ts
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
