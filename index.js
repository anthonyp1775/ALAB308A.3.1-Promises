// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

const dbs = {
  db1: db1,
  db2: db2,
  db3: db3
};

// Promise-chaining (.then) version.
export function getUserDataThen(id) {
  return central(id)
    .then((dbName) => Promise.all([dbs[dbName](id), vault(id)]))
    .then(([dbData, vaultData]) => ({
      id,
      ...vaultData,
      ...dbData
    }));
}

// async/await version.
export async function getUserDataAsync(id) {
  const dbName = await central(id);
  const [dbData, vaultData] = await Promise.all([dbs[dbName](id), vault(id)]);

  return {
    id,
    ...vaultData,
    ...dbData
  };
}

export const getUserData = getUserDataAsync;



