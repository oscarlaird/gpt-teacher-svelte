// firewriter.js
import { database } from "./firebaseApp.js";
import { ref, set, get, child } from "firebase/database";

// Write data to the database
function writeData(userId, name, email) {
  set(ref(database, "users/" + userId), {
    username: name,
    email: email,
    score: 0,
  })
    .then(() => {
      console.log("Data written successfully.");
    })
    .catch((error) => {
      console.error("Error writing data:", error);
    });
}

// Read data from the database
function readData(userId) {
  get(child(ref(database), "users/" + userId))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Data read:", data);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error("Error reading data:", error);
    });
}

function readall() {
get(ref(database)).then((snapshot) => {
  if (snapshot.exists()) {
    const databaseData = snapshot.val();
    console.log(databaseData);
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}

// Usage example
const userId = "user369";
const userName = "AP";
const userEmail = "ct@example.com";

// writeData(userId, userName, userEmail);
// readData(userId);
readall();

