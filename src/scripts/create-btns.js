export default function createBtns(containerId) {
    const conatainer = document.getElementById(containerId);

    const buttonNames = ["Home", "All To-Dos", "New To-Do"];

    for (let i = 0; i <= 2; i++) {
        const btn = document.createElement("button");

        btn.textContent = `${buttonNames[i]}`;
        btn.id = `${buttonNames[i]}`;

        conatainer.appendChild(btn);
    }
}