import template from "./demo.html";

document.body.innerHTML = template;

(function () {
  const output = document.getElementById("form-output");
  const form = document.getElementById("simple-form");
  form.onsubmit = () => false;
  console.log("Ready");

  form.addEventListener("submit", () => {
    const formData = new FormData(form);

    let outputHTML = "";
    for (var pair of formData.entries()) {
      outputHTML += `<div>${pair[0]}: ${pair[1]}</div>`;
    }
    output.innerHTML = outputHTML;
  });
})();
