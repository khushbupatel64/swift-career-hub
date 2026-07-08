import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-bold text-slate-950">SwiftCareerHub</p>
          <p className="mt-2 text-sm text-slate-600">Practical Swift, SwiftUI, and iOS interview preparation.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
