# Javascript libraries for Apple TV

## Goals

Add a compatibility layer, existing javascript code, and practices to TVJS.

## Usage

Include tvcompat.js in your TVJS application. This should help many existing
code and libraries to work. The major limitation is the lack of HTML.

There is also a variant of jQuery called tvQuery. It supports AJAX
and DOM manipulation, with TVML tags instead of HTML.

## TODO

* Write tvQuery.js as a port of jQuery, rather than hacks

* An implementation of $.getScript and RequireJS to allow modular code

* Swift helpers to make applications that work while temporarily offline
