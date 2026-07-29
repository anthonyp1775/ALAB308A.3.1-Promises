// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

export function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  return central(id)
    .then((dbName) => Promise.all([dbs[dbName](id), vault(id)]))
    .then(([dbData, vaultData]) => ({
      id,
      ...vaultData,
      ...dbData
    }));
}



