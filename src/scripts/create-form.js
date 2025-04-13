export function handleForm(event, callback) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  if (callback) {
    callback(data); // Pass the data to the callback
  }
  form.reset();
}

export function createForm(containerId, onSubmitCallback) {
  const container = document.getElementById(containerId);
  const inputNames = ["title", "description", "dueDate"];

  const form = document.createElement("form");
  form.id = "form";

  for (let i = 0; i < inputNames.length; i++) {
    const inputContainer = document.createElement("div");

    const label = document.createElement("label");
    label.htmlFor = `${inputNames[i]}`;
    label.textContent =
      inputNames[i].charAt(0).toUpperCase() + inputNames[i].slice(1) + ":";

    const input = document.createElement("input");
    input.type = inputNames[i] === "dueDate" ? "date" : "text";
    input.id = `${inputNames[i]}`;
    input.name = `${inputNames[i]}`;
    input.required = true;

    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    form.appendChild(inputContainer);
  }

  const priorityContainer = document.createElement("div");
  priorityContainer.classList.add("priority-container");

  const priorities = ["low", "medium", "high"];
  priorities.forEach((priority) => {
    const radioLabel = document.createElement("label");

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.id = `priority-${priority}`;
    radioInput.name = "priority";
    radioInput.value = priority;
    radioInput.required = true;

    radioLabel.htmlFor = `priority-${priority}`;
    radioLabel.textContent =
      priority.charAt(0).toUpperCase() + priority.slice(1);

    radioLabel.prepend(radioInput);
    priorityContainer.appendChild(radioLabel);
  });

  form.appendChild(priorityContainer);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";

  form.appendChild(submitBtn);

  form.addEventListener("submit", (event) =>
    handleForm(event, onSubmitCallback),
  );

  container.appendChild(form);
}
