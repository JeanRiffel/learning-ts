"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getCustomers_1 = __importDefault(require("../models/getCustomers"));
var Index = function (req, res) {
    var value = getCustomers_1.default();
    res.send(value);
};
exports.default = Index;
