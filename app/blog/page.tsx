import { getBlogPosts } from './utils'
import Link from 'next/link'

export const metadata = {
  title: 'Projects',
  description: 'Dhinesh Babu Ramachandran - Featured Projects',
}

export default async function BlogPage() {
  const allPosts = await getBlogPosts()

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      {allPosts
        .sort((a, b) => {
          const dateA = a.metadata.date || '';
          const dateB = b.metadata.date || '';
          
          if (new Date(dateA) > new Date(dateB)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-8"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-xl font-semibold tracking-tight">{post.metadata.title}</p>
              <p className="text-neutral-600 dark:text-neutral-400">{post.metadata.description || ''}</p>
              {post.metadata.date && (
                <time className="text-sm text-neutral-600 dark:text-neutral-400">
                  {new Date(post.metadata.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
            </div>
          </Link>
        ))}
    </section>
  )
}
