<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [web-components-ui-elements](#web-components-ui-elements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API](#api)
    - [Modal Window](#modal-window)
      - [Tag Name](#tag-name)
      - [Methods](#methods)
        - [Open](#open)
        - [Close](#close)
      - [ICD](#icd)
        - [Config](#config)
  - [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# web-components-ui-elements
A web components UI library.

## Installation
`npm install web-components-ui-elements`

## Usage
You can require the whole library:

`import * from web-components-ui-elements;`

And use in the DOM like this:

`<ce-modal-window id="modal-window"></ce-modal-window>`

And then use the API:
```
const modal = document.querySelector('#modal-window');
modal.open({
    content: '<h1>Hello Modal!</h1>'
});

// close the modal when clicking on it
function closeModal() {
    modal.close();
    modal.removeEventListener('click', closeModal);
}
modal.addEventListener('click', closeModal);

```

If you want, you can just create the element on your own and add it to the DOM:
```
const modalWindow = document.createElement('ce-modal-window');
modalWindow.addEventListener('click', () => {
    modalWindow.close();
});
document.body.appendChild(modalWindow);

const button = document.createElement('button');
button.innerText = 'Open modal';

button.addEventListener('click', () => {
    modalWindow.open({
        content: '<h1>Hello Modal</h1>',
        height: 50,
        width: 100
    });
});
document.body.appendChild(button);
```

## API

### Modal Window
#### Tag Name
`ce-modal-window`
#### Methods
##### Open
Accepts a config object and opens the modal.
##### Close
Closes the modal
#### ICD
##### Config
```
{
    content: '', // <string> HTML snippet to show inside the modal
    hideOverlay: false, // <boolean> show or hide the opack overlay behind the modal
    height: 150, // <number> height of the modal
    width: 150, // <number> width of the modal
}
```
## Contributing
- Clone
- `npm i`
- `npm run build` to get the build
- `npm run test` to test
- `npm run serve` to run a development environment

