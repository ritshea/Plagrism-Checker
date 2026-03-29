import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/5 bg-surface-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="text-gradient font-semibold">Plagiarism Checker</span>
            . Built with React & Vite
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              All systems operational
            </span>
            <a
              href="https://github.com/ritshea/Plagrism-Checker"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
            >
              Open Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
