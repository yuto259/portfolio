# カスタマイズガイド

このサイトを自分用に変更する手順です。基本的には `src/data/` 配下のファイルを編集すると、ページ全体に反映されます。

## 1. 表示名を変更する

`src/data/profile.ts` の `displayName` を変更します。サンプルでは `Yuto` です。

## 2. 本名を使用するか決める

本名を表示する場合は `fullName` に本名を入れ、`useFullName` を `true` にします。本名を出さない場合は `useFullName` を `false` のままにします。

## 3. 肩書きを変更する

`jobTitle` と `developerLabel` を編集します。例: `ソフトウェアエンジニア`、`個人開発者`。

## 4. 自己紹介を変更する

`introduction`、`shortBio`、`strengths`、`values` を編集します。採用担当者が短時間で強みを理解できるように、長くしすぎないことをおすすめします。

## 5. 職務経験を追加する

`src/data/experiences.ts` に経歴を追加します。会社名や顧客名を出さず、担当工程、使用技術、工夫したこと、成果を中心に書きます。

## 6. スキルを変更する

`src/data/skills.ts` を編集します。`levels` には `実務経験あり`、`個人開発で使用`、`学習・利用経験あり` を複数指定できます。

## 7. 作品を追加・変更する

`src/data/projects.ts` を編集します。新しい作品を追加する場合は `slug` を半角英数字とハイフンで作成します。詳細ページのURLは `/projects/slug名` になります。

## 8. 画像を差し替える

プロフィール画像は `public/images/profile/`、作品画像は `public/images/projects/` に置きます。外部画像URLへ依存しないよう、ローカルファイルを使います。

## 9. GitHubやSNSのURLを設定する

`src/data/socialLinks.ts` の `href` を変更します。表示しないリンクは `enabled: false` にします。

## 10. 問い合わせ先を設定する

`src/data/profile.ts` の `email` を変更します。メールアドレスを公開しない場合は空文字にします。フォーム送信を有効にする場合は `src/components/ContactForm.tsx` を変更します。

## 11. Yu Studioの表示を変更する

`src/data/profile.ts` の `studioName` を変更します。表示しない場合は `showStudioName` を `false` にします。

## 12. SEO情報を変更する

`src/data/site.ts` の `name`、`description`、`baseUrl`、`ogImage` を変更します。本番公開後は `baseUrl` を実際のURLにしてください。

## 13. ローカルで確認する

```bash
npm run dev
```

`http://localhost:3000` を開き、トップページ、Projects、作品詳細、Experience、About、Skills、Contactを確認します。

## 14. Vercelへ公開する

GitHubへpushしたあと、VercelでリポジトリをImportします。公開前に `npm run lint` と `npm run build` が成功することを確認してください。
