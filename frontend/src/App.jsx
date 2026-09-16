import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(d => setData(d))
      .catch(() => {
        setData({
          name: "Arshia Ghandi",
          title: "Java Backend Engineer",
          bio: "Java Backend Engineer with 1 year of experience in the financial sector and multiple production-ready open-source projects. Built a distributed backend spanning 12 independently deployable microservices, orchestrated through Apache Kafka and the Saga pattern. Hands-on with Spring Boot, Spring WebFlux, R2DBC, PostgreSQL, Redis, and Docker.",
          email: "arshiaghandi19@gmail.com",
          phone: "+98 996 589 8623",
          location: "Tehran, Iran",
          linkedin: "https://linkedin.com/in/arshiya-ghandi",
          github: "https://github.com/arshiyaghandi",
          skills: [
            { name: "Java 21", category: "language" },
            { name: "Spring Boot", category: "framework" },
            { name: "WebFlux", category: "framework" },
            { name: "R2DBC", category: "framework" },
            { name: "PostgreSQL", category: "database" },
            { name: "Redis", category: "database" },
            { name: "Apache Kafka", category: "messaging" },
            { name: "Microservices", category: "architecture" },
            { name: "Docker", category: "devops" },
            { name: "Saga Pattern", category: "architecture" },
            { name: "Clean Architecture", category: "architecture" },
            { name: "Git", category: "devops" },
            { name: "REST API", category: "framework" },
            { name: "JUnit", category: "testing" }
          ],
          experiences: [{
            title: "Java Backend Developer & Monitoring Expert",
            company: "Tejarat Bank Brokerage Co.",
            location: "Tehran, Iran",
            date: "Jul 2025 – Jun 2026",
            description: [
              "Ensured uptime of mission-critical trading systems by monitoring JVM metrics and triaging production incidents, reducing mean time to recovery during live failures.",
              "Diagnosed performance bottlenecks across a reactive codebase (Spring WebFlux, R2DBC) and owned the Maven build pipeline, coordinating artifact releases with the DevOps team."
            ]
          }],
          projects: [
            { title: "NexusCommerce", subtitle: "Distributed E-Commerce Backend", tech: ["Java 21", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Docker"], description: "Designed a 12-service microservices backend with centralized JWT auth. Implemented a full order lifecycle via Saga Choreography over Kafka. Delivered real-time order status updates to clients via WebSocket.", url: "https://github.com/arshiyaghandi" },
            { title: "FlowForge", subtitle: "Developer Operating System", tech: ["Java 21", "Spring Boot 3.3", "React 18", "PostgreSQL"], description: "Architected backend using Clean Architecture with JWT auth, integrated GitHub GraphQL API. Released as an open-source Windows app, earning 1,100+ LinkedIn followers.", url: "https://github.com/arshiyaghandi" },
            { title: "CoreBank", subtitle: "Core Banking System", tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"], description: "Built banking APIs with full @Transactional safety, optimistic locking, and database-level constraints to prevent double-spending under concurrent load.", url: "https://github.com/arshiyaghandi" },
            { title: "Vigora", subtitle: "Sports Facility Booking Platform", tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL"], description: "Decomposed booking flow into independent microservices via Kafka topics; implemented time-slot conflict detection to prevent double-bookings.", url: "https://github.com/arshiyaghandi" }
          ]
        })
      })
  }, [])

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0c0c0c]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-neutral-500 text-sm"
        >
          Loading...
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-[#0c0c0c] min-h-screen">
      <Navbar />
      <main>
        <Hero data={data} />
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Skills skills={data.skills} />
          <Experience experiences={data.experiences} />
          <Projects projects={data.projects} />
        </div>
      </main>
      <Footer data={data} />
    </div>
  )
}

export default App
