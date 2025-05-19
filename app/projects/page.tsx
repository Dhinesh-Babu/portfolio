export const metadata = {
  title: 'Projects',
  description: 'Dhinesh Babu Ramachandran - Featured Projects',
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      
      {/* Project 1: Digieye App */}
      <div id="digieye" className="mb-12 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Digieye - Android App for the Visually Impaired</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-1">December 2023</p>
        <p className="mb-4">An Android application with Visual Question Answering for blind and low-vision users</p>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Overview</h3>
          <p>Designed a Visual Question Answering (VQA) system for blind and low-vision users, building an Android application integrated with Vertex AI APIs and NLP for seamless image-based queries.</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Kotlin</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Android Studio</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Python</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">FastAPI</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Vertex AI</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">GCP</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Impact</h3>
          <p>Boosted accessibility by achieving 90% average response accuracy in real-world testing, offering immediate interpretation of images in everyday scenarios for visually impaired users.</p>
        </div>
      </div>
      
      {/* Project 2: Multi-Tier Elastic Face Recognition */}
      <div id="multi-tier" className="mb-12 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Multi-Tier Elastic Face Recognition Application</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-1">September 2023</p>
        <p className="mb-4">A scalable cloud-based face recognition system built on AWS</p>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Overview</h3>
          <p>Architected a three‑tier system (Web, App, Data) on EC2 with custom auto‑scaling: dynamically scaled App Tier from 0→20 instances based on SQS queue length, processing 100 concurrent requests in &lt;80s.</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">AWS</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">EC2</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Auto Scaling</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">SQS</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">S3</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Docker</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Python</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">ResNet-34</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Performance Optimization</h3>
          <p>Pre-baked a custom AMI with pre‑loaded ResNet‑34 model to reduce cold‑start time by 60%, ensuring near‑instantaneous processing during scale‑out events.</p>
        </div>
      </div>
      
      {/* Project 3: Serverless Video Analysis */}
      <div id="serverless" className="mb-12 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Serverless Video Analysis Pipeline</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-1">November 2023</p>
        <p className="mb-4">An event-driven pipeline using AWS Lambda and containers for video processing</p>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Overview</h3>
          <p>Designed an event‑driven pipeline: S3 upload triggers Lambda for frame extraction (via FFmpeg) and subsequent face‑recognition function running in a container image.</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">AWS Lambda</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">S3</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">FFmpeg</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">OpenCV</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Container Images</span>
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-sm">Python</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Optimization Strategies</h3>
          <p>Optimized Lambda container size (&lt;1 GB) by using `python:3.8‑slim`, externalizing model weights to S3, and caching—reducing cold starts by 45%.</p>
        </div>
      </div>
    </section>
  )
} 