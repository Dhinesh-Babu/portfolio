import Link from 'next/link'
import { ProjectPreviews } from './components/project-preview'

export default function Page() {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h1 className="text-3xl font-semibold tracking-tighter">
          Dhinesh Babu Ramachandran
        </h1>
        
        <a 
          href="/Dhinesh_Resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-4 md:mt-0"
          download
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          Download Resume
        </a>
      </div>
      
      <h2 className="mb-8 text-xl text-neutral-600 dark:text-neutral-400">
        Computer Science Graduate Student | Software Engineer
      </h2>
      
      <div className="mb-8">
        <h3 className="mb-2 text-lg font-medium">About Me</h3>
        <p className="mb-4">
          Software Engineer with expertise in DevOps, Cloud Technologies, and Microservice Architecture. 
          Currently pursuing a Master's in Computer Science at Arizona State University with a focus on 
          Cloud Computing and Software Security. Experienced in developing scalable solutions using 
          Kubernetes, AWS, and Azure.
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="mb-2 text-lg font-medium">Education</h3>
        <div className="mb-4">
          <p className="font-medium">Arizona State University</p>
          <p>Master of Science, Computer Science (GPA: 3.90/4.00)</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">August 2023 – Present (Expected Graduation: May 2025)</p>
        </div>
        <div>
          <p className="font-medium">Vellore Institute of Technology</p>
          <p>B.Tech, Computer Science Engineering (CGPA: 8.7/10.0)</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">July 2016 – May 2020</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="mb-2 text-lg font-medium">Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Python</span>
          {/* <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Java</span> */}
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Kubernetes (CKA)</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Docker</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">AWS</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Azure</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">CI/CD</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Terraform</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Django</span>
          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Microservices</span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-2 text-lg font-medium">Certifications</h3>
        <a 
          href="https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/89db8af7-4d09-479c-be37-e573de75fa11-dhinesh-babu-ramachandran-1b7f788b-1c59-4298-b1a2-87b646ceeed6-certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          <span className="font-medium">Certified Kubernetes Administrator (CKA)</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </a>
      </div>

      <div className="my-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Featured Projects</h3>
          <Link 
            href="/projects" 
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            View All →
          </Link>
        </div>
        <ProjectPreviews />
      </div>
    </section>
  )
}
