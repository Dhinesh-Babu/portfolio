import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  const allPosts = getBlogPosts()

  return (
    <div className="flex flex-col gap-4">
      {allPosts
        .sort((a, b) => {
          const dateA = a.metadata.publishedAt || '';
          const dateB = b.metadata.publishedAt || '';
          
          if (new Date(dateA) > new Date(dateB)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded flex flex-col gap-1 p-4"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col justify-between md:flex-row">
              <h3 className="text-base font-semibold tracking-tighter text-neutral-800 dark:text-neutral-200">
                {post.metadata.title}
              </h3>

              <time className="text-xs text-neutral-600 dark:text-neutral-400">
                {post.metadata.publishedAt}
              </time>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {post.metadata.summary}
            </p>
          </Link>
        ))}
    </div>
  )
}
