const express = require("express"); // Expressを読み込む
const cors = require("cors"); // CORSライブラリを読み込む
const path = require("path"); // ファイルのパスを扱うためのライブラリ

const profileRoutes = require("./routes/profileRoutes"); // プロフィール用のルートをインポート

const app = express(); // Expressアプリを作成

// ミドルウェア（アプリが動くための設定）
app.use(cors()); // フロントエンドからのリクエストを許可
app.use(express.json()); // JSON形式のデータを受け取る
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // アップロードされたファイルを公開

// ルート設定（どのURLにどの処理をするか定義）
app.use("/api/profiles", profileRoutes); // プロフィール用の処理

const PORT = process.env.PORT || 3001; // サーバーを動かすポート番号
app.listen(PORT, () => {
  console.log(`SRM API is running on port ${PORT}`); // サーバーが起動したらメッセージを表示
});
