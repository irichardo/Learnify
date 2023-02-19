import { FormikErrors } from 'formik';

/** Regular expressions */
const nameRgx = /^(?=.{1,50}$)[\p{L}' \-]+$/u;
const emailRgx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
const addressRgx = /^[a-zA-Z0-9\s\-\#\.]+$/;
const urlRgx = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
const imageRgx = /\.(png|PNG|jpg|JPG|jpeg|JPEG)$/;

/** Interfaces for validations */
interface valuesSignIn {
  email: string;
  password: string;
}

interface valuesSignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface valuesForm {
  name: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  state: string;
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

const verifyAddress = (address: string) => {
  return address.length > 4
    ? address.length < 35
      ? addressRgx.test(address)
        ? ''
        : 'Invalid address, enter a valid address'
      : 'Invalid address, too long address try to put a shorter one'
    : 'Invalid address, the address should be longer';
};

const verifyUrl = (url: string) => {
  return url.length > 5
    ? url.length < 65
      ? urlRgx.test(url)
        ? ''
        : 'invalid url, try again later'
      : 'the email entered is too long'
    : 'too short url address that you provided';
};

const verifyImage = (img: string) => {
  return img.length === 0
    ? imageRgx.test(img)
      ? ''
      : 'the registered image is not compatible, please enter a valid image'
    : 'the field cannot be empty';
};

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
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}: valuesSignUp): FormikErrors<valuesSignUp> => {
  const errors: FormikErrors<valuesSignUp> = {};
  verifyName(firstName) && (errors.firstName = verifyName(firstName));
  verifyName(lastName) && (errors.lastName = verifyName(lastName));
  verifyEmail(email) && (errors.email = verifyEmail(email));
  if (password !== confirmPassword) {
    errors.confirmPassword = 'passwords do not match';
  }
  verifyPassword(password) && (errors.password = verifyPassword(password));
  return errors;
};

export const valProfile = ({
  name,
  lastName,
  email,
  address,
  city,
  country,
  state,
}: valuesForm): FormikErrors<valuesForm> => {
  const errors: FormikErrors<valuesForm> = {};
  console.log(name, lastName, email, address, city, country, state);

  verifyName(name) && (errors.name = verifyName(name));
  verifyName(lastName) && (errors.lastName = verifyName(lastName));
  verifyEmail(email) && (errors.email = verifyEmail(email));
  verifyAddress(address) && (errors.address = verifyAddress(address));
  verifyAddress(city) && (errors.city = verifyAddress(city));
  verifyAddress(country) && (errors.country = verifyAddress(country));
  verifyAddress(state) && (errors.state = verifyAddress(state));
  return errors;
};
