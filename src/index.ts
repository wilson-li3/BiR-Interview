import { ApplicationTracker } from "./tracker";
import { sampleApplications } from "./data";

const tracker = new ApplicationTracker(sampleApplications);

// Try out your tracker here, or replace this with a CLI, server, UI, etc.
console.log("Blueprint Applications\n");
for (const app of tracker.getApplications()) {
  const { name, program, term } = app.applicant;
  console.log(`[${app.status}] ${name} (${program}, ${term}) applied for ${app.role}`);
}
