import '../main';

const modalWindow = document.createElement('ce-modal-window');
modalWindow.addEventListener('click', () => {
    modalWindow.close();
});
document.body.appendChild(modalWindow);

const button = document.createElement('button');
button.innerText = 'Open modal';

button.addEventListener('click', () => {
    modalWindow.open({
        content: '<h1>Hello Modal Div!!!</h1>',
        height: 50,
        width: 100
    });
});
document.body.appendChild(button);
