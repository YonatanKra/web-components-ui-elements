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
        styles: {
            height: 200,
            width: 200,
            background: 'blue',
            color: 'red',
            fontSize: '36px'
        },
        addInput: true,
    });
});
document.body.appendChild(button);
