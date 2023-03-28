// firewriter.js
import { db } from "./firebaseApp.js";
import { ref, set, get, child } from "firebase/database";

// Write data to the database
function writeData(userId, name, email) {
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
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
  get(child(ref(db), "users/" + userId))
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

// Usage example
const userId = "user123";
const userName = "John Doe";
const userEmail = "johndoe@example.com";

writeData(userId, userName, userEmail);
readData(userId);

