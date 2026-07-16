# Yuto Portfolio

Yuto個人の転職活動・キャリア紹介を目的としたポートフォリオサイトです。公開用に一般化した職務経験、スキル、AIを活用した個人開発作品を掲載しています。

## サイトの目的

- 採用担当者にエンジニアとしての経験やスキルを伝える
- 個人開発したゲームやWebアプリを紹介する
- 企画、設計、実装、テスト、公開まで取り組めることを伝える
- 作品だけでなく、課題解決の過程や設計意図を伝える

## 使用技術

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- ESLint
- Vercelへのデプロイを想定

## ローカル起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## ビルド方法

```bash
npm run build
```

## Vercelへの公開方法

1. GitHubへリポジトリを作成します。
2. VercelでそのリポジトリをImportします。
3. Framework PresetはNext.jsを選びます。
4. Build Commandは通常 `npm run build` のままで問題ありません。
5. 公開前に `src/data/site.ts` の `baseUrl` を本番URLへ変更します。

## 内容の変更場所

### 表示名を変更する

`src/data/profile.ts` の `displayName` を変更します。

### 本名表示へ切り替える

`src/data/profile.ts` の `fullName` に本名を入れ、`useFullName` を `true` にします。活動名表示へ戻す場合は `false` にします。

### 肩書きを変更する

`src/data/profile.ts` の `jobTitle` と `developerLabel` を変更します。

### 自己紹介を変更する

`src/data/profile.ts` の `introduction`、`shortBio`、`strengths`、`values` を編集します。

### 職務経験を変更する

`src/data/experiences.ts` の配列を編集します。勤務先名や顧客名を出さず、業務内容、担当工程、成果を中心に書く構成です。

### 作品情報を変更する

`src/data/projects.ts` を編集します。作品を追加する場合は `slug` が重複しないようにしてください。`links.github`、`links.demo`、`links.store` は `enabled` を `false` にするとボタンを非表示にできます。

### スキル情報を変更する

`src/data/skills.ts` を編集します。自己評価の星やパーセントではなく、用途を短く書く方針です。

### SNSリンクを変更する

`src/data/socialLinks.ts` を編集します。未公開のリンクは `enabled: false` にします。

### Yu Studioの表示名を変更または非表示にする

`src/data/profile.ts` の `studioName` を変更します。表示しない場合は `showStudioName` を `false` にします。

### 画像の差し替え方法

画像は `public/images/profile/`、`public/images/projects/`、`public/images/common/` にあります。差し替える場合は同じファイル名で上書きするか、`src/data/profile.ts` と `src/data/projects.ts` の画像パスを変更します。

### 問い合わせフォームを本番対応する方法

現在のフォームは `src/components/ContactForm.tsx` のサンプルUIです。Formspreeなどを使う場合は、`handleSubmit` の処理を送信APIに置き換えます。メールやSNSの表示は `src/data/profile.ts` と `src/data/socialLinks.ts` で管理します。

### 独自ドメインを設定する方法

VercelのProject SettingsからDomainsを開き、使用するドメインを追加します。その後、`src/data/site.ts` の `baseUrl` を独自ドメインに変更します。

## 公開前に確認すべき点

- 本名を公開するか決めたか
- メールアドレスやSNSリンクが正しいか
- 職務経験に勤務先名、顧客名、機密情報が含まれていないか
- 作品画像に個人情報や未公開情報が映っていないか
- GitHubリポジトリに秘密情報が含まれていないか
- `npm run lint` と `npm run build` が成功するか
- `src/data/site.ts` の `baseUrl` が本番URLになっているか
- OGP画像、favicon、プロフィール画像を必要に応じて差し替えたか

詳細な変更手順は `docs/customization-guide.md`、公開前の確認項目は `docs/content-checklist.md`、公開時の注意点は `docs/privacy-guide.md` を確認してください。
