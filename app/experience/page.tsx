export default function ExperiencePage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Professional Experience</h1>
      
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h2 className="text-xl font-medium">Affinsys AI</h2>
          <p className="text-neutral-600 dark:text-neutral-400">Dec 2019 – Mar 2023</p>
        </div>
        <h3 className="text-lg mb-4">Software Engineer, DevOps</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Secure CI/CD & Containerization:</strong> Engineered automated CI/CD pipelines (Jenkins, GitHub Actions, Python) 
            with integrated security scans (SAST, dependency); built hardened multi-stage/distroless Docker images, 
            cutting release cycles by 80% (5 days to 1) and enhancing application security.
          </li>
          <li>
            <strong>Microservice Architecture on Kubernetes:</strong> Designed and deployed scalable microservices on Kubernetes 
            (Azure, EKS, AWS); authored K8s YAMLs and utilized Helm for streamlined deployments, achieving 40% faster 
            time-to-market for new application services.
          </li>
          <li>
            <strong>Cloud Automation & Application Optimization:</strong> Developed Python ETL scripts for automated cloud data 
            transfers (cronjobs) and utilized Terraform (IaC) for provisioning application infrastructure; improved 
            application response times by 25% through performance testing and bottleneck resolution.
          </li>
          <li>
            <strong>System Resilience & Advanced Troubleshooting:</strong> Engineered PostgreSQL high-availability (master-slave) 
            solutions and expertly resolved complex production issues, including reverse proxy and application-level bugs, 
            minimizing downtime by 80%.
          </li>
          <li>
            <strong>Observability Platform Engineering:</strong> Engineered and deployed a centralized observability stack 
            (Prometheus, Loki, Grafana), enabling proactive issue detection and 40% faster Mean Time To Resolution (MTTR) 
            for development team debugging cycles.
          </li>
        </ul>
      </div>
      
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h2 className="text-xl font-medium">Tripro Technologies</h2>
          <p className="text-neutral-600 dark:text-neutral-400">May 2018 – Jun 2018</p>
        </div>
        <h3 className="text-lg mb-4">Software Developer Intern</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Interpreted technical and architectural design elements, understanding functional specifications from clients.
          </li>
          <li>
            Participated in creating a new website and trading portal for a client using HTML and JavaScript.
          </li>
          <li>
            Contributed to creating a script-based SKU product categorization functionality using Python.
          </li>
          <li>
            Built features for an Admin app using JavaScript, MySQL, and Python.
          </li>
        </ul>
      </div>
      
      <div className="mb-12">
        <h2 className="text-xl font-medium mb-4">Certifications</h2>
        <div className="mb-2">
          <p className="font-medium">Certified Kubernetes Administrator (CKA)</p>
          <a 
            href="https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/89db8af7-4d09-479c-be37-e573de75fa11-dhinesh-babu-ramachandran-1b7f788b-1c59-4298-b1a2-87b646ceeed6-certificate.pdf"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  )
} 