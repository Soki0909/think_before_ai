# Think Before AI

生成AIサイトを開いたときに、その利用が本当に必要かを問いかけるポップアップを表示する Chrome 拡張機能です。

## 概要

この拡張機能は、`content.js` と `style.css` を使って特定の生成AI サイトを検出し、ユーザーに対して「本当にこのサービスを今使う必要があるか」を問いかける控えめなポップアップを表示します。

## 特徴

- 主要な生成AI サイト（例：ChatGPT、Gemini、Claude）にアクセスしたときに動作します
- シンプルで軽量なコンテンツスクリプトベースの実装

## 対応サイト（manifest から）

- https://chatgpt.com/*
- https://gemini.google.com/*
- https://claude.ai/*

（必要に応じて `manifest.json` の `content_scripts.matches` を編集して対応サイトを追加できます）

## インストール（開発／手元で試す）

1. リポジトリをクローンまたはダウンロードします。

```powershell
# PowerShell 例
git clone https://github.com/Soki0909/think_before_ai.git
cd think_before_ai
```

2. Chrome（または Chromium ベースのブラウザ）で拡張機能ページを開きます。

- アドレスバーに `chrome://extensions/` を入力
- 右上の「デベロッパーモード」をオンにする
- 「パッケージ化されていない拡張機能を読み込む」をクリックし、リポジトリのフォルダ（`think_before_ai`）を選択

3. 対応サイト（例：ChatGPT）を開き、動作を確認します。

## 使い方

対応サイトを開くと自動でポップアップが表示されます。ポップアップでは、サービスの利用前に一呼吸おくよう促すメッセージが出ます。

必要に応じて `content.js` と `style.css` を編集して文言やデザインを変更してください。

## ファイル構成（主要）

- `manifest.json` - 拡張機能メタデータと content script の定義
- `content.js` - ページに注入されるスクリプト（ポップアップの制御）
- `style.css` - ポップアップのスタイル

## 免責事項

この拡張機能はユーザーの判断を助けるための簡易的な通知を提供するものです。情報の正確性や完全性を保証するものではありません。
