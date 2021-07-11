This basic module exports 
a jQuery-inspired element ID and className selector
to reduce the amount of unnecessary duplication
in code when selecting many DOM elements.


Written by Gareth Whitley (c) 2021
www.github.com/gwhitdev
You may freely use and distribute this code as long
as you keep this attribution.

### Use in your code:
#### Import into your JS file:
```javascript
import { $ } from './qj.js';
```

#### Select an element by an ID:
```javascript
const selectYourElementById = $('yourElementId');
```

#### Selent an element by class name:
```javascript
const selectYourElementByClassName = $('.yourElementClassName');
```

In your HTML add the module type to the script tag:
```html
<script src='<your JS file>' type="module"></script>
```

### Errors
If you do not pass a valid string, you will throw an error:
```javascript
TypeError('Parameter must be a class name or ID tag.')
TypeError('You passed a number, pass a valid string instead.')
```

If you pass a string but the first character is not a string element or a className identifer, you will throw an error:
```javascript
Error('You need to supply a correct argument to select the element')
```