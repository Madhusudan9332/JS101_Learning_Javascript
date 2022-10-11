//Given stored username and password and input username and password, Print if the user can login or not.

// username and password in database (db)
let db_username = 'abc@gmail.com';
let db_password = '123@abc';
// the input username and password by user
let in_username = 'abc@gmail.com';
let in_password = '123@abc';

if(db_username==in_username){
  if(db_password==in_password){
  console.log("login successfully..");
  }
  else{
  console.log("Password Incorrect..");
  }
}
else{
  console.log("Invalid Username..");
}