# null256code / timesblog

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 簡単に説明

- このリポジトリは？ → 個人ブログ [timesblog](https://timesblog.vercel.app/) のソースコード
- Next.jsで構築されたブログ
- CMSはmicroCMSを使用しています。

## 環境構築

### 環境変数

- localはプロジェクトルートに `.env.local` を作成して設定

| key                  | value                |
|----------------------|----------------------|
| MICRO_CMS_SERVICE_ID | microCMSのサービスID  |
| MICRO_CMS_API_KEY    | microCMSのAPIキー     |

## 開発

### npm関連

| コマンド             | 説明                                  |
|---------------------|---------------------------------------|
| `npm run dev`       | <http://localhost:3000> 立ち上がる     |
| `npm run storybook` | <http://localhost:6006> 立ち上がる     |
| `npm run format`    | prettierでフォーマットされる            |
