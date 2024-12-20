# info
这个仓库用来测试docker的，如果你最近也在学习docker，不妨尝试看一下项目下面的`Dockerfile` 之前在某公司实习的时候看到流水线构建都是这样来弄的。之前的疑惑“为什么运维不问我们开发要build过后的‘产物’”,原来是这些东西都配置好了，只需要知道开发存放代码的git仓库地址就可以了。当然其中还穿插着各种各样的版本发布相关的细节。

同样这个工程里面有一些vue的小case

- 关于nginx：nginx相关的配置我不熟，如果这个示例对你学习有帮助，那是再好不过的事情。

# vue01

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
