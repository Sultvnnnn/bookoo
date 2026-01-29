import React from "react";
import { Github, Instagram, Linkedin, Code2 } from "lucide-react";

const Footer = () => {
  const techStack = [
    "React 19",
    "Vite",
    "Tailwind CSS v4",
    "Shadcn UI",
    "Lucide React",
  ];

  return (
    <footer className="mt-20 border-t-2 border-black bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* KOLOM 1: BRANDING */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-tighter bg-black text-white px-2 inline-block transform -rotate-2">
              Bookoo
            </h2>
            <p className="font-medium text-black/80 max-w-xs leading-relaxed">
              Katalog perpustakaan modern dengan tema Neobrutalisme.
            </p>
            <div className="flex items-center gap-2 font-bold text-sm bg-yellow-300 border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Code2 className="w-4 h-4" />
              <span>UAS FRONT-END 2026</span>
            </div>
          </div>

          {/* KOLOM 2: TECH STACK (YANG KAMU MINTA) */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-black uppercase mb-4 underline decoration-4 underline-offset-4 decoration-main">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-bold border-2 border-black bg-gray-100 hover:bg-main hover:text-black hover:-translate-y-1 transition-all cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* KOLOM 3: SOCIAL & COPYRIGHT */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-black uppercase mb-4">Connect</h3>
            <div className="flex gap-4 mb-6">
              {[
                { Icon: Github, href: "https://github.com/Sultvnnnn/" },
                { Icon: Instagram, href: "https://instagram.com/sultvnnnn" },
                { Icon: Linkedin, href: "https://linkedin.com/in/sultvnnnn" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR BAWAH */}
      <div className="border-t-2 border-black py-4 text-center font-bold text-sm uppercase tracking-wide">
        &copy; {new Date().getFullYear()} Bookoo Library App. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
