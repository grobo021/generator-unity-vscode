import Generator from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Welcome to the ${chalk.red('generator-unity-vscode')} generator!`)
    );
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
  }

  install() {}
};
