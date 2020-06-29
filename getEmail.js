/* 
This snippet below help you get user's email name without the extention:
Example= User's Email = users_email@gmail.com  => users_email
Loadtime 23ms

    💓💓💓 made by BigB💓💓💓
*/

const getEmail = (email) => {
  var startTime = new Date().getTime();
  let string1 = email;
  const isInclude = string1.search("@");
  if (isInclude) {
    let newInput = "";
    for (let i = 0; i < isInclude; i++) {
      newInput += string1[i];
    }
    console.log(newInput);
    var endTime = new Date().getTime();
    console.log("testName" + ": " + (endTime - startTime) + "ms");
  } else {
    console.log("Not Found");
  }
};

let email = "bigbofficial@gmail.com";
getEmail(email);
