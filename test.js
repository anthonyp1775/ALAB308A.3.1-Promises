import { getUserDataThen, getUserDataAsync } from "./index.js";

const validIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const invalidIds = [0, -1, 11, 100];
const invalidTypes = ["3", true, false, null, undefined, NaN, [], {}];

async function runCase(label, fn, id) {
  const start = Date.now();
  try {
    const result = await fn(id);
    const elapsed = Date.now() - start;
    console.log(`${label} id=${JSON.stringify(id)} -> OK in ${elapsed}ms | name=${result.name}, username=${result.username}`);
  } catch (err) {
    const elapsed = Date.now() - start;
    console.log(`${label} id=${JSON.stringify(id)} -> ERROR in ${elapsed}ms | ${err.message}`);
  }
}

async function main() {
  console.log("=== getUserDataThen: valid ids ===");
  for (const id of validIds) await runCase("then", getUserDataThen, id);

  console.log("\n=== getUserDataThen: invalid ids (out of range) ===");
  for (const id of invalidIds) await runCase("then", getUserDataThen, id);

  console.log("\n=== getUserDataThen: invalid types ===");
  for (const id of invalidTypes) await runCase("then", getUserDataThen, id);

  console.log("\n=== getUserDataAsync: valid ids ===");
  for (const id of validIds) await runCase("async", getUserDataAsync, id);

  console.log("\n=== getUserDataAsync: invalid ids (out of range) ===");
  for (const id of invalidIds) await runCase("async", getUserDataAsync, id);

  console.log("\n=== getUserDataAsync: invalid types ===");
  for (const id of invalidTypes) await runCase("async", getUserDataAsync, id);
}

main();
