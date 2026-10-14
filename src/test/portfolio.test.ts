import { describe, expect, it } from "vitest";
import { about, experience, profile, projects, skillGroups } from "@/data/portfolio";

describe("Verified portfolio facts", () => {
  it("uses exact public contacts without a phone number", () => {
    expect(profile.email).toBe("kyhoangg@berkeley.edu");
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/ky-m-hoang");
    expect(profile.github).toBe("https://github.com/DeathSubtracter");
    expect(profile).not.toHaveProperty("phone");
  });
  it("keeps supplied projects in order", () => {
    expect(projects.map(p => p.title)).toEqual(["Nestwatch", "Journal RAG", "Build Your Own World", "QuickCapture"]);
  });
  it("uses Summer 2026 for Journal RAG without the older count", () => {
    const journal = projects.find(p => p.id === "journal-rag");
    expect(journal?.date).toBe("Summer 2026");
    expect(JSON.stringify(journal)).not.toContain("1,000");
  });
  it("qualifies all Nestwatch forecasting descriptions with synthetic data", () => {
    const project = projects.find(p => p.id === "nestwatch");
    const forecasts = [project?.description, ...(project?.highlights ?? [])].filter((text): text is string => Boolean(text?.match(/forecast/i)));
    expect(forecasts.length).toBe(3);
    forecasts.forEach(text => expect(text).toContain("synthetic data"));
    expect(project?.qualification).toContain("no clinical validation or real-patient deployment");
  });
  it("attributes the award to the project", () => {
    expect(projects[0]?.award).toBe("Best Human Impact Award · UC Berkeley Innovation Intelligence Hackathon");
  });
  it("preserves collaborative academic context", () => {
    const world = projects.find(p => p.id === "build-your-own-world");
    expect(world?.category).toBe("Collaborative coursework · CS 61BL");
    expect(world?.description).toContain("co-developed with a partner for CS 61BL");
  });
  it("does not invent project destinations or statuses", () => {
    projects.forEach(project => {
      expect(project.github).toBe(""); expect(project.demo).toBe("");
      expect(project).not.toHaveProperty("status");
    });
  });
  it("retains the supplied operations accomplishment without older claims", () => {
    const operations = experience.find(e => e.id === "apple-operations");
    expect(operations?.role).toBe("Operations Specialist");
    expect(operations?.dates).toBe("January 2026–Present");
    expect(operations?.description).toBe("Processed 2,766 internal support requests—the team’s highest quarterly volume—while maintaining 99% on-time performance against a two-minute service target.");
  });
  it("keeps CodeAdvantage status unspecified", () => {
    const teaching = experience.find(e => e.id === "codeadvantage");
    expect(teaching?.dates).toBe(""); expect(teaching?.description).not.toMatch(/current|present/i);
  });
  it("uses exactly the supported skills", () => {
    expect(skillGroups.map(g => [...g.items])).toEqual([
      ["Java", "Python", "TypeScript", "Swift", "SQL", "HTML/CSS"],
      ["React", "FastAPI", "Flask", "SwiftUI", "scikit-learn", "NumPy"],
      ["Git", "GitHub Actions", "SQLite", "ChromaDB", "pytest", "JUnit", "Xcode"],
    ]);
  });
  it("preserves education and recognition facts", () => {
    expect(profile.university).toBe("University of California, Berkeley");
    expect(profile.degree).toBe("Bachelor of Arts in Data Science");
    expect(profile.graduation).toBe("Expected May 2028");
    expect(about.facts.find(f => f.label === "Recognition")?.detail).toBe("Boy Scouts of America · 2019");
  });
  it("leaves the unavailable resume destination empty", () => { expect(profile.resume).toBe(""); });
});
