import React, { useState, useEffect } from "react";
import { Check, Search, X, Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const themes = [
    { name: "Neon Lime", value: "#8AE500" },
    { name: "Deep Sky", value: "#0099FF" },
    { name: "Hot Red", value: "#FF4D50" },
    { name: "Sunshine", value: "#FACC00" },
    { name: "Lavender", value: "#7A83FF" },
  ];

  const [currentTheme, setCurrentTheme] = useState(themes[0].value);
  const [showSearchBar, setShowSearchBar] = useState(false);

  // Logic Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      // Munculkan search bar setelah scroll 350px
      if (window.scrollY > 350) {
        setShowSearchBar(true);
      } else {
        setShowSearchBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeChange = (color) => {
    setCurrentTheme(color);
    document.documentElement.style.setProperty("--main", color);
  };

  const scrollToCollection = (e) => {
    e.preventDefault();
    const element = document.getElementById("koleksi");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b-2 border-black bg-main text-black transition-colors duration-300 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center h-16 relative">
          {/* 1. Logo Area (Kiri) */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-3xl font-black uppercase tracking-tighter bg-black text-white px-2 inline-block transform -rotate-2">
              Bookoo
            </span>
          </div>

          {/* 2. AREA TENGAH (DESKTOP ONLY) */}
          <div className="flex-1 flex justify-center px-4 transition-all duration-300">
            <a
              href="#koleksi"
              onClick={scrollToCollection}
              className={`hidden md:block font-bold text-lg hover:underline decoration-2 underline-offset-4 cursor-pointer pt-2 transition-opacity duration-300 ${showSearchBar ? "opacity-0 w-0 h-0 overflow-hidden" : "opacity-100"}`}
            >
              Koleksi Buku
            </a>

            {/* Search Bar Desktop */}
            {showSearchBar && (
              <div className="hidden md:flex w-full max-w-md animate-in slide-in-from-top-2 fade-in duration-300">
                <div className="relative w-full flex items-center">
                  <Search className="absolute left-3 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Cari buku..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 border-2 border-black rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-none transition-all"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 p-1 hover:bg-gray-200 rounded-full"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 3. THEME SWITCHER AREA */}

          {/* A. TAMPILAN MOBILE (DROPDOWN) */}
          <div className="md:hidden shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center w-10 h-10 bg-white border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none focus:outline-none">
                <Palette className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {themes.map((theme) => (
                  <DropdownMenuItem
                    key={theme.value}
                    onClick={() => handleThemeChange(theme.value)}
                    className="cursor-pointer focus:bg-black focus:text-white flex justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full border border-black"
                        style={{ backgroundColor: theme.value }}
                      ></div>
                      {theme.name}
                    </div>
                    {currentTheme === theme.value && (
                      <Check className="w-4 h-4" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* B. TAMPILAN DESKTOP */}
          <div className="hidden md:flex items-center gap-3 bg-white border-2 border-black px-3 py-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
            <div className="flex gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => handleThemeChange(theme.value)}
                  className={`
                              relative w-6 h-6 rounded-full border-2 border-black transition-all duration-200
                              ${
                                currentTheme === theme.value
                                  ? "scale-110 shadow-none ring-1 ring-black ring-offset-1"
                                  : "hover:-translate-y-1 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] opacity-70 hover:opacity-100"
                              }
                          `}
                  style={{ backgroundColor: theme.value }}
                >
                  {currentTheme === theme.value && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Check className="w-3 h-3 text-black stroke-[4]" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 4. SEARCH BAR MOBILE (DI BAWAH NAVBAR) */}
          {showSearchBar && (
            <div className="md:hidden absolute top-[100%] left-0 w-full p-2 animate-in slide-in-from-top-5 duration-300 z-40">
              <div className="relative w-full flex items-center">
                <input
                  type="text"
                  placeholder="Cari buku..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 bg-white border-2 border-black rounded-lg font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-none transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 p-1 hover:bg-gray-200 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
