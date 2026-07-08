import Link from 'next/link';

const categories = [
  { title: 'Swift Tutorials', href: '/swift', text: 'Master optionals, closures, generics, protocols, ARC, and concurrency.' },
  { title: 'SwiftUI Guides', href: '/swiftui', text: 'Build modern interfaces with state, bindings, navigation, forms, and MVVM.' },
  { title: 'iOS Interview Prep', href: '/interview', text: 'Prepare for junior, intermediate, senior, and FAANG-style iOS interviews.' },
  { title: 'LeetCode in Swift', href: '/leetcode', text: 'Practice arrays, strings, trees, graphs, and dynamic programming using Swift.' },
];

const articles = [
  'Swift Optionals Explained with Real Examples',
  'Struct vs Class in Swift: When to Use Each',
  'MVVM Architecture in iOS Applications',
  'SwiftUI State vs Binding Explained',
  'Top 50 iOS Interview Questions',
  'LeetCode Two Sum Solution in Swift',
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-orange-50 to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">Swift • SwiftUI • iOS Careers</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            Learn Swift. Build better iOS apps. Prepare for interviews.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Practical tutorials, interview questions, coding patterns, and roadmaps for iOS developers who want to grow their career.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/swift" className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">Start Learning</Link>
            <Link href="/interview" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-white">Interview Prep</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-950">Explore Topics</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <Link key={item.href} href={item.href} className="card block hover:border-orange-300">
              <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold text-slate-950">Latest Articles</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {articles.map((title) => (
            <article key={title} className="card">
              <p className="text-xs font-semibold uppercase text-orange-600">Tutorial</p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-slate-600">A beginner-friendly guide with examples and interview notes.</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
