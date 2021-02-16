module.exports = (err) => {
  let errorsMessage;

  if (err.code === 11000 && err.message.includes("username")) {
    errorsMessage = "username already exist";
  }

  if (err.code === 11000 && err.message.includes("email")) {
    errorsMessage = "email already exist";
  }

  return errorsMessage;
};
