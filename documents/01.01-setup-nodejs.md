# react-app1

# node.jsのバージョン管理ツール
今回はmvn-windowsを使用する。
取得先は https://github.com/coreybutler/nvm-windows/releases

# node.jsをインストール
上でインストールしたmvn-windowsを使ってNode.jsをインストールする。
```bash
# nvm install <version>
# or
# nvm install lts

# 今回はLTSバージョンをインストールする
nvm install lts 

# インストールされているNode.jsのバージョンを確認する
nvm lsit
 16.13.0

# インストール済みのNode.jsから利用するバージョンを指定する
nvm use 16.13.0

# インストールされているNode.jsのバージョンを確認する
nvm lsit
  * 16.13.0 (Currently using 64-bit executable)

# node -v
node -v
v16.13.0
```
