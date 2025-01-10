// The exclamation mark acts as a non-null assertion operator.
// ... will remove null and undefined values.

const $ = document;
const usernameElement = $.querySelector<HTMLInputElement>("#username");
const emailElement = $.querySelector<HTMLInputElement>("#email");
const display = $.querySelector<HTMLDivElement>("#display");
const form = $.querySelector<HTMLFormElement>("form")!;

form.onsubmit = (event) => {
  event.preventDefault();
  display!.innerHTML = `
  <p>Username: ${usernameElement?.value}</p>
  <p>Email: ${emailElement?.value}</p>
`;
  localStorage.setItem("username", usernameElement?.value ?? "");
  localStorage.setItem("email", emailElement?.value ?? "");
  form.reset();
};

window.onload = () => {
  const username = localStorage.getItem("username") || "";
  const email = localStorage.getItem("email") || "";
  usernameElement!.value = username;
  emailElement!.value = email;
};
