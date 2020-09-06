import { Button as MWCButton } from '@material/mwc-button';

export class MFAButton extends MWCButton {
    constructor() {
        super();
        this.addEventListener('click', this._handleClick);
    }

    _handleClick(event) {
        const formId = this.getAttribute('form');
        const form = formId ?
            document.getElementById(formId) : this.closest('form');
        
        if (form) {
            switch(this.getAttribute('type')) {
                case 'reset':
                    form.reset();
                    break;
                default:
                    form.requestSubmit();
                    break
            }
        }
    }
}
