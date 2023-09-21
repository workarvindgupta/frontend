// User Authentication
// Send Feedback
// You are required to build a user authentication system for a web application Using the IIFE.



// Requirements

// Create an empty array of objects  with name users  to store registered users.
// The IIFE should return two functions.
// registerUser: It should take two parameters "username" and "password" and add it to the users array.
// The array should be of the form:
//  [{username: "user1 ", password: "pwd1 "},
//  {username: " user2", password: "pwd2 "}, 
//   ....]


// Call the checkCredentials  function  to determine if the user is already present in the users array. 

// If the user is already registered then return `The user is already registered` otherwise push the user object to the Users array and return `The user have been added to the registeredUser array`.  
// checkCredentials: It should take two arguments, "username" and "password", and check whether the user with the given credentials is present in the user's array or not. It should return false if the user is not present otherwise true.

// answer 






function main() {
    const userAuth = (function() {
      const users = [];
  
      function registerUser(username, password) {
        if (checkCredentials(username, password)) {
          return 'The user is already registered';
        } else {
          users.push({ username, password });
          return 'The user have been added to the registeredUser array';
        }
      }
  
      function checkCredentials(username, password) {
        const user = users.find(user => user.username === username && user.password === password);
        return !!user;
      }
  
      return {
        registerUser
      };
    })();
  
    console.log(userAuth.registerUser('user1', 'password123'));
    console.log(userAuth.registerUser('user1', 'password123'));
    
    return userAuth;
  }
  
  main();