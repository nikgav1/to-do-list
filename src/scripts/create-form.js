export function handleForm(event, callback) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    if (callback) {
        callback(data); // Pass the data to the callback
    }
}

export function createForm(containerId, onSubmitCallback) {
    const container = document.getElementById(containerId);
    const inputNames = ['title', 'description', 'dueDate'];

    const form = document.createElement("form");
    form.id = "form";

    for (let i = 0; i < inputNames.length; i++) {
        const inputContainer = document.createElement("div");

        const label = document.createElement("label");
        label.htmlFor = `${inputNames[i]}`;
        label.textContent = inputNames[i].charAt(0).toUpperCase() + inputNames[i].slice(1) + ":";

        const input = document.createElement("input");
        input.type = inputNames[i] === "dueDate" ? "date" : "text"; 
        input.id = `${inputNames[i]}`;
        input.name = `${inputNames[i]}`;
        input.required = true;

        inputContainer.appendChild(label);
        inputContainer.appendChild(input);
        form.appendChild(inputContainer);
    }

    const priorityLabel = document.createElement("div");
    priorityLabel.textContent = "Priority:";
    form.appendChild(priorityLabel);

    const priorities = ['low', 'medium', 'high'];
    priorities.forEach(priority => {
        const radioContainer = document.createElement("div");

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.id = `priority-${priority}`;
        radioInput.name = "priority";
        radioInput.value = priority;
        radioInput.required = true;

        const radioLabel = document.createElement("label");
        radioLabel.htmlFor = `priority-${priority}`;
        radioLabel.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);

        radioContainer.appendChild(radioInput);
        radioContainer.appendChild(radioLabel);
        form.appendChild(radioContainer);
    });

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit";

    form.appendChild(submitBtn);

    form.addEventListener("submit", (event) => handleForm(event, onSubmitCallback));

    container.appendChild(form);
}