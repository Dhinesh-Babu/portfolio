# My Professional DataBank - Dhinesh Babu Ramachandran

This document contains a comprehensive dump of my professional experience, education, projects, and skills for an LLM to process and query.

---

## 1. Personal Information
- **Name:** Dhinesh Babu Ramachandran
- **Current Location (for Masters):** Tempe, AZ 85288
- **Phone:** +1 (623)-274-7044
- **Email:** dhinesh.rbabu@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/dhinesh-rbabu
- **GitHub:** https://github.com/Dhinesh-Babu

---

## 2. Education

### Arizona State University
- **Degree:** Master of Science, Computer Science
- **Dates:** August 2023 – May 2025 (Graduated : May 2025)
- **Location:** Tempe, AZ
- **GPA:** 3.90 / 4.00
- **Relevant Coursework:** Cloud Computing, Software Security, Data Mining, Software Verification Validation & Testing

### Vellore Institute of Technology
- **Degree:** B.Tech, Computer Science Engineering
- **Dates:** July 2016 – May 2020
- **Location:** Vellore, India
- **CGPA:** 8.7 / 10.0

---

## 3. Experience

### Affinsys AI
- **Official Title:** DevOps Engineer
- **Resume Title (for SDE roles):** Software Engineer, DevOps
- **Dates:** December 2019 – March 2023 (Combined Intern + Full-time)
    - *Full-time DevOps Engineer: June 2020 – March 2023*
    - *DevOps Intern: December 2019 - June 2020*
- **Location:** Bangalore, KA (Primarily Remote)

#### Key Achievements & Responsibilities (SDE-Focused Resume Version):
- **Secure CI/CD & Containerization:** Engineered automated CI/CD pipelines (Jenkins, GitHub Actions, Python) with integrated security scans (SAST, dependency); built hardened multi-stage/distroless Docker images, cutting release cycles by 80% (5 days to 1) and enhancing application security.
- **Microservice Architecture on Kubernetes (CKA):** Designed and deployed scalable microservices on Kubernetes (Azure, EKS, AWS); authored K8s YAMLs and utilized Helm for streamlined deployments, achieving 40% faster time-to-market for new application services.
- **Cloud Automation & Application Optimization:** Developed Python ETL scripts for automated cloud data transfers (cronjobs) and utilized Terraform (IaC) for provisioning application infrastructure; improved application response times by 25% through performance testing and bottleneck resolution.
- **System Resilience & Advanced Troubleshooting:** Engineered PostgreSQL high-availability (master-slave) solutions and expertly resolved complex production issues, including reverse proxy and application-level bugs, minimizing downtime by 80%.
- **Technical Initiative & Solution Design:** Spearheaded development of a Bash script for automated SSH key management, enhancing security and team efficiency; translated complex client security requirements (e.g., from financial institutions) into actionable software development tasks and system designs.
- **Observability Platform Engineering:** Engineered and deployed a centralized observability stack (Prometheus, Loki, Grafana), enabling proactive issue detection and 40% faster Mean Time To Resolution (MTTR) for development team debugging cycles.
- **Team Leadership & Project Delivery (from earlier comprehensive list):** Led a cross-functional DevOps team (4 engineers) using Agile methodologies for sprint planning; successfully managed 10+ global client projects, ensuring 90\%+ on-time delivery and 95\% client satisfaction through proactive communication and stakeholder engagement.

#### Detailed Day-to-Day Tasks & Additional Context:
- **Containerization:** Built, scanned, optimized, and secured Docker containers (Distroless, non-root). Wrote docker-compose files and Docker images extensively (multi-stage builds).
- **Kubernetes Management:** Created, managed, upgraded various client clusters (in-house, Azure, EKS, some AWS). Involved EKS gateway. Performed zero-downtime upgrades. Authored Kubernetes YAML files.
- **Networking & Security:**
    - Setup Nginx, HTTPD, and WAF firewalls with CRS ruleset, fine-tuning for the organization. Main person for reverse proxy issues and debugging.
    - Handled client VPN setups.
    - Processed security documents from banks, dividing tasks for frontend/backend/infra.
- **Automation:**
    - Python scripts for data transfer cronjobs (cloud to client cloud).
    - Shell-based SSH key management script: managed developer SSH keys, authorized access, monthly resets, offboarding.
