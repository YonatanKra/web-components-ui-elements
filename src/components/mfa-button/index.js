import { MFAButton } from './mfa-button';
if (!window.customElements.get('mfa-button')) {
    window.customElements.define('mfa-button', MFAButton);
}
