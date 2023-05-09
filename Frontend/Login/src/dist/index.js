"use strict";
exports.__esModule = true;
/* @refresh reload */
var web_1 = require("solid-js/web");
require("./index.css");
require("./forgot/forgot.css");
require("./login/login.css");
var login_1 = require("./login/login");
var root = document.getElementById('root');
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error('Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?');
}
web_1.render(function () { return React.createElement(login_1["default"], null); }, root);

//# sourceMappingURL=index.js.map