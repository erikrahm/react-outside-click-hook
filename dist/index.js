"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lodash_isElement_1 = __importDefault(require("lodash.isElement"));
var useOutsideClick = function (inside, onOutsideClick, active) {
    if (active === void 0) { active = true; }
    var onMouseUp = function (e) {
        var isInside = Array.isArray(inside)
            ? inside.some(function (element) {
                return !!element &&
                    !!element.current &&
                    lodash_isElement_1.default(element.current) &&
                    element.current.contains(e.target);
            })
            : !!inside &&
                !!inside.current &&
                lodash_isElement_1.default(inside.current) &&
                inside.current.contains(e.target);
        onOutsideClick(isInside);
    };
    react_1.useEffect(function () {
        if (active) {
            document.addEventListener("mouseup", onMouseUp);
            return function () {
                document.removeEventListener("mouseup", onMouseUp);
            };
        }
    }, [active]);
};
exports.default = useOutsideClick;
