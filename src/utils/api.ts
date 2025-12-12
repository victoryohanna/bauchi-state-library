import {
  Book,
  User,
  AuthResponse,
  ApiResponse,
  PaginatedResponse,
  BookFormData,
  LoginCredentials,
  Stats, // Add Stats import
  Loan, // Add Loan import
  Member, // Add Member import
} from "../types/library";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiRequest<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem("library-token");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Add Authorization header if token exists
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // Merge with any additional headers from options
  const finalHeaders = {
    ...headers,
    ...(options.headers as Record<string, string> || {}),
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: finalHeaders,
  });

  const data: ApiResponse<T> = await response.json();

  if (!response.ok) {
    throw new ApiError(response.status, data.message || "An error occurred");
  }

  if (!data.success) {
    throw new Error(data.message || "Request failed");
  }

  return data.data || (data as T);
}

// Auth specific functions
export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return apiRequest<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  },

  logout: async (): Promise<{ success: boolean; message: string }> => {
    return apiRequest("/auth/logout", {
      method: "POST",
    });
  },

  getProfile: async (): Promise<{ user: User }> => {
    return apiRequest<{ user: User }>("/auth/profile");
  },
};

// Books specific functions
export interface BooksQueryParams {
  page?: number;
  limit?: number;
  category?: string;
  author?: string;
  available?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export const booksApi = {
  getBooks: async (
    params?: BooksQueryParams
  ): Promise<PaginatedResponse<Book>> => {
    const queryString = params
      ? new URLSearchParams(params as Record<string, string>).toString()
      : "";
    return apiRequest<PaginatedResponse<Book>>(
      `/books${queryString ? `?${queryString}` : ""}`
    );
  },

  getBook: async (id: string): Promise<{ book: Book }> => {
    return apiRequest<{ book: Book }>(`/books/${id}`);
  },

  createBook: async (bookData: BookFormData): Promise<{ book: Book }> => {
    return apiRequest<{ book: Book }>("/books", {
      method: "POST",
      body: JSON.stringify(bookData),
    });
  },

  updateBook: async (
    id: string,
    bookData: Partial<BookFormData>
  ): Promise<{ book: Book }> => {
    return apiRequest<{ book: Book }>(`/books/${id}`, {
      method: "PUT",
      body: JSON.stringify(bookData),
    });
  },

  deleteBook: async (
    id: string
  ): Promise<{ success: boolean; message: string }> => {
    return apiRequest<{ success: boolean; message: string }>(`/books/${id}`, {
      method: "DELETE",
    });
  },

  searchBooks: async (
    query: string
  ): Promise<{ count: number; books: Book[] }> => {
    return apiRequest<{ count: number; books: Book[] }>(
      `/books/search?q=${encodeURIComponent(query)}`
    );
  },

  getCategories: async (): Promise<{ categories: string[] }> => {
    return apiRequest<{ categories: string[] }>("/books/categories");
  },
};

// For file uploads
export const uploadApi = {
  uploadBookCover: async (
    bookId: string,
    file: File
  ): Promise<{ book: Book; message: string }> => {
    const formData = new FormData();
    formData.append("coverImage", file);

    const token = localStorage.getItem("library-token");
    const response = await fetch(`${API_URL}/books/${bookId}/upload-cover`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(response.status, data.message || "Upload failed");
    }

    if (!data.success) {
      throw new Error(data.message || "Upload failed");
    }

    return data;
  },

  deleteBookCover: async (
    bookId: string
  ): Promise<{ book: Book; message: string }> => {
    return apiRequest<{ book: Book; message: string }>(
      `/books/${bookId}/cover`,
      {
        method: "DELETE",
      }
    );
  },
};

// Dashboard specific functions
export const dashboardApi = {
  getStats: async (): Promise<Stats> => {
    return apiRequest<Stats>("/dashboard/stats");
  },

  getRecentActivity: async (): Promise<Array<{
    action: string;
    user: string;
    book?: string;
    time: string;
    type: string;
  }>> => {
    return apiRequest("/dashboard/recent-activity");
  },
};

// Circulation specific functions
export interface CheckoutRequest {
  memberId: string;
  bookId: string;
  dueDate?: string;
}

export interface CheckinRequest {
  loanId: string;
  bookId: string;
}

export const circulationApi = {
  checkoutBook: async (data: CheckoutRequest): Promise<{ loan: Loan; message: string }> => {
    return apiRequest("/circulation/checkout", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  checkinBook: async (data: CheckinRequest): Promise<{ loan: Loan; message: string }> => {
    return apiRequest("/circulation/checkin", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  getActiveLoans: async (): Promise<{ loans: Loan[] }> => {
    return apiRequest<{ loans: Loan[] }>("/circulation/loans");
  },

  renewLoan: async (loanId: string): Promise<{ loan: Loan; message: string }> => {
    return apiRequest(`/circulation/loans/${loanId}/renew`, {
      method: "POST",
    });
  },

  searchBooks: async (query: string): Promise<{ books: Book[] }> => {
    return apiRequest<{ books: Book[] }>(`/books/search?q=${encodeURIComponent(query)}`);
  },

  searchMembers: async (query: string): Promise<{ members: Member[] }> => {
    return apiRequest<{ members: Member[] }>(`/members/search?q=${encodeURIComponent(query)}`);
  },
};

// Members specific functions
export interface MemberFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipType: string;
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
}

export const membersApi = {
  getMembers: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
  }): Promise<PaginatedResponse<Member>> => {
    const queryString = params ? new URLSearchParams(params as Record<string, string>).toString() : "";
    return apiRequest<PaginatedResponse<Member>>(`/members${queryString ? `?${queryString}` : ""}`);
  },

  getMember: async (id: string): Promise<{ member: Member }> => {
    return apiRequest<{ member: Member }>(`/members/${id}`);
  },

  createMember: async (memberData: MemberFormData): Promise<{ member: Member }> => {
    return apiRequest<{ member: Member }>("/members", {
      method: "POST",
      body: JSON.stringify(memberData),
    });
  },

  updateMember: async (id: string, memberData: Partial<MemberFormData>): Promise<{ member: Member }> => {
    return apiRequest<{ member: Member }>(`/members/${id}`, {
      method: "PUT",
      body: JSON.stringify(memberData),
    });
  },

  deleteMember: async (id: string): Promise<{ success: boolean; message: string }> => {
    return apiRequest<{ success: boolean; message: string }>(`/members/${id}`, {
      method: "DELETE",
    });
  },
};