- **CI/CD Pipelines:** Wrote pipelines in Jenkins, GitHub Actions, Azure DevOps (basic image builds, advanced multi-repo dependencies with integrated security scans).
- **Monitoring & Observability:** Setup and used Loki, Grafana, Prometheus.
- **Client Interaction & Solutioning:**
    - Countless client calls for setting up cloud infrastructure and designing solutions for products.
    - Main point of contact for analytics platform deployment across all deployments (and targeted deployments).
    - Created diagrams and PPTs for client and project clarity (some still used in company sales pitches).
- **Infrastructure Management (IaC & Cost):** Used Terraform. Actively performed weekly checks for unwanted standard resources and ensured deletion.
- **Troubleshooting:** Spent significant time troubleshooting causes of issues.
- **Database HA:** Dug into High Availability; setup basic PostgreSQL HA (master-slave).
- **Development Environments:** Handled development and User Acceptance Testing (UAT) environments (as an intern).
- **VAPT & Security Advocacy:** Coordinated VAPT scans and reports. Advocated for addressing security vulnerabilities.
- **Process Improvement:** Advocated for and created workflows in JIRA for proper change request management.
- **Overall Role Perception:** Was the go-to DevOps person with a focus on Security, Console, and Analytics deployment issues.

### Tripro Technologies (Software Developer Intern)
- **Dates:** May 2018 – June 2018
- **Location:** Chennai, India
- **Responsibilities:**
    - Understanding functional specifications from clients leading up to design specifications.
    - Interpreting technical and architectural design elements.
    - Participated in creating a new website and trading portal for a client – with HTML and JavaScript.
    - Contributed to creating a script-based SKU product categorization functionality (Python).
    - Built features for an Admin app using JavaScript, MySQL, Python.

---

## 4. Projects

### ASU Projects (Masters)

#### Digieye (Android App for the Visually Impaired)
- **Technologies:** Kotlin, Android Studio, Python, FastAPI, Vertex AI, GCP
- **Description:**
    - Designed a Visual Question Answering (VQA) system for blind and low-vision users, building an Android application integrated with Vertex AI APIs and NLP for seamless image-based queries.
    - Application uses camera features to click/save a picture, makes a POST request to a FastAPI server (connected to Vertex AI backend). FastAPI sends compressed photo to Vertex, gets answer, replies to phone. Phone uses text-to-speech.
    - Boosted accessibility by achieving 90% average response accuracy in real-world testing, offering immediate interpretation of images in everyday scenarios.

#### Reconstructing Video Sequences from Randomized Frames
- **Technologies:** Python, OpenCV, NumPy, SciPy, SIFT, ORB, Hierarchical Clustering, Travelling Salesman Solver
- **Description:**
    - Developed a preprocessing pipeline to downsample and grayscale shuffled video frames, reducing computational load while preserving feature integrity.
    - Extracted and matched keypoints across frames using ORB and SIFT detectors, computed L1/L2 distances, and built a transition cost matrix for all frame pairs.
    - Modeled frame ordering as a variant of the Travelling Salesman Problem and implemented a greedy TSP solver, delivering the lowest average sequential error versus hierarchical clustering and nearest‑neighbor heuristics.
    - Designed a custom “Sequential Error” metric to evaluate continuity of correctly ordered sub‑sequences, improving sensitivity to burst‑order accuracy compared to standard logistic error measures.

#### Multi‑Tier Elastic Face Recognition Application
- **Technologies:** AWS (EC2, Auto Scaling, Elastic IP, SQS, S3), Docker, Deep Learning, Python, ResNet-34
- **Description:**
    - Architected a three‑tier system (Web, App, Data) on EC2 with custom auto‑scaling: dynamically scaled App Tier from 0→20 instances based on SQS queue length, processing 100 concurrent requests in <80s.
    - Pre-baked a custom AMI with pre‑loaded ResNet‑34 model to reduce cold‑start time by 60%, ensuring near‑instantaneous processing during scale‑out events.
    - Leveraged S3 for durable storage of input/output, decoupling tiers and enabling fault‑tolerant message‑driven communication.

#### Serverless Video Analysis Pipeline
- **Technologies:** AWS Lambda, S3, FFmpeg, OpenCV, Container Images, Python
- **Description:**
    - Designed an event‑driven pipeline: S3 upload triggers Lambda for frame extraction (via FFmpeg) and subsequent face‑recognition function running in a container image.
    - Optimized Lambda container size (<1 GB) by using `python:3.8‑slim`, externalizing model weights to S3, and caching—reducing cold starts by 45%.
    - Achieved end‑to‑end processing of 100 videos in 300s with automatic scale‑to‑zero, eliminating server maintenance and minimizing cost.

### VIT Projects (B.Tech)

