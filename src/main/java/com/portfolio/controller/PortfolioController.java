package com.portfolio.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "*")
public class PortfolioController {

    @GetMapping("/api/portfolio")
    public Map<String, Object> getPortfolio() {
        Map<String, Object> data = new LinkedHashMap<>();
        
        data.put("name", "Arshia Ghandi");
        data.put("title", "Java Backend Engineer");
        data.put("bio", "Java Backend Engineer with 1 year of experience in the financial sector and multiple production-ready open-source projects. Built a distributed backend spanning 12 independently deployable microservices, orchestrated through Apache Kafka and the Saga pattern. Hands-on with Spring Boot, Spring WebFlux, R2DBC, PostgreSQL, Redis, and Docker.");
        data.put("email", "arshiaghandi19@gmail.com");
        data.put("phone", "+98 996 589 8623");
        data.put("location", "Tehran, Iran");
        data.put("linkedin", "https://linkedin.com/in/arshiya-ghandi");
        data.put("github", "https://github.com/arshiyaghandi");

        data.put("skills", List.of(
            Map.of("name", "Java 21", "category", "language"),
            Map.of("name", "Spring Boot", "category", "framework"),
            Map.of("name", "WebFlux", "category", "framework"),
            Map.of("name", "R2DBC", "category", "framework"),
            Map.of("name", "PostgreSQL", "category", "database"),
            Map.of("name", "Redis", "category", "database"),
            Map.of("name", "Apache Kafka", "category", "messaging"),
            Map.of("name", "Microservices", "category", "architecture"),
            Map.of("name", "Docker", "category", "devops"),
            Map.of("name", "Saga Pattern", "category", "architecture"),
            Map.of("name", "Clean Architecture", "category", "architecture"),
            Map.of("name", "Git", "category", "devops"),
            Map.of("name", "REST API", "category", "framework"),
            Map.of("name", "JUnit", "category", "testing")
        ));

        data.put("experiences", List.of(
            Map.of(
                "title", "Java Backend Developer & Monitoring Expert",
                "company", "Tejarat Bank Brokerage Co.",
                "location", "Tehran, Iran",
                "date", "Jul 2025 – Jun 2026",
                "description", List.of(
                    "Ensured uptime of mission-critical trading systems by monitoring JVM metrics and triaging production incidents, reducing mean time to recovery during live failures.",
                    "Diagnosed performance bottlenecks across a reactive codebase (Spring WebFlux, R2DBC) and owned the Maven build pipeline, coordinating artifact releases with the DevOps team."
                )
            )
        ));

        data.put("projects", List.of(
            Map.of("title", "NexusCommerce",
                   "subtitle", "Distributed E-Commerce Backend",
                   "tech", List.of("Java 21", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Docker"),
                   "description", "Designed a 12-service microservices backend with centralized JWT auth. Implemented a full order lifecycle via Saga Choreography over Kafka. Delivered real-time order status updates to clients via WebSocket.",
                   "url", "https://github.com/arshiyaghandi"),
            Map.of("title", "FlowForge",
                   "subtitle", "Developer Operating System",
                   "tech", List.of("Java 21", "Spring Boot 3.3", "React 18", "PostgreSQL"),
                   "description", "Architected backend using Clean Architecture with JWT auth, integrated GitHub GraphQL API. Released as an open-source Windows app, earning 1,100+ LinkedIn followers.",
                   "url", "https://github.com/arshiyaghandi"),
            Map.of("title", "CoreBank",
                   "subtitle", "Core Banking System",
                   "tech", List.of("Java", "Spring Boot", "PostgreSQL", "Docker"),
                   "description", "Built banking APIs with full @Transactional safety, optimistic locking, and database-level constraints to prevent double-spending under concurrent load.",
                   "url", "https://github.com/arshiyaghandi"),
            Map.of("title", "Vigora",
                   "subtitle", "Sports Facility Booking Platform",
                   "tech", List.of("Java", "Spring Boot", "Kafka", "PostgreSQL"),
                   "description", "Decomposed booking flow into independent microservices via Kafka topics; implemented time-slot conflict detection to prevent double-bookings.",
                   "url", "https://github.com/arshiyaghandi")
        ));

        return data;
    }
}
