import './main';
import { CEModalWindow } from "./components/ce-modal-window/ce-modal-window";

describe('ui-elements integration tests', () => {
    describe('ce-modal-window', () => {
        it(`should be defined`, () => {
            const ceModalWindowClass = window.customElements.get('ce-modal-window');
            expect(ceModalWindowClass).toBe(CEModalWindow);
        });
    });
});