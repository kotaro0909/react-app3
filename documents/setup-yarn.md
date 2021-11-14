# yarnのインストール
reactの勉強中にあわせてstorybookの勉強を考えた。storybookはyarnベースで動かすみたいなためyarnをインストールすることにした。

```bash
# yarnは色々使いそうなのでグローバルにインストールする
npm install -g yarn
```

# yarnコマンドのメモ

```bash
# 初期化 (package.jsonが作成される)
yarn init

# package.jsonのモジュールインストール (≒npm install)
yarn

# モジュールのインストール (≒npm install --save)
yarn add <moduleName>

# モジュールのインストール devDependencies (≒npm install <moduleName> --dev)
yarn add <moduleName> --dev
```
