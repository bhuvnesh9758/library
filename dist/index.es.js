import{jsxs as t,jsx as e}from"react/jsx-runtime";import n from"react";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var c in e=arguments[n])Object.prototype.hasOwnProperty.call(e,c)&&(t[c]=e[c]);return t},r.apply(this,arguments)};function c(){var c=n.useState(0),o=c[0],i=c[1],a=n.useState([]),u=a[0],l=a[1];return n.useEffect((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then((function(t){return l(t)})).catch(console.log)}),[]),t("div",r({className:"container"},{children:[t("p",{children:["You clicked ",o," times"]}),e("button",r({onClick:function(){return i(o+1)}},{children:"Click me"})),t("p",{children:["Data fetched from api --",u&&u.length]})]}))}export{c as Counter};
