
let user = {
    name: "John Smith",
    age: 35
  };

  let user1 = JSON.stringify( user);
  let user2 = JSON.parse(JSON.stringify(user));

  console.log(user1);
  console.log(user2)