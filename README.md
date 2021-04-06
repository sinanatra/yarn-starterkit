# HTML Starterkit

This repo is my own starterkit for HTML projects. It works with Webpack and BrowserSync and allows to work with SCSS and ES6.

## Requirements

+ [Node.js](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable).

## Installation

1. In Terminal, go to your production folder:
```
cd path/to/my/folder
```

2. Clone this repository with the submodules
```
git clone https://github.com/sinanatra/scss-starterkit.git NAME-OF-MY-FOLDER
cd NAME-OF-MY-FOLDER
git clone --depth=1 https://github.com/sinanatra/scss-starterkit.git src/scss
rm -rf ./src/scss/.git
```

3. Install dependencies with yarn
```
yarn
```

4. You just have to type `yarn watch` now.

5. At the end of your coding process, you can run the `yarn build` command.
