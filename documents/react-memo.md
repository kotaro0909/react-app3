# ContextとRecoil
ContextとRecoilはどちらもグローバルで状態管理できる機能を提供するが、Contextは再レンダリングの制御が難しいらしい。
特に制限がない限りは、Recoilを使う方が難しいことを考えずに済むため、Recoilを使う方がよさそうだ。<br/>
[参考リンク](https://zenn.dev/ria/articles/2427d0e998c557cdbb96)

# JsonPlaceHolder
### 利用準備
通信にAxiosを使うのでインストールする
```bash
npm install axios
```

### 一覧データの取得サンプル
```js
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });
```

### id指定のデータ取得サンプル
```js
axios.get("https://jsonplaceholder.typicode.com/users/1").then((result) => {
  console.log(result.data);
});
};
```
