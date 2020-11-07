# clean-architecture-node-typescript
クリーンなTODOリストAPIを Express + TypeScriptで作成しました。

# 初回設定
- `npm install`
- `cp .env.template .env` (設定を自分のものに書き換える)
- `npm install -g db-migrate`
- mysqlで今回指定しデータベースを作成
- `db-migrate up`

# サーバーの起動方法
- `npm run dev`

# 補足
Swaggerを使ってAPIドキュメントを作成しています。  
[Swagger Editor](https://editor.swagger.io/)などを使うとAPIの確認が容易になるかもしれません。

# 参考記事
[Clean ArchitectureをNode.js+Typescriptで実装してみる](https://blog.spacemarket.com/code/clean-architecture-node/)