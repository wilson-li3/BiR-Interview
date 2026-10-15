// Basic definitions for the application tracker.
// These are a starting point: add, remove, or change fields as you see fit.

export type Role =
  | "Developer"
  | "Designer"
  | "Project Lead"
  | "Product Manager";

// e.g. "Computer Science", "Software Engineering", "Systems Design Engineering"
export type Program = string;

// 1A, 1B, 2A, ... 4B
export type Term = `${1 | 2 | 3 | 4}${"A" | "B"}`;

export type ApplicationStatus =
  | "applied"
  | "interviewing"
  | "accepted"
  | "rejected";

export interface Applicant {
  name: string;
  email: string;
  program: Program;
  term: Term;
}

export interface Application {
  id: string;
  applicant: Applicant;
  role: Role;
  status: ApplicationStatus;
  submittedAt: Date;
  // TODO: anything else? (e.g. notes, resume link, why Blueprint?)
}
