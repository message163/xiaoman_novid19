# novid-19

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

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
### api

地区 name  
新增确诊 today.confirm
累计确诊 total.confirm
治愈 total.heal
死亡 total.dead

### 总数据

1. 本土现有确诊
 较上日 chindAdd.localConfirmH5
 store.chinaTotal.localConfirm
2. 现有确诊
 较上日 chindAdd.nowConfirm
 chinaTotal.nowConfirm
3. 累计确诊
 较上日 chindAdd.confirm
 chinaTotal.confirm
4. 无症状感染者
  较上日chindAdd.noInfect
  chinaTotal.noInfect
5. 境外输入
  较上日 chindAdd.importedCase
   chinaTotal.importedCase
6. 累计死亡
  较上日 chindAdd.dead
  chinaTotal.dead
