"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yeoman_generator_1 = __importDefault(require("yeoman-generator"));
const chalk_1 = __importDefault(require("chalk"));
const yosay_1 = __importDefault(require("yosay"));
module.exports = class extends yeoman_generator_1.default {
    prompting() {
        this.log(yosay_1.default(`Welcome to the ${chalk_1.default.red('generator-unity-vscode')} generator!`));
    }
    writing() {
        this.fs.copy(this.templatePath('microsoft.unity.analyzers.1.10.0'), this.destinationPath('NuGet/microsoft.unity.analyzers.1.10.0'));
        this.fs.copy(this.templatePath('omnisharp.json'), this.destinationPath('omnisharp.json'));
        this.fs.copy(this.templatePath('.editorconfig'), this.destinationPath('.editorconfig'));
    }
    install() { }
};
