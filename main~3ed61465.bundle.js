!function(n){function r(r){for(var t,a,l=r[0],d=r[1],s=r[2],c=0,m=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(n[t]=d[t]);for(p&&p(r);m.length;)m.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var n,r=0;r<o.length;r++){for(var e=o[r],t=!0,l=1;l<e.length;l++){var d=e[l];0!==i[d]&&(t=!1)}t&&(o.splice(r--,1),n=a(a.s=e[0]))}return n}var t={},i={3:0},o=[];function a(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=t,a.d=function(n,r,e){a.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,r){if(1&r&&(n=a(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)a.d(e,t,function(r){return n[r]}.bind(null,t));return e},a.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(r,"a",r),r},a.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=r,l=l.slice();for(var s=0;s<l.length;s++)r(l[s]);var p=d;o.push([22,2,0,1,4]),e()}([,,,,,,,,,function(n,r,e){var t=e(0),i=e(10);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1};t(i,o);n.exports=i.locals||{}},function(n,r,e){(r=e(1)(!1)).push([n.i,"\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody, html {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 12px;\n    color: #424242;\n}\n\n/* Skip link */\n.skip-link {\n    position: absolute;\n    top: -80px;\n    left: 0;\n    text-decoration: none;\n    background-color: #1A374D;\n    color: white;\n    padding: 8px;\n    z-index: 10;\n  }\n  \n  .skip-link:focus {\n    top: 0;\n  }\n\n/* Header */\n\n.header {\n    min-height: 50px;\n    transition: min-height 0.3s;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    background-color: #406882;\n    color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.header__inner {\n    width: 100%;\n    text-align: center;\n    margin-left: 10px;\n    margin-right: auto;\n    display: flex;\n    align-items: center;\n}\n\n.header__title {\n    font-weight: 300;\n    font-size: 2em;\n    font-family: 'Paytone One', sans-serif;\n    margin: 0 0.25em;\n    display: inline-block;\n    color: white;\n}\n\n/* Navbar */\n.nav {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.nav__list {\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    text-align: right;\n}\n\n.nav__item {\n    box-sizing: border-box;\n    display: inline-block;\n    text-align: center;\n    line-height: 24px;\n    padding: 24px;\n    text-transform: uppercase;\n}\n\n.nav a {\n    text-decoration: none;\n    color: white;\n    display: flex;\n    align-items: center;\n    min-width: 44px;\n    min-height: 44px;\n}\n\n.nav a:hover {\n    text-decoration: underline;\n    color: #000;\n}\n\n/* Hero */\n.hero {\n    display: flex;\n    align-items: center;\n    min-height: 380px;\n    width: 100%;\n    text-align: center;\n    background-position: center;\n    background-color: green;\n}\n\n.hero__inner {\n    margin: 0 auto;\n    max-width: 100%;\n}\n\n.hero__title {\n    color: #1A374D;\n    font-weight: 800;\n    font-size: 36px;\n}\n\n.hero__button {\n    font-family: \"Roboto\", sans-serif;\n    text-transform: uppercase;\n    margin-top: 24px;\n    cursor: pointer;\n    padding: 22px 44px;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    background-color: #1A374D;\n    transition: opacity 0.3s;\n}\n\n/* main */\n#main-content {\n    padding: 32px;\n}\n\n.explore__content {\n    width: 100%;\n    margin: 30px auto;\n    text-align: center;\n}\n\n.main-content__title {\n    font-size: 32px;\n    font-weight: lighter;\n}\n\n.main-content__title::after {\n    content: '';\n    margin-top: 16px;\n    display: block;\n    border-bottom: 1px solid #eeeeee;\n}\n/* explore items */\n\n.explore-items {\n    margin: 32px auto auto;\n    text-align: left;\n    overflow: auto;\n    display: grid;\n    gap: 15px;\n}\n\n.explore-item {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    width: 100%;\n    border-radius: 5px;\n    overflow: hidden;\n    margin-bottom: 5px;\n    transition: transform .3s;\n}\n\n.explore-item:hover {\n    transform: scale(0.97);\n}\n\n.explore-item a {\n    text-decoration: none;\n    color: unset;\n}\n\n.explore-item__thumbnail {\n    width: 100%;\n}\n\n.explore-item__content {\n    padding: 16px 16px 32px 16px;\n    text-align: left;\n}\n\n.explore-item__title {\n    font-weight: 500;\n    font-size: 18px;\n    margin-top: 16px;\n    transition: 0.3s opacity;\n}\n\n.explore-item__description {\n    margin-top: 16px;\n    font-size: 14px;\n    line-height: 1.5em;\n    overflow: hidden;\n   text-overflow: ellipsis;\n   display: -webkit-box;\n   -webkit-line-clamp: 2; /* number of lines to show */\n           line-clamp: 2; \n   -webkit-box-orient: vertical;\n}\n\n.explore-item__content-title {\n    text-align: center;\n    line-height: 1.6;\n}\n\n.explore-item__ratings {\n    text-align: center;\n    \n}\n.img-container {\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    max-height: 600px;\n}\n\n.img-container img {\n    width: 100%;\n    height: 270px;\n    object-fit: cover;\n    object-position: center;\n}\n\n.explore-item__rating {\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: white;\n    font-size: large;\n    border-radius: 0 0 50% 0;\n    background-color: #1A374D;\n    padding: 0.4em 1.3em;\n    z-index: 1;\n}\n  \n.explore-item__rating .fa {\n  font-size: smaller;\n  padding: 0.3em 0.8em 0.3em 0;\n  color: white;\n}\n/* footer */\nfooter {\n    padding: 2em;\n    width: 100%;\n    text-align: center;\n    color: white;\n    background-color: #406882;\n}\n\nfooter ul {\n    list-style: none;\n}\n\nfooter li {\n    margin: 0.3em 0;\n    font-size: 14px;\n}\n\n/*\n   Like\n*/\n.like {\n    font-size: 18px;\n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    background-color: #1A374D;\n    color: white;\n    border: 0;\n    border-radius: 50%;\n    width: 55px;\n    height: 55px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 10;\n}\n\n/* Favorite */\n.favorite__title {\n    font-size: 24px;\n    text-align: center;\n}",""]),n.exports=r},function(n,r,e){var t=e(0),i=e(12);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1};t(i,o);n.exports=i.locals||{}},function(n,r,e){(r=e(1)(!1)).push([n.i,'@media only screen and (max-width: 480px) {\r\n    .header {\r\n        grid-template-columns: 2fr 1fr;\r\n    }\r\n    \r\n    .hero {\r\n        background-image: linear-gradient(\r\n        115deg,\r\n        rgba(230, 230, 230, 0.8),\r\n        rgba(177, 177, 177, 0.7)\r\n      ),url("./images/hero1-small.jpg");\r\n    }\r\n\r\n    .nav {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n        transition: 0.3s ease-in;\r\n    }\r\n\r\n    .open {\r\n        display: none;\r\n        max-height: 0;\r\n    }\r\n\r\n    .nav__list {\r\n        text-align: center;\r\n    }\r\n    .hamburger-menu {\r\n        display: flex;\r\n        justify-content: end;\r\n        align-items: center;\r\n        margin-right: 4vw;\r\n    }\r\n\r\n    .hamburger-menu__icon {\r\n        background-color: unset;\r\n        border:0;\r\n        color: white;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .hamburger-menu i {\r\n        font-size: 44px;\r\n        min-width: 44px;\r\n        min-height: 44px;\r\n    }\r\n\r\n    .header__title {\r\n        font-size: 2.5em;\r\n    }\r\n\r\n    .nav__item {\r\n        font-size: 2em;\r\n        padding: 24px 5px;\r\n    }\r\n\r\n    .explore-detail {\r\n        display: block !important;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 480px) {\r\n    .hero {\r\n        background-image: linear-gradient(\r\n        115deg,\r\n        rgba(230, 230, 230, 0.8),\r\n        rgba(177, 177, 177, 0.7)\r\n      ),url("./images/hero1-medium.jpg");\r\n    }\r\n\r\n    .hamburger-menu {\r\n        display: none;\r\n    }\r\n\r\n    .nav__item {\r\n        font-size: 24px;\r\n        padding: 24px 7px;\r\n    }\r\n\r\n    .header__title {\r\n        font-size: 2.3em;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 720px) {\r\n    .explore-detail {\r\n        display: grid;\r\n        gap: 10px;\r\n    }\r\n    \r\n    .header__title {\r\n        font-size: 2em;\r\n    }\r\n\r\n    .header__inner {\r\n        padding-left: 5vw;\r\n    }\r\n\r\n    .nav__item {\r\n        font-size: 1.5em;\r\n    }  \r\n\r\n    .nav__list {\r\n        padding-right: 5vw;\r\n    }\r\n\r\n    .explore-detail {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 720px) {\r\n    .explore-items {\r\n        grid-template-columns: 1fr 1fr;\r\n        gap: 10px;   \r\n    }\r\n\r\n    .header__title {\r\n        font-size: 3em;\r\n    }\r\n\r\n    .nav__item {\r\n        font-size: 2em;\r\n    }\r\n}\r\n@media screen and (min-width: 992px) {\r\n    \r\n    .explore-items {\r\n        display: grid;\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n        gap: 14px;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    main {\r\n      max-width: 1200px;\r\n      display: block;\r\n      margin: auto auto;\r\n    }\r\n\r\n    .hero {\r\n        background-image: linear-gradient(\r\n        115deg,\r\n        rgba(230, 230, 230, 0.8),\r\n        rgba(177, 177, 177, 0.7)\r\n      ),url("./images/hero1-xl.jpg");\r\n    }\r\n  }\r\n  ',""]),n.exports=r},function(n,r,e){var t=e(0),i=e(14);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1};t(i,o);n.exports=i.locals||{}},function(n,r,e){(r=e(1)(!1)).push([n.i,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n/* Document\r\n   ========================================================================== */\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n html {\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    -webkit-text-size-adjust: 100%;\r\n    /* 2 */\r\n  }\r\n  /* Sections\r\n     ========================================================================== */\r\n  /**\r\n   * Remove the margin in all browsers.\r\n   */\r\n  body {\r\n    margin: 0;\r\n  }\r\n  /**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n  main {\r\n    display: block;\r\n  }\r\n  /**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n  h1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n  }\r\n  /* Grouping content\r\n     ========================================================================== */\r\n  /**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n  hr {\r\n    box-sizing: content-box;\r\n    /* 1 */\r\n    height: 0;\r\n    /* 1 */\r\n    overflow: visible;\r\n    /* 2 */\r\n  }\r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  pre {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n  }\r\n  /* Text-level semantics\r\n     ========================================================================== */\r\n  /**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n  a {\r\n    background-color: transparent;\r\n  }\r\n  /**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n  abbr[title] {\r\n    border-bottom: none;\r\n    /* 1 */\r\n    text-decoration: underline;\r\n    /* 2 */\r\n    text-decoration: underline dotted;\r\n    /* 2 */\r\n  }\r\n  /**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n  b,\r\n  strong {\r\n    font-weight: bolder;\r\n  }\r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  code,\r\n  kbd,\r\n  samp {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n  }\r\n  /**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n  small {\r\n    font-size: 80%;\r\n  }\r\n  /**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n  sub,\r\n  sup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n  }\r\n  sub {\r\n    bottom: -0.25em;\r\n  }\r\n  sup {\r\n    top: -0.5em;\r\n  }\r\n  /* Embedded content\r\n     ========================================================================== */\r\n  /**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n  img {\r\n    border-style: none;\r\n  }\r\n  /* Forms\r\n     ========================================================================== */\r\n  /**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n  button,\r\n  input,\r\n  optgroup,\r\n  select,\r\n  textarea {\r\n    font-family: inherit;\r\n    /* 1 */\r\n    font-size: 100%;\r\n    /* 1 */\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    margin: 0;\r\n    /* 2 */\r\n  }\r\n  /**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n  button,\r\n  input {\r\n    /* 1 */\r\n    overflow: visible;\r\n  }\r\n  /**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n  button,\r\n  select {\r\n    /* 1 */\r\n    text-transform: none;\r\n  }\r\n  /**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n  button,\r\n  [type='button'],\r\n  [type='reset'],\r\n  [type='submit'] {\r\n    -webkit-appearance: button;\r\n  }\r\n  /**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n  button::-moz-focus-inner,\r\n  [type='button']::-moz-focus-inner,\r\n  [type='reset']::-moz-focus-inner,\r\n  [type='submit']::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n  }\r\n  /**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n  button:-moz-focusring,\r\n  [type='button']:-moz-focusring,\r\n  [type='reset']:-moz-focusring,\r\n  [type='submit']:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n  }\r\n  /**\r\n   * Correct the padding in Firefox.\r\n   */\r\n  fieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n  }\r\n  /**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n  legend {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    color: inherit;\r\n    /* 2 */\r\n    display: table;\r\n    /* 1 */\r\n    max-width: 100%;\r\n    /* 1 */\r\n    padding: 0;\r\n    /* 3 */\r\n    white-space: normal;\r\n    /* 1 */\r\n  }\r\n  /**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n  progress {\r\n    vertical-align: baseline;\r\n  }\r\n  /**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n  textarea {\r\n    overflow: auto;\r\n  }\r\n  /**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n  [type='checkbox'],\r\n  [type='radio'] {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    padding: 0;\r\n    /* 2 */\r\n  }\r\n  /**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n  [type='number']::-webkit-inner-spin-button,\r\n  [type='number']::-webkit-outer-spin-button {\r\n    height: auto;\r\n  }\r\n  /**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n  [type='search'] {\r\n    -webkit-appearance: textfield;\r\n    /* 1 */\r\n    outline-offset: -2px;\r\n    /* 2 */\r\n  }\r\n  /**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n  [type='search']::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n  }\r\n  /**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n  ::-webkit-file-upload-button {\r\n    -webkit-appearance: button;\r\n    /* 1 */\r\n    font: inherit;\r\n    /* 2 */\r\n  }\r\n  /* Interactive\r\n     ========================================================================== */\r\n  /*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n  details {\r\n    display: block;\r\n  }\r\n  /*\r\n   * Add the correct display in all browsers.\r\n   */\r\n  summary {\r\n    display: list-item;\r\n  }\r\n  /* Misc\r\n     ========================================================================== */\r\n  /**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n  template {\r\n    display: none;\r\n  }\r\n  /**\r\n   * Add the correct display in IE 10.\r\n   */\r\n  [hidden] {\r\n    display: none;\r\n  }\r\n  ",""]),n.exports=r},function(n,r,e){var t=e(0),i=e(16);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1};t(i,o);n.exports=i.locals||{}},function(n,r,e){(r=e(1)(!1)).push([n.i,'.loader {\n    animation: spin 1s infinite linear;\n    border: solid 2vmin transparent;\n    border-radius: 50%;\n    border-right-color: #09f;\n    border-top-color: #09f;\n    box-sizing: border-box;\n    height: 20vmin;\n    left: calc(50% - 10vmin);\n    position: relative;\n    top: calc(50% - 10vmin);\n    width: 20vmin;\n    z-index: 1;\n}\n.loader:before {\n    animation: spin 2s infinite linear;\n    border: solid 2vmin transparent;\n    border-radius: 50%;\n    border-right-color: #3cf;\n    border-top-color: #3cf;\n    box-sizing: border-box;\n    content: "";\n    height: 16vmin;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 16vmin;\n}\n.loader:after {\n    animation: spin 3s infinite linear;\n    border: solid 2vmin transparent;\n    border-radius: 50%;\n    border-right-color: #6ff;\n    border-top-color: #6ff;\n    box-sizing: border-box;\n    content: "";\n    height: 12vmin;\n    left: 2vmin;\n    position: absolute;\n    top: 2vmin;\n    width: 12vmin;\n}\n@keyframes spin {\n    100% {\n        transform: rotate(360deg);\n   }\n}\n',""]),n.exports=r},function(n,r,e){var t=e(0),i=e(18);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1};t(i,o);n.exports=i.locals||{}},function(n,r,e){(r=e(1)(!1)).push([n.i,'.explore-detail {\n    margin-top: 10px;\n}\n\n.detail-explore__info {\n    text-align: left;\n}\n\n.detail-explore__info li {\n    position: relative;\n    display: block;\n    padding: 0.6em;\n    text-decoration: none;\n}\n\n.detail-explore__title {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    font-size: 24px;\n    line-height: 3em;\n}\n\n.detail-explore__menu {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.detail-explore__menu li {\n    position: relative;\n    display: block;\n    padding: 0.6em;\n    text-decoration: none;\n}\n\n.detail-explore__menu h4 {\n    font-weight: bold;\n    font-size: 1.37em;\n}\n\n.category {\n    padding: 0.3em 1em;\n    color: white;\n    background-color: #1A374D;\n    margin-right: 2px;\n    border: 1px solid transparent;\n    border-radius: 0 0 10px 0;\n}\n\n.detail-explore__review {\n    max-width: 100%;\n    font-size: 1em;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    text-align: center;\n}\n\n.detail-explore__review-item {\n    margin-bottom: 1.5em;\n    padding: 1em 1em;\n}\n\n.detail-explore__review-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1em 1em;\n    border-bottom: 1px solid #1A374D;\n}\n\n.detail-explore__review-name {\n    font-weight: bold;\n    display: flex;\n    color: #1A374D;\n    font-size: 14px;\n    align-items: center;\n}\n\n.detail-explore__review-date {\n    font-size: 0.8em;\n    font-weight: lighter;\n}\n\n.detail-explore__review-body {\n    padding: 1em;\n    text-align: left;\n}\n\ninput[type="text"] {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin: 6px 0 16px;\n    resize: vertical;\n}\n\ninput[type="text"]:focus {\n    outline: none !important;\n    border:1px solid #1A374D;\n}\n\n.form-label {\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    color: #1A374D;\n    font-size: 14px;\n}\n\n.form-box {\n    text-align: left;\n}\n\n.submit-btn{\n    background-color: #1A374D;\n    color: white;\n    padding: 12px 20px;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    align-items: flex-start;\n    border-radius: 5%;\n}\n',""]),n.exports=r}]);