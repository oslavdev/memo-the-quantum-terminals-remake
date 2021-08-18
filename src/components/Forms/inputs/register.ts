

export const inputs = (formData:any):any[] => {
  return [
  {
    id: 1,
    name: "email",
    label: "E-mail",
    value: formData["email"],
    placeholder: "E-mail",
    type:"email"
  },
  {
    id: 2,
    name: "username",
    label: "Username",
    value: formData["username"],
    placeholder: "Username",
    type:"text"
  },
  {
    id:3,
    name: "password",
    label: "Password",
    value: formData["password"],
    placeholder: "Password",
    type:"password"
  },
  {
    id: 4,
    name: "confirm_password",
    label: "Confirm Password",
    value: formData["confirm_password"],
    placeholder: "Confirm Password",
    type:"password"
  }
]}