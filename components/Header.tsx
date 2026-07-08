import Link from 'next/link';

const links = [
  ['Swift', '/swift'],
  ['SwiftUI', '/swiftui'],
  ['Interview', '/interview'],
  ['LeetCode', '/leetcode'],
  ['Blog', '/blog'],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-slate-950">SwiftCareerHub</Link>
        <nav className="hidden gap-6 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-slate-700 hover:text-orange-600">{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
