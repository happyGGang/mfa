const b = require("b"); 

(async function main() {
  try {
    const users = await b(); 
    console.log(users.map((user) => user.login).join(", "));
  } catch (error) {
    console.error("Error fetching users:", error); 
  }
})();
