import { execSync } from "child_process";
import fs from "fs/promises";
import path from "node:path";

async function main(): Promise<void> {
  try {
    // Check if there are any changes in the content directory
    const contentChanges = execSync("git diff --name-only HEAD~1 HEAD", {
      encoding: "utf8",
    })
      .split("\n")
      .filter((file) => file.startsWith("content/"));

    if (contentChanges.length === 0) {
      console.log(
        "No changes detected in content directory, skipping README update.",
      );
      return;
    }

    console.log(
      `Detected changes in content directory: ${contentChanges.join(", ")}`,
    );
    console.log("Running generateReadMeProgress script...");

    // Run the generateReadMeProgress script
    execSync("node scripts/generateReadMeProgress.ts", { stdio: "inherit" });

    // Check if README.md was modified
    const readmeChanges = execSync("git diff --name-only", { encoding: "utf8" })
      .split("\n")
      .filter((file) => file === "README.md");

    if (readmeChanges.length > 0) {
      console.log("README.md was updated, committing changes...");

      // Add and commit the README.md changes
      execSync("git add README.md", { stdio: "inherit" });
      execSync(
        'git commit -m "docs: update README progress based on content changes"',
        { stdio: "inherit" },
      );

      console.log("README progress update committed successfully!");
    } else {
      console.log("No changes to README.md were made.");
    }
  } catch (error) {
    console.error("Error in checkContentChanges script:", error);
    process.exit(1);
  }
}

main().catch(console.error);
