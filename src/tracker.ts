import { Application, ApplicationStatus } from "./types";

// A skeleton for the tracker. Implement these however you like.
// You can change the method signatures, add methods, or restructure it.
export class ApplicationTracker {
  private applications: Application[] = [];

  constructor(initial: Application[] = []) {
    this.applications = [...initial];
  }

  addApplication(application: Application): void {
    // TODO
    throw new Error("Not implemented");
  }

  getApplications(): Application[] {
    return [...this.applications];
  }

  updateStatus(id: string, status: ApplicationStatus): void {
    // TODO
    throw new Error("Not implemented");
  }

  // TODO: your ideas here
}
