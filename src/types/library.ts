// types/library.ts
// types/library.ts - Update Book interface
export interface Book {
  _id: string;
  title: string;
  author: string;
  coverUrl: string;  // For frontend display
  coverImage?: string;  // For backend compatibility
  isbn: string;
  category: string;
  publishedYear: number;
  description: string;
  availableCopies: number;
  totalCopies: number;
  rating: number;
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

export interface User {
  id: string;
  staffId: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  department: string;
  phone: string;
  lastLogin?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
  success: boolean;
  message?: string;
  error?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T = unknown> {
  success: boolean;
  count: number;
  total: number;
  totalPages: number;
  currentPage: number;
  books: T[];
}

export interface SearchFiltersType {
  query: string;
  category: string;
  availability: string;
  sortBy: string;
}

export interface BookFormData {
  title: string;
  author: string;
  isbn: string;
  category: string;
  totalCopies: number;
  publicationYear?: number;
  publisher?: string;
  description?: string;
  language?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface Stats {
  totalBooks: number;
  totalMembers: number;
  activeLoans: number;
  overdueLoans: number;
}

export interface Loan {
  _id: string;
  book: Book;
  member: Member;
  issueDate: string;
  dueDate: string;
  returnDate?: string;
  status: 'active' | 'overdue' | 'returned';
}

export interface Member {
  _id: string;
  memberId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipType: string;
  status: string;
  currentLoans: string[];
  maxBooksAllowed: number;
}

export interface Activity {
  action: string;
  user?: string;
  book?: string;
  time: string;
  type: 'checkout' | 'return' | 'member' | 'catalog' | 'system';
}

export interface BookFormData {
  title: string;
  author: string;
  isbn: string;
  category: string;
  totalCopies: number;
  publicationYear?: number;
  publisher?: string;
  description?: string;
  language?: string;
  pages?: number;
  edition?: string;
  coverImage?: string;
}

export interface CheckoutData {
  memberId: string;
  bookId: string;
  dueDate?: string;
}

export interface CheckinData {
  loanId?: string;
  bookId?: string;
}