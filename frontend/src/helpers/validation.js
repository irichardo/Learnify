export const regexEmailPwd = async (values) => {
  const errors = verifyEmailPwd({}, values);
  return errors;
};

const verifyEmailPwd = (error = {}, values) => {
  if (!values.email) {
    error.email = toast.error("Username is required...!");
  } else if (values.username.includes(" ")) {
    error.email = toast.error("Invalid username...!");
  }
  return error;
};
