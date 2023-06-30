"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const { createCharacterMap } = require("./utils/createCharacterMap");

module.exports = class extends Generator {
  async prompting() {
    this.log(
      yosay(`Welcome to the cool ${chalk.red("generator-lotkl")} generator!`)
    );

    const prompts = [
      {
        name: "Add / Change base string to compare",
        value: "addBaseString",
        description: "Add / Change base string to compare"
      },
      {
        name: "Create JSON Character Map",
        value: "createJSONCharacterMap",
        description: "Create JSON Character Map"
      }
    ];

    this.nextMenu = await this.prompt({
      type: "list",
      name: "mainMenu",
      message: "Choose an option",
      choices: prompts
    });
  }

  async proceedByMenu() {
    switch (this.nextMenu.mainMenu) {
      case "addBaseString":
        await this._addBaseString();
        break;
      case "createJSONCharacterMap":
        this._createJSONCharacterMap();
        break;
      default:
        this.log("Invalid option");
    }
  }

  async _addBaseString() {
    const prompt = await this.prompt([
      {
        type: "input",
        name: "baseString",
        message: "Enter base string to compare"
      }
    ]);

    this.baseString = prompt.baseString;
    await this._createJSONCharacterMap();
  }

  async _createJSONCharacterMap() {
    const prompt = await this.prompt([
      {
        type: "input",
        name: "targetString",
        message: "Enter target string to create character map"
      }
    ]);
    const targetString = prompt.targetString.replace(/\s/g, "");
    const characterMap = createCharacterMap(this.baseString, targetString);
    this.log(characterMap);
    if (targetString.length === this.baseString.length) {
      this.log(
        chalk.green(
          `Character map created successfully Target: ${targetString.length} Base: ${this.baseString.length}`
        )
      );
    } else {
      this.log(
        chalk.red(
          `Target string length is not equal to base string length. Target: ${targetString.length} Base: ${this.baseString.length} `
        )
      );
    }

    await this._createJSONCharacterMap();
  }

  writing() {
    this.fs.copy(
      this.templatePath("dummyfile.txt"),
      this.destinationPath("dummyfile.txt")
    );
  }

  install() {
    // This.installDependencies();
  }
};
