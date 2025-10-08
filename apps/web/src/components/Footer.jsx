import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} Plagiarism Checker. Built with React,
          Node.js & Tailwind CSS
        </p>
        <p className="text-sm mt-2">
          Free online plagiarism detection tool - Check unlimited text
        </p>
      </div>
    </footer>
  );
};

export default Footer;
