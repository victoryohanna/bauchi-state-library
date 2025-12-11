// components/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu, X, BookOpen, User, LogOut } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    router.push("/");
  };

  const handleLogin = () => {
    setIsMenuOpen(false);
    router.push("/login");
  };

  const handleStaffPortal = () => {
    setIsMenuOpen(false);
    router.push("/staff");
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-800">
              Bauchi State Library
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/books"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Collections
            </Link>
            <Link
              href="/services-page"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Services
            </Link>

            {/* Conditional buttons based on auth status */}
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <User className="h-4 w-4" />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {user.role}
                  </span>
                </div>
                <button
                  onClick={handleStaffPortal}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  <span>Staff Portal</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
              >
                Staff Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Show user info on mobile when logged in */}
            {user && (
              <span className="text-sm text-gray-600 hidden sm:block">
                {user.firstName}
              </span>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/books"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                href="/services-page"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              {/* Conditional mobile buttons based on auth status */}
              {user ? (
                <div className="pt-2 border-t border-gray-200 space-y-3">
                  <div className="space-y-2 mb-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span>
                        {user.firstName} {user.lastName}
                      </span>
                    </div>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {user.role}
                    </span>
                  </div>
                  <button
                    onClick={handleStaffPortal}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
                  >
                    <span>Staff Portal</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-2 bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition duration-200 font-medium"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium mt-2"
                >
                  Staff Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// "use client";

// import { useState } from "react";
// import { Menu, X, BookOpen, User, LogOut } from "lucide-react";
// import Link from "next/link";
// import { useAuth } from "../contexts/AuthContext";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user, logout } = useAuth();
//   const router = useRouter();

//   const handleLogout = () => {
//     logout();
//     setIsMenuOpen(false);
//     router.push("/");
//   };

//   const handleLogin = () => {
//     setIsMenuOpen(false);
//     router.push("/login");
//   };

//   const handleStaffPortal = () => {
//     setIsMenuOpen(false);
//     router.push("/staff");
//   };

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <BookOpen className="h-8 w-8 text-blue-600" />
//             <span className="font-bold text-xl text-gray-800">
//               Bauchi State Library
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               href="/"
//               className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//             >
//               About
//             </Link>
//             <Link
//               href="/books"
//               className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//             >
//               Collections
//             </Link>
//             <Link
//               href="/services-page"
//               className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
//             >
//               Services
//             </Link>

//             {/* Conditional buttons based on auth status */}
//             {user ? (
//               <div className="flex items-center space-x-4">
//                 <button
//                   onClick={handleStaffPortal}
//                   className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
//                 >
//                   <User className="h-4 w-4" />
//                   <span>Staff Portal</span>
//                 </button>
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
//                 >
//                   <LogOut className="h-4 w-4" />
//                   <span>Logout</span>
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={handleLogin}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
//               >
//                 Staff Login
//               </button>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center space-x-2">
//             {/* Show user info on mobile when logged in */}
//             {user && (
//               <span className="text-sm text-gray-600 hidden sm:block">
//                 Welcome, {user.username}
//               </span>
//             )}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//             >
//               {isMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-gray-200">
//             <div className="flex flex-col space-y-4">
//               <Link
//                 href="/"
//                 className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/books"
//                 className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Collections
//               </Link>
//               <Link
//                 href="/services-page"
//                 className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Services
//               </Link>

//               {/* Conditional mobile buttons based on auth status */}
//               {user ? (
//                 <div className="pt-2 border-t border-gray-200 space-y-3">
//                   <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
//                     <User className="h-4 w-4" />
//                     <span>Welcome, {user.username}</span>
//                   </div>
//                   <button
//                     onClick={handleStaffPortal}
//                     className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
//                   >
//                     <User className="h-4 w-4" />
//                     <span>Staff Portal</span>
//                   </button>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full flex items-center justify-center space-x-2 bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition duration-200 font-medium"
//                   >
//                     <LogOut className="h-4 w-4" />
//                     <span>Logout</span>
//                   </button>
//                 </div>
//               ) : (
//                 <button
//                   onClick={handleLogin}
//                   className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium mt-2"
//                 >
//                   Staff Login
//                 </button>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
