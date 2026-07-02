import { footerLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#061a36] px-5 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div>
          <div className="mb-5">
            <a href="/" aria-label="Aloha AVL home">
              <img
                src="/aloha-avl-logo.png"
                alt="Aloha AVL Logo"
                className="h-14 w-auto object-contain"
              />
            </a>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/62">
            We design, integrate and support professional AVL systems that
            transform spaces and inspire audiences.
          </p>
        </div>
        {footerLinks.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-sm font-black">{column.title}</h3>
            <ul className="space-y-3">
              {column.links.map((link) => {
                // Determine the appropriate href based on the link content
                let href = "#";
                
                if (link === "About Us") href = "/about";
                else if (link === "Audio Systems" || link === "Video Systems" || link === "Lighting Design" || link === "Integration") href = "/services";
                else if (link === "Our Process") href = "/#process";
                else if (link.includes("@")) href = `mailto:${link}`;
                else if (link.includes("(") && link.includes(")")) href = `tel:${link.replace(/[^\d]/g, "")}`;
                
                return (
                  <li key={link}>
                    <a
                      href={href}
                      className="text-sm text-white/58 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/48 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 AVL Systems Integration. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="/privacy" className="hover:text-white/70 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-white/70 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
