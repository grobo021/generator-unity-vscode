const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red('generator-unity-vscode')} generator!`)
    );

    const prompts = [];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('microsoft.unity.analyzers.1.10.0'),
      this.destinationPath('NuGet/microsoft.unity.analyzers.1.10.0')
    );

    this.fs.copy(
      this.templatePath('omnisharp.json'),
      this.destinationPath('omnisharp.json')
    );

    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.log(
      'Here\'s a link for the guide to Roslyn Analyzers used in .editorconfig: https://docs.microsoft.com/en-us/visualstudio/code-quality/use-roslyn-analyzers?view=vs-2019'
    );
  }

  install() {}
};
