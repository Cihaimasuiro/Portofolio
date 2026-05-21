// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] p-4 mt-8 text-center shadow-md">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
