import frameworks from "../frameworks.mjs";

const mainPackageNames = frameworks.map((f) => f.mainPackageName);

async function getPackageDownloads(packageName) {
  try {
    const response = await fetch(
      `https://api.npmjs.org/downloads/point/last-month/${packageName}`
    );
    const data = await response.json();
    return data.downloads;
  } catch (error) {
    console.error(
      `Failed to fetch download stats for package ${packageName}: `,
      error
    );
    return null;
  }
}

async function sortPackagesByDownloads(packages) {
  try {
    const downloadStats = await Promise.all(packages.map(getPackageDownloads));

    return packages
      .map((packageName, index) => ({
        packageName,
        downloads: downloadStats[index] || 0,
      }))
      .sort((a, b) => b.downloads - a.downloads); // sort in descending order
  } catch (error) {
    console.error(`Failed to sort packages: `, error);
    return null;
  }
}

sortPackagesByDownloads(mainPackageNames).then(console.log);
