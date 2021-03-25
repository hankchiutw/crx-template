#### *DEPRECATED*
You should use [create-krome-app](https://www.npmjs.com/package/create-krome-app) to start your chrome extension project.

---

# Welcome to crx-template 👋
![Version](https://img.shields.io/github/package-json/v/hankchiutw/crx-template?label=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/hankchiutw/crx-template/blob/main/LICENSE)

> project description

## Usage
By default, content script would be injected manually. If you want it to be loaded automatically, modify `manifest.json` with:
```json
"content_scripts": [
  {
    "matches": ["https://*/*"],
    "js": ["content.js"]
  }
],
```

## Development

```sh
yarn start
yarn build
yarn bump
```

## Author

👤 **hankchiutw**

* Website: https://hankchiu.tw
* Twitter: [@hankchiutw](https://twitter.com/hankchiutw)
* Github: [@hankchiutw](https://github.com/hankchiutw)
* LinkedIn: [@hankchiutw](https://linkedin.com/in/hankchiutw)

## Show your support

Give a ⭐️ if this project helped you!
