<p align="center">

<a href="https://github.com/generate/generate">
<img height="150" width="150" src="https://raw.githubusercontent.com/generate/generate/master/docs/logo.png">
</a>
</p>

Generate a robots.txt for a web project (uses the robots.txt from HTML5 Boilerplate). This can be run from the command line when Generate is installed globally, or used as a plugin in another generator.

# generate-robots

[![NPM version](https://img.shields.io/npm/v/generate-robots.svg?style=flat)](https://www.npmjs.com/package/generate-robots) [![NPM downloads](https://img.shields.io/npm/dm/generate-robots.svg?style=flat)](https://npmjs.org/package/generate-robots) [![Build Status](https://img.shields.io/travis/generate/generate-robots.svg?style=flat)](https://travis-ci.org/generate/generate-robots)

![generate-robots demo](https://raw.githubusercontent.com/generate/generate-robots/master/docs/demo.gif)

## What is "Generate"?

Generate is a command line tool and developer framework for scaffolding out new GitHub projects using [generators](https://github.com/generate/generate/blob/master/docs/generators.md) and [tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for [gulp](http://gulpjs.com), [base](https://github.com/node-base/base) and [assemble](https://github.com/assemble/assemble) plugins, and much more.

**For more information**:

* Visit the [generate project](https://github.com/generate/generate/)
* Visit the [generate documentation](https://github.com/generate/generate/blob/master/docs/)
* Find [generators on npm](https://www.npmjs.com/browse/keyword/generate-generator) (help us [author generators](https://github.com/generate/generate/blob/master/docs/micro-generators.md))

## Getting started

### Install

**Installing the CLI**

To run the `robots` generator from the command line, you'll need to install [Generate](https://github.com/generate/generate) globally first. You can do that now with the following command:

```sh
$ npm install --global generate
```

This adds the `gen` command to your system path, allowing it to be run from any directory.

**Install generate-robots**

Install this module with the following command:

```sh
$ npm install --global generate-robots
```

### Usage

Run this generator's `default` [task](https://github.com/generate/generate/blob/master/docs/tasks.md#default) with the following command:

```sh
$ gen robots
```

**What you should see in the terminal**

If completed successfully, you should see both `starting` and `finished` events in the terminal, like the following:

```sh
[00:44:21] starting ...
...
[00:44:22] finished ✔
```

If you do not see one or both of those events, please [let us know about it](../../issues).

### Help

To see a general help menu and available commands for Generate's CLI, run:

```sh
$ gen help
```

## Tasks

All available tasks.

### [robots](generator.js#L21)

Generates a `robots.txt` file to the current working directory or specified `--dest`.

**Example**

```sh
$ gen robots
$ gen robots --dest ./foo
```

Visit Generate's [documentation for tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

## About

### Related projects

* [generate-eslint](https://www.npmjs.com/package/generate-eslint): Generate a new `.eslintrc.json` or `.eslintignore` file from a pre-defined or user-defined template. Can be… [more](https://github.com/generate/generate-eslint) | [homepage](https://github.com/generate/generate-eslint "Generate a new `.eslintrc.json` or `.eslintignore` file from a pre-defined or user-defined template. Can be used from the command line when installed globally, or as a plugin in your own generator.")
* [generate-gitignore](https://www.npmjs.com/package/generate-gitignore): Generate a .gitignore file from the command line when Generate's CLI is installed globally, or… [more](https://github.com/generate/generate-gitignore) | [homepage](https://github.com/generate/generate-gitignore "Generate a .gitignore file from the command line when Generate's CLI is installed globally, or use as a plugin or sub-generator in your own generator to make it a continuous part of the build workflow when scaffolding out a new project.")
* [generate-license](https://www.npmjs.com/package/generate-license): Generate a license file for a GitHub project. | [homepage](https://github.com/generate/generate-license "Generate a license file for a GitHub project.")

### Community

Are you using [Generate](https://github.com/generate/generate) in your project? Have you published a [generator](https://github.com/generate/generate/blob/master/docs/generators.md) and want to share your project with the world?

Here are some suggestions!

* If you get like Generate and want to tweet about it, please feel free to mention `@generatejs` or use the `#generatejs` hashtag
* Show your love by starring [Generate](https://github.com/generate/generate) and `generate-robots`
* Get implementation help on [StackOverflow](http://stackoverflow.com/questions/tagged/generate) (please use the `generatejs` tag in questions)
* **Gitter** Discuss Generate with us on [Gitter](https://gitter.im/generate/generate)
* If you publish an generator, thank you! To make your project as discoverable as possible, please add the keyword `generategenerator` to package.json.

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/generate/generate-robots/blob/master/LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.1.30, on August 18, 2016._