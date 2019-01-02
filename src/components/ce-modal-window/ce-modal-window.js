const templateString = `
    <style>
        .overlay {
            opacity: 1;
            visibility: visible;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.42);
            -webkit-transition: opacity 0.5s;
            transition: opacity 0.5s;
            display: flex;
            align-items: center; 
            justify-content: center;
        }
    
        .overlay-hidden {
            opacity: 0;
            visibility: hidden;
            -webkit-transition: opacity 0.5s, visibility 0s 0.5s;
            transition: opacity 0.5s, visibility 0s 0.5s;
        }
    </style>
    <div class="overlay overlay-hidden">
        <div class="overlay-content"></div>
    </div>
`;
const template = document.createElement('template');
template.innerHTML = templateString;

export class CEModalWindow extends HTMLElement{
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
        this._overlay = shadowRoot.querySelector('.overlay');
        this._content = shadowRoot.querySelector('.overlay-content');
    }

    open(config) {
        const supportedStyles = ['width', 'height'];

        if (!config) {
            return;
        }

        this._overlay.classList.remove('overlay-hidden');

        this._content.innerHTML = config.content;

        supportedStyles.forEach((style) => {
            CEModalWindow.setStyle(this._content, style, config[style]);
        });
    }

    close() {
        this._overlay.classList.add('overlay-hidden');
    }

    static setStyle(element, style, value) {
        const pxStyles = ['width', 'height'];
        if (value) {
            if (pxStyles.indexOf(style) > -1) {
                value += 'px';
            }
            element.style[style] = value;
        }
    }
}
