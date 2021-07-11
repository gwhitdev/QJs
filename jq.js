/* 
This basic module exports 
a jQuery-like element ID and className selector
to reduce the amount of unnecessary duplication
in code when selecting many DOM elements.
*/

// Written by Gareth Whitley (c) 2021
// www.github.com/gwhitdev
// You may freely use and distribute this code as long
// as you keep this attribution.

export function $(element) {
    if (element[0] !== '.') return document.getElementById(element);
    if (element[0] === '.') {
        const className = element.substr(1);
        return document.getElementsByClassName(className);
    };
    throw TypeError('Parameter must be a class name or ID tag.')
}

