"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lodash_iselement_1 = __importDefault(require("lodash.iselement"));
var useOutsideClick = function (element, onOutsideClick, active) {
    if (active === void 0) { active = true; }
    if (active) {
        var onMouseUp_1 = function (e) {
            var isInside = element.current && lodash_iselement_1.default(element.current)
                ? element.current.contains(e.target)
                : false;
            onOutsideClick(isInside);
        };
        react_1.useEffect(function () {
            document.addEventListener("mouseup", onMouseUp_1);
            return function () {
                document.removeEventListener("mouseup", onMouseUp_1);
            };
        }, [active]);
    }
};
exports.default = useOutsideClick;
