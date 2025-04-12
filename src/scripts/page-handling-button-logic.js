function clearContent(containerToClear) {
    Array.from(containerToClear.children).forEach(element => {
        element.remove();
    });
}

export default function handleButtonsPages(containerWithBtnsId, clearContentId, homeCreatingFunction, formCreatingFunction, projectCreatingFunction) {
    const containerToClear = document.getElementById(clearContentId);
    const buttons = Array.from(document.getElementById(containerWithBtnsId).children);

    buttons.forEach(btn => {
        const id = btn.id; // Get the button's id
        btn.addEventListener('click', () => {
            clearContent(containerToClear); // Clear the content container
            switch (id) {
                case 'Home': // If the button's id is "Home"
                    homeCreatingFunction(); // Call the home function
                    break;
                case 'All To-Dos': // If the button's id is "Projects"
                    projectCreatingFunction(); // Call the projects function
                    break;
                case 'New To-Do': // If the button's id is "New To Do"
                    formCreatingFunction(); // Call the form function
                    break;
                default:
                    console.warn(`No function assigned for button with id: ${id}`);
            }
        });
    });
}