"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/", matchPath: "/" },
    { name: "Contact", href: "/contact", matchPath: "/contact" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#061a36] backdrop-blur-xl shadow-md"
          : "border-white/5 bg-[#061a36]/82 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-0">
        <a href="/" className="flex items-center" aria-label="Aloha AVL home">
          <img
            src="/aloha-avl-logo.png"
            alt="Aloha AVL Logo"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const isActive = pathname === link.matchPath;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors duration-300 pb-2 ${
                  isActive
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-accent transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            <Button asChild size="sm">
              <a href="/contact">
                Get a Quote
                <ArrowRight />
              </a>
            </Button>
          </div>
          <Button
            size="icon"
            variant="outline"
            className="lg:hidden border-white/20 text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#061a36] px-5 py-4">
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              const isActive = pathname === link.matchPath;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-base font-semibold transition-colors duration-300 py-2 border-b-2 ${
                    isActive
                      ? "text-white border-accent"
                      : "text-slate-300 hover:text-white border-transparent"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="mt-2 border-t border-white/10 pt-4 flex flex-col gap-3 sm:hidden">
              <Button asChild size="sm" className="w-full justify-center">
                <a href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
