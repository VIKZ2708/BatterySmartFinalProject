import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validatinSchema = yup.object().shape({
  name: yup
    .string("full name is not string")
    .required("Full name is Required")
    .min(6, "least than 6 Charechters")
    .max(100, "more than 100 Charchters"),
  emailId: yup
    .string()
    .email("Email is not Valid")
    .required("this Field is Required"),
  phoneNumber: yup
  .string().matches(phoneRegExp, 'Phone number is not valid')
  .required(),
  pricesig: yup
  .string("price signal is not string")
  .required("this Field is Required"),
  activedays: yup
  .string("activedays is not string")
  .required("this Field is Required")
});


