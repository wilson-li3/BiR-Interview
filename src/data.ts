import { Application } from "./types";

// Some sample data to get you started.
export const sampleApplications: Application[] = [
  {
    id: "1",
    applicant: {
      name: "Alex Chen",
      email: "a.chen@uwaterloo.ca",
      program: "Computer Science",
      term: "2B",
    },
    role: "Developer",
    status: "applied",
    submittedAt: new Date("2026-09-10"),
  },
  {
    id: "2",
    applicant: {
      name: "Priya Patel",
      email: "p.patel@uwaterloo.ca",
      program: "Systems Design Engineering",
      term: "3A",
    },
    role: "Designer",
    status: "interviewing",
    submittedAt: new Date("2026-09-12"),
  },
  {
    id: "3",
    applicant: {
      name: "Jordan Smith",
      email: "j.smith@uwaterloo.ca",
      program: "Software Engineering",
      term: "4A",
    },
    role: "Project Lead",
    status: "accepted",
    submittedAt: new Date("2026-09-08"),
  },
];
