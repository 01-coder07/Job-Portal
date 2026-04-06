🧭 InsiderJobs — Job Portal Web Application

A fully responsive job portal web application built with React.js and Tailwind CSS, enabling candidates to browse, search, and filter job listings — and recruiters to post and manage opportunities.

🔗 Live Demo: https://job-portal-sage-pi.vercel.app

📸 Preview
Home Page
Job Listings
Job Detail
Hero + Search
Filter by Category & Location
Full JD + Related Jobs
✨ Features
👤 Candidate Side
🔍 Hero Section with role/skill/company search and city/remote search
📊 Live Stats — 12K+ Live Roles, 6K+ Hiring Teams, 25K+ Active Candidates
💼 Latest Jobs — paginated job cards from top companies
🧠 Filter by Category
Programming
Data Science
Designing
Networking
Management
Marketing
Cybersecurity
📍 Filter by Location
Bangalore, Hyderabad, Mumbai, Chennai
Washington, California, New York
📄 Job Detail Page
Full job description
Key responsibilities
Required skills
CTC
Experience level
“More Jobs from this Company”
🚀 Apply Now functionality
🏢 Recruiter Side
🔐 Recruiter Login (separate entry point)
📊 Recruiter Dashboard (/dashboard)
📝 Post and manage job listings
🔐 Authentication
Powered by Clerk
Supports:
Google OAuth
Email/Username login
Secure, session-based authentication
Protected recruiter routes
🛠️ Tech Stack
Technology	Usage
React.js	Frontend UI (Hooks & Components)
Tailwind CSS	Styling (Responsive design)
React Router	Client-side routing
Clerk	Authentication
JSON	Mock job data
Vercel	Deployment & CI/CD
🚀 Getting Started
📌 Prerequisites
Node.js v18+
npm or yarn
⚙️ Installation
# Clone the repository
git clone https://github.com/01-coder07/Job-Portal.git

# Navigate to client
cd Job-Portal/client

# Install dependencies
npm install
🔑 Environment Variables

Create a .env file inside the client/ directory:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

👉 Get your key from: https://clerk.com
 → Create Application → API Keys

▶️ Run Locally
npm run dev

App runs at:
👉 http://localhost:5173

📁 Project Structure
Job-Portal/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-level pages
│   │   └── data/           # JSON job data
│   ├── .env                # Environment variables
│   └── vite.config.js
└── server/                 # Backend (in progress)
🌐 Deployment
Frontend deployed on Vercel
Root directory set to client/
Environment variables configured in Vercel dashboard
Auto-deploy on every push to main
🔮 Upcoming Features
🔗 MongoDB integration
🛠️ Recruiter job posting via REST API
📊 Candidate application tracking
🔐 JWT-based role management
👨‍💻 Author

Harshit Pant

🐙 GitHub: https://github.com/01-coder07
💼 LinkedIn: https://linkedin.com/in/harshit-pant-913690296
💻 LeetCode: https://leetcode.com/u/codingkabaap
⭐ Support

If you like this project:
👉 Give it a ⭐ on GitHub
👉 Share it with others
