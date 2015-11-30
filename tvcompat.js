/*
 * Compatibility layer for tvOS / tvJS
 * Author: Aurélien Nicolas
 */

// Give access to generic functionalities (events handling, AJAX, ..)
var window = this;

// Access to DOM functions
var document = (new DOMParser()).parseFromString(
    "<document></document>",
    "application/xml"
);

// The application is ready at this point, don't confuse jQuery
document.readyState = "complete";

// Mock the location object
document.location = {
    href: "",
    host: "",
    hostname: "",
    origin: "",
    pathname: "",
    port: "",
    protocol: "",
    password: "",
    search: "",
    username: "",
    hash: "",
};

// Publish document
window.document = document;