#### Distributed Attendance System
- **Technologies:** Python, Django (functional views), REST API, JWT, (Mobile app - unspecified tech, frontend HTML/JS for web)
- **Description:**
    - Created a Website and a mobile application for posting attendance utilizing a revolving QR code for security against proxy.
    - Engineered a cross-platform (web and mobile) attendance solution. Worked on Django backend, mainly QR code logic and classroom logic, REST APIs with JWT token auth.
    - Reduced manual errors by 80% and supported over 200 students and teachers during pilot tests, significantly improving convenience and data integrity.

#### Private Cloud Cluster Deployment
- **Technologies:** OpenStack, Docker, High-Performance Computing (Distributed Rubik's cube solver)
- **Description:**
    - Deployed a self-contained private cloud on OpenStack, launching a virtual cluster to run distributed Rubik’s Cube solvers within Docker containers.
    - Demonstrated a 40% reduction in deployment complexity and showcased scalable infrastructure management for intensive computing tasks.

#### Cracking RSA encryption using Lenstra Elliptical curve factorization (Academic Project)
- **Description:** Decoded a cipher encoded using RSA by finding out the private key by factoring N using Lenstra’s Elliptical curve factorization.

#### Renewable Energy Based Smart Irrigation System (Academic Project - Awarded Best Project)
- **Description:** Created a solar-powered automatic irrigation system that monitors temperature, soil moisture, and humidity, using fuzzy logic to irrigate plants.

#### Automated Path-Finding Robot (Academic Project)
- **Description:** Built and coded a 3-wheeled, automated path-finding robot with Arduino and echolocation sensor that also maps the path traversed.

---

## 5. Skills

### Programming Languages
- Python
- Java
- Kotlin
- C++
- Bash Scripting
- SQL
- JavaScript
- HTML
- (From older resume skills: Rust, Swift, Go, Scala, TypeScript, R, Perl, Haskell, Groovy, Julia, Dart - assess proficiency for inclusion if significant)

### Cloud Platforms & DevOps Tools
- **AWS:** EC2, S3, SQS, Lambda, EKS, Auto Scaling, Elastic IP
- **Azure:** Cloud Services, Kubernetes Service (AKS)
- **Containerization:** Docker (Image building, multi-stage, Distroless, optimization, Docker Compose)
- **Orchestration:** Kubernetes (CKA Certified - Cluster creation, management, upgrades, YAMLs, Helm)
- **CI/CD:** Jenkins, GitHub Actions, Azure DevOps
- **IaC:** Terraform
- **Monitoring/Observability:** Prometheus, Grafana, Loki
- **Web Servers/Reverse Proxies:** Nginx, HTTPD
- **Security Tools:** WAF (CRS ruleset), SAST tools, VAPT coordination
- **Version Control:** Git
- **Other Tools:** JMeter, Locust

### Frameworks & Libraries
- **Python:** Django, FastAPI, OpenCV, NumPy, SciPy, Pandas
- **Java:** Spring Boot (if applicable, or other relevant Java frameworks)
- **Mobile:** Android SDK
- **Frontend:** React (if applicable, or HTML/JS)
- (From older list: TensorFlow, PyTorch, jQuery, Bootstrap, Laravel, ASP.NET, Node.js, Electron, Symfony - assess proficiency/relevance)

### Databases
- MySQL
- PostgreSQL (including HA setup)
- S3 (Object Storage)

### Key Concepts & Methodologies
- Microservices Architecture
- System Design
- REST APIs
- Reverse Proxies & Networking Principles
- CI/CD Best Practices
- Agile Methodologies (Sprint planning, JIRA)
- Observability & Monitoring Strategies
- Infrastructure as Code (IaC) Principles
- Cloud Security Best Practices
- VAPT & Threat Modeling Awareness
- High Availability & Disaster Recovery Concepts
- Data Structures & Algorithms
- Machine Learning Principles
- Distributed Systems
- Linux System Administration
- Change Management

---

## 6. Certificates and Honors
- **Certification:** Certified Kubernetes Administrator (CKA)
    - **Reference/Link:** [https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/89db8af7-4d09-479c-be37-e573de75fa11-dhinesh-babu-ramachandran-1b7f788b-1c59-4298-b1a2-87b646ceeed6-certificate.pdf](https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/89db8af7-4d09-479c-be37-e573de75fa11-dhinesh-babu-ramachandran-1b7f788b-1c59-4298-b1a2-87b646ceeed6-certificate.pdf)
- **Honor:** Best Project in TARP class-wise for “Renewable Energy Based Smart Irrigation System” (VIT)

---