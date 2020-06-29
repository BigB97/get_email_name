/* 
This snippet below help you get user's email name without the extention:
Example= User's Email = users_email@gmail.com  => users_email

    💓💓💓 made by BigB💓💓💓
*/

const getEmail = (email) => {
  let string1 = email;
  const isInclude = string1.includes("@");
  if (isInclude) {
    isPosition = string1.indexOf("@");
    let newInput = "";
    for (let i = 0; i < isPosition; i++) {
      newInput += string1[i];
    }
    console.log(newInput);
  } else {
    console.log("Not Found");
  }
};

let email = "bigbofficial@gmail.com";
getEmail(email);
