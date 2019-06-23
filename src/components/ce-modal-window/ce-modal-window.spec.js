import { CEModalWindow } from './ce-modal-window';

window.customElements.define('ce-tested-modal-window', CEModalWindow);
describe('CE Modal Window', () => {
    let element, shadowRoot;
    beforeEach(() => {
        element = document.createElement('ce-tested-modal-window');
        shadowRoot = element.shadowRoot;
        document.body.append(element);
    });

    // check that the exposed API works
    describe('init', () => {
        it('should add a div with the overlay and overlay-hidden classes under the shadow root', () => {
            expect(shadowRoot.querySelector('.overlay.overlay-hidden')).toBeTruthy();
        });
    });

    describe('open', () => {
        it('should remove the hidden class from overlay', () => {
            const overlay = shadowRoot.querySelector('.overlay.overlay-hidden');
            element.open({});
            expect(overlay.classList.contains('overlay-hidden')).toBeFalsy();
        });

        it('should add class transparent to the overlay if config.hideOverlay is true', () => {
            const overlay = shadowRoot.querySelector('.overlay.overlay-hidden');
            element.open({
                hideOverlay: true
            });
            expect(overlay.classList.contains('transparent')).toBeFalsy();
        });

        it('should insert the content string as HTML to the content element', () => {
            const randId = Math.random().toString(2);
            const content = shadowRoot.querySelector('.overlay-content');
            const htmlBefore = content.innerHTML;
            const config = {
                content: `<div id="${randId}">Hello CE!</div>`
            };
            element.open(config);
            expect(htmlBefore).toEqual("");
            expect(content.innerHTML).toEqual(config.content);
        });

        describe(`styles`, () => {
            it('should set width and height according to config values', () => {
                const content = shadowRoot.querySelector('.overlay-content');
                const config = {
                    height: Math.round(Math.random() * 100 + 50),
                    width: Math.round(Math.random() * 100 + 50)
                };
                element.open(config);
                const overlayBoundingBox = content.getBoundingClientRect();
                expect(overlayBoundingBox.width).toEqual(config.width);
                expect(overlayBoundingBox.height).toEqual(config.height);
            });

            it(`should set the background according to config values`, () => {
                const content = shadowRoot.querySelector('.overlay-content');
                const config = {
                    background: 'rgb(200, 50, 30)'
                };
                element.open(config);
                expect(content.style.background).toEqual(config.background);
            });
        });

        describe(`styles V2`, () => {
            it(`should set any style set in the styles property`, () => {
                const content = shadowRoot.querySelector('.overlay-content');
                const config = {
                    styles: {
                        height: Math.round(Math.random() * 100 + 50) + 'px',
                        width: Math.round(Math.random() * 100 + 50) + 'px',
                        background: 'rgb(200, 50, 30)',
                        color: 'rgb(10, 60, 50)'
                    }
                };

                element.open(config);

                Object.keys(config.styles).forEach(styleProperty => {
                    expect(content.style[styleProperty]).toEqual(config.styles[styleProperty]);
                });
            });
        });

        describe(`text input`, () => {
            it(`should insert text input to the content element`, () => {
                const content = shadowRoot.querySelector('.overlay-content');
                const config = {
                    addInput: true
                };

                element.open(config);

                expect(content.querySelector('input')).toBeTruthy();

            });
        });

    });

    describe('close', () => {
        it('should add the overlay-hidden class', () => {
            const overlay = shadowRoot.querySelector('.overlay');
            element.open({}); // we already know it removes the class
            element.close();
            expect(overlay.classList.contains('overlay-hidden'));
        });
    });

    afterEach(() => {
        document.body.removeChild(element);
    })
});
