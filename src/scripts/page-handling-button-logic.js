function clearContent(containerToClear) {
    Array.from(containerToClear.children).forEach(element => {
        element.remove();
    });
}

export default function handleButtonsPages(containerWithBtnsId, clearContentId, homeCreatingFunction, formCreatingFunction, allToDoCreatingFunction) {
    const containerToClear = document.getElementById(clearContentId);
    const buttons = Array.from(document.getElementById(containerWithBtnsId).children);

    buttons.forEach(btn => {
        const id = btn.id; 
        btn.addEventListener('click', () => {
            clearContent(containerToClear); 
            switch (id) {
                case 'Home':
                    homeCreatingFunction(); 
                    break;
                case 'All To-Dos':
                    allToDoCreatingFunction();
                    break;
                case 'New To-Do': 
                    formCreatingFunction(); 
                    break;
                default:
                    console.warn(`No function assigned for button with id: ${id}`);
            }
        });
    });
}