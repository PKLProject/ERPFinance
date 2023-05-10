"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var solid_js_1 = require("solid-js");
var gmbr_png_1 = require("../assets/gmbr.png");
var erp_png_1 = require("../assets/erp.png");
var org_png_1 = require("../assets/org.png");
var user_png_1 = require("../assets/user.png");
var kunci_png_1 = require("../assets/kunci.png");
var user_png_2 = require("../assets/user.png");
var call_png_1 = require("../assets/call.png");
var service_1 = require("../Service/service");
var App = function () {
    var _a = solid_js_1.createSignal(gmbr_png_1["default"]), image = _a[0], SetImage = _a[1];
    var _b = solid_js_1.createSignal(erp_png_1["default"]), imagee = _b[0], SetImagee = _b[1];
    var _c = solid_js_1.createSignal(org_png_1["default"]), imaage = _c[0], SetImaage = _c[1];
    var _d = solid_js_1.createSignal(user_png_1["default"]), iimage = _d[0], SetIimage = _d[1];
    var _e = solid_js_1.createSignal(kunci_png_1["default"]), images = _e[0], SetImages = _e[1];
    var _f = solid_js_1.createSignal(user_png_2["default"]), imagge = _f[0], SetImagge = _f[1];
    var _g = solid_js_1.createSignal(call_png_1["default"]), imaaage = _g[0], SetImaaage = _g[1];
    var _h = solid_js_1.createSignal(), inputValue = _h[0], setInputValue = _h[1];
    var _j = solid_js_1.createSignal(), inputValue1 = _j[0], setInputValue1 = _j[1];
    var hasil = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('username ->', inputValue());
            console.log('password ->', inputValue1());
            service_1.login({ 'username': inputValue(), 'password': inputValue1() }).then(function (data) {
                console.log('result-login ->', data);
            });
            return [2 /*return*/];
        });
    }); };
    return (React.createElement("div", null,
        React.createElement("div", { "class": 'persegi' },
            React.createElement("div", { "class": 'xs' }),
            React.createElement("img", { src: image(), alt: "Alternative Text", "class": "ya", elementtiming: '', fetchpriority: 'high' }),
            React.createElement("img", { src: imagee(), alt: "Alternative Text", "class": "apa", elementtiming: '', fetchpriority: 'high' }),
            React.createElement("img", { src: imaage(), alt: "Alternative Text", "class": "ok", elementtiming: '', fetchpriority: 'high' }),
            React.createElement("div", { "class": 'efg' },
                React.createElement("p", null, "Already have an account?"),
                React.createElement("input", { type: "username", placeholder: "        Username", "class": "input input-bordered w-full max-w-xs", onChange: (function (e) { setInputValue(e.target.value); }) }),
                React.createElement("img", { src: iimage(), alt: "Alternative Text", "class": "ta", elementtiming: '', fetchpriority: 'high' }),
                React.createElement("input", { type: "alamat", placeholder: "        Alamat", "class": "input input-bordered w-full max-w-xs", onChange: (function (e) { setInputValue(e.target.value); }) }),
                React.createElement("img", { src: imagge(), alt: "Alternative Text", "class": "ju", elementtiming: '', fetchpriority: 'high' }),
                React.createElement("input", { type: "telepon", placeholder: "        Telepon", "class": "input input-bordered w-full max-w-xs", onChange: (function (e) { setInputValue(e.target.value); }) }),
                React.createElement("input", { type: "password", placeholder: "        Password", "class": "input input-bordered w-full max-w-xs", onChange: (function (f) { setInputValue1(f.target.value); }) }),
                React.createElement("img", { src: images(), alt: "Alternative Text", "class": "ba", elementtiming: '', fetchpriority: 'high' }),
                React.createElement("div", null,
                    React.createElement("button", { "class": "btn btn-wide msk", onclick: hasil }, "Registrasi"))))));
};
exports["default"] = App;

//# sourceMappingURL=register.js.map
