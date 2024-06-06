import { CardComponents } from "../components/CardComponents.js";
import { getData } from "../store/fatchApi.js";

document.addEventListener("DOMContentLoaded", async () => {
  const renderArea = document.getElementById("renderArea");
  let users = await getData("users");

  if (users && Array.isArray(users)) {
    users.forEach((user) => {
      renderArea.innerHTML += CardComponents(user);
    });
  } else {
    renderArea.innerHTML = "<p>No users found.</p>";
  }
});
