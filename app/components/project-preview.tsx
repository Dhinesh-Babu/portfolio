import Link from 'next/link'

// Project data
const projects = [
  {
    title: 'Digieye - Android App for the Visually Impaired',
    date: 'December 2023',
    description: 'An Android application with Visual Question Answering for blind and low-vision users',
    technologies: ['Kotlin', 'Android', 'Python', 'FastAPI', 'Vertex AI'],
    slug: '#digieye'
  },
  {
    title: 'Multi-Tier Elastic Face Recognition Application',
    date: 'September 2023',
    description: 'A scalable cloud-based face recognition system built on AWS',
    technologies: ['AWS', 'Docker', 'Python', 'ResNet-34'],
    slug: '#multi-tier'
  },
  {
    title: 'Serverless Video Analysis Pipeline',
    date: 'November 2023',
    description: 'An event-driven pipeline using AWS Lambda and containers for video processing',
    technologies: ['AWS Lambda', 'S3', 'FFmpeg', 'Python'],
    slug: '#serverless'
  }
]

export function ProjectPreviews() {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => (
        <Link
          key={index}
          href={`/projects${project.slug}`}
          className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded flex flex-col gap-1 p-4"
        >
          <div className="flex flex-col justify-between md:flex-row">
            <h3 className="text-base font-semibold tracking-tighter text-neutral-800 dark:text-neutral-200">
              {project.title}
            </h3>

            <time className="text-xs text-neutral-600 dark:text-neutral-400">
              {project.date}
            </time>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="px-2 py-0.5 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-md">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-md">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
} 