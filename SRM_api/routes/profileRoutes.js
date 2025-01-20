const express = require("express");
const multer = require("multer"); // ファイルアップロード用ライブラリ
const router = express.Router();

// ファイルアップロードの設定
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // 保存先フォルダ
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // 一意のファイル名
  },
});
const upload = multer({ storage });

let profiles = []; // プロフィールデータを一時的に保存する

// プロフィールを作成するAPI
router.post("/", (req, res) => {
  const newProfile = {
    id: profiles.length + 1, // プロフィールID（自動増加）
    name: req.body.name, // 氏名
    age: req.body.age, // 年齢
    education: req.body.education, // 最終学歴
    career: req.body.career, // 職務経歴
    resume: null, // 履歴書ファイル
    careerSheet: null, // 職務経歴書ファイル
  };
  profiles.push(newProfile); // 新しいプロフィールを追加
  res.json(newProfile); // 作成したプロフィールを返す
});

// ファイルをアップロードするAPI
router.post("/:id/upload", upload.single("file"), (req, res) => {
  const profile = profiles.find((p) => p.id == req.params.id); // IDに対応するプロフィールを取得
  if (!profile) {
    return res.status(404).json({ message: "Profile not found" }); // 見つからなければエラーを返す
  }

  const fileType = req.body.type; // ファイルの種類（'resume' または 'careerSheet'）
  if (fileType === "resume") {
    profile.resume = req.file.filename; // 履歴書ファイルを登録
  } else if (fileType === "careerSheet") {
    profile.careerSheet = req.file.filename; // 職務経歴書ファイルを登録
  }

  res.json({ message: "File uploaded", profile }); // アップロード完了を返す
});

// プロフィール一覧を取得するAPI
router.get("/", (req, res) => {
  res.json(profiles); // 保存された全てのプロフィールを返す
});

module.exports = router;
