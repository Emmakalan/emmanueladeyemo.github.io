export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500">
          © {year} Emmanuel Adeyemo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
