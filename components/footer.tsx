import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#061a36] px-5 py-14 text-white">
      {/* Centered Top Section */}
      <div className="mx-auto max-w-xl flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-5">
          <a href="/" aria-label="Aloha AVL home" className="inline-block">
            <img
              src="/aloha-avl-logo.png"
              alt="Aloha AVL Logo"
              className="h-16 w-auto object-contain"
            />
          </a>
        </div>
        
        {/* Description */}
        <p className="max-w-md text-sm leading-7 text-white/62">
          Reliable audio, video, and lighting rentals backed by technical expertise and genuine local service.
        </p>
        
        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/62 hover:text-white transition" aria-label="Facebook">
            <Facebook className="size-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/62 hover:text-white transition" aria-label="Instagram">
            <Instagram className="size-5" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/62 hover:text-white transition" aria-label="YouTube">
            <Youtube className="size-5" />
          </a>
        </div>
      </div>
      
      {/* Bottom Info Section restored to original style */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-white/48 sm:flex-row sm:justify-between">
        <p className="text-center">© 2026 Aloha AVL. All rights reserved.</p>
        <div className="flex justify-center gap-5">
          <a href="/privacy" className="hover:text-white/70 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-white/70 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
