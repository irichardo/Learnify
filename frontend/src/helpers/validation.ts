import { FormikErrors } from 'formik';

/** Regular expressions */
const nameRgx = /^(?=.{1,50}$)[\p{L}' \-]+$/u;
const emailRgx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
const phoneRgx = 'Regular Expressions for phone';
const addressRgx = 'Regular Expressions for address';
const urlRgx = 'Regular Expressions for url';
const imageRgx = 'Regular Expressions for image';

/** Interfaces for validations */
interface valuesSignIn {
  email: string;
  password: string;
}

interface valuesSignUp {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/** Validation by properties */
const verifyName = (name: string): string => {
  return name.length > 4
    ? name.length < 25
      ? nameRgx.test(name)
        ? ''
        : 'incorrect name, please enter a valid name'
      : 'name too long enter a shorter one'
    : 'very short name try inserting a longer one';
};

const verifyEmail = (email: string): string => {
  return email.length < 25
    ? emailRgx.test(email)
      ? ''
      : 'Incorrect email'
    : 'Invalid email, too long, try a shorter one';
};

const verifyPassword = (password: string): string => {
  return password.length > 8
    ? 20 > password.length
      ? passwordRgx.test(password)
        ? ''
        : 'Invalid password, the password contain letters lower and upper case, numbers and special characters'
      : 'Password is too long'
    : 'Password must be at least 8 characters';
};

const verifyPhone = (phone: number) => {};

const verifyAddress = (address: string) => {};

const verifyUrl = (url: string) => {};

const verifyImage = (img: string) => {};

/** Validation functions */
export const valSignIn = ({
  email,
  password,
}: valuesSignIn): FormikErrors<valuesSignIn> => {
  const errors: FormikErrors<valuesSignIn> = {};
  verifyEmail(email) && (errors.email = verifyEmail(email));
  verifyPassword(password) && (errors.password = verifyPassword(password));
  return errors;
};

export const valSignUp = ({
  name,
  lastName,
  email,
  password,
  confirmPassword,
}: valuesSignUp): FormikErrors<valuesSignIn> => {
  const errors: FormikErrors<valuesSignUp> = {};
  verifyName(name) && (errors.name = verifyName(name));
  verifyName(lastName) && (errors.lastName = verifyName(lastName));
  verifyEmail(email) && (errors.email = verifyEmail(email));
  if (password !== confirmPassword) {
    errors.confirmPassword = 'passwords do not match';
  }
  verifyPassword(password) && (errors.password = verifyPassword(password));
  return errors;
};
