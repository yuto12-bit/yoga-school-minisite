# TEMPLATE_GUIDE.md

実装AIおよび制作担当者向けのガイドドキュメントです。
案件の実装・修正を行う前に必ず確認してください。

---

## ページ構成と役割

| ページ | ファイル | 種別 | 役割 |
|---|---|---|---|
| HOME | `index.html` | 主要 | 初見で何の事業か・何を頼めるか・どこにあるかを伝える |
| SERVICE | `service.html` | 主要 | 最低限のサービス内容・料金目安・利用の流れを見せる |
| CONTACT | `contact.html` | 主要 | 連絡手段を整理して、迷わず問い合わせできる状態にする |
| PRIVACY | `privacy.html` | 付帯 | 個人情報の取り扱いを示す付帯ページ（フッターからのみリンク） |

---

## セクション構成

### HOME (`index.html`)

| 順番 | data-section | クラス | 役割 |
|---|---|---|---|
| 1 | `first-view` | `.p-home-hero` | 店名・業種・対応エリア・主CTAを一瞬で伝える |
| 2 | `mini-about` | `.p-home-about` | 何をしている事業かを1〜2文で説明する |
| 3 | `service-preview` | `.p-home-service` | 代表サービスを2〜3個だけ見せる |
| 4 | `reason-mini` | `.p-home-reason` | 選ばれる理由を3つまで見せる |
| 5 | `business-info` | `.p-home-bizinfo` | 営業時間・定休日・対応エリアを示す |
| 6 | `access-map` | `.p-home-map` | Googleマップ・所在地を示す |
| 7 | `page-links` | `.p-home-pagelinks` | SERVICE / CONTACTへ送る |
| 8 | `contact-strip` | `.p-home-connect` | LINE / 電話 / Instagramなどを並べる |
| - | `footer` | `.l-footer` | ナビ・SNS・Privacyリンク |

### SERVICE (`service.html`)

| 順番 | data-section | クラス | 役割 |
|---|---|---|---|
| 1 | `service-hero` | `.c-page-hero` | サービスページの入口を作る |
| 2 | `main-services` | `.p-service-main` | 主要サービスを3〜5項目で整理する |
| 3 | `price-guide` | `.p-service-price` | 料金目安・要相談・メニューを出す |
| 4 | `simple-flow` | `.p-service-flow` | 利用の流れを3ステップまでで示す |
| 5 | `notes` | `.p-service-notes` | 予約前・問い合わせ前の注意事項を出す |
| 6 | `cta` | `.p-service-cta` | CONTACTへ送る |
| - | `footer` | `.l-footer` | 共通フッター |

### CONTACT (`contact.html`)

| 順番 | data-section | クラス | 役割 |
|---|---|---|---|
| 1 | `contact-hero` | `.c-page-hero` | 問い合わせページの入口を作る |
| 2 | `contact-methods` | `.p-contact-methods` | LINE / 電話 / メール / Instagramを並べる |
| 3 | `before-contact` | `.p-contact-before` | 返信時間・予約注意・相談内容を案内する |
| 4 | `final-cta` | `.p-contact-final-cta` | 最後に問い合わせへ送る |
| - | `footer` | `.l-footer` | 共通フッター・Privacyリンク |

**重要: CONTACTにはAccess / MapとBusiness Infoを入れないこと。場所・営業時間はHOMEで見せる。**

### PRIVACY (`privacy.html`)

| 順番 | data-section | クラス | 役割 |
|---|---|---|---|
| 1 | `privacy-hero` | `.c-page-hero` | ページ入口 |
| 2 | `policy-body` | `.p-privacy-body` | 個人情報の取扱い本文 |
| 3 | `contact-for-policy` | `.p-privacy-contact` | 個人情報に関する問い合わせ先 |
| - | `footer` | `.l-footer` | 共通フッター |

---

## TEMPLATE FIELD 一覧

HTMLコメント `<!-- TEMPLATE FIELD: フィールド名 -->` が差し替え箇所の目印です。

### 全ページ共通

| フィールド名 | 説明 | 差し替え箇所 |
|---|---|---|
| `business_name` | 店名・屋号 | `<title>`, ロゴ, フッター, ローダー, copyright |
| `phone` | 電話番号（ハイフン区切り） | `href="tel:"`, 表示テキスト |
| `address_postal` | 郵便番号（〒なし） | フッター住所 |
| `address_full` | 住所（都道府県〜番地） | フッター住所, HOMEマップ |
| `copyright_year` | 著作権年 | フッターcopyright |
| `ga_id` | Google Analytics 測定ID | GA scriptタグ（2箇所） |
| `canonical_url` | 正規URL（ページごとに異なる） | `<link rel="canonical">` |
| `og_image_url` | OGP画像のフルURL | `<meta property="og:image">` |
| `favicon_path` | faviconのパス | `<link rel="icon">` |
| `site_id` | 案件識別コード | `<body>` の class属性 |

### HOME のみ

| フィールド名 | 説明 |
|---|---|
| `catch_copy` | First Viewのキャッチコピー（h1） |
| `hero_sub` | First Viewのサブテキスト |
| `hero_image_url` | ヒーロー背景画像（pages.cssで設定） |
| `about_text` | Mini Aboutのリード文 |
| `service_01_title` / `_02` / `_03` | サービスプレビューのタイトル |
| `service_01_subtitle` | サービス01のサブタイトル |
| `service_01_text` / `_02` / `_03` | サービスプレビューの説明文 |
| `service_0X_image_path` | サービス画像のパス |
| `service_0X_image_alt` | サービス画像のalt属性 |
| `reason_01_heading` / `_02` / `_03` | 選ばれる理由のタイトル |
| `reason_01_text` / `_02` / `_03` | 選ばれる理由の説明文 |
| `interior_lead` | 店内ギャラリーのリード文 |
| `interior_0X_image_path` | 店内画像のパス（01〜03） |
| `interior_0X_image_alt` | 店内画像のalt（01〜03） |
| `interior_0X_caption` | 店内画像のキャプション（01〜03） |
| `business_hours` | 営業時間 |
| `business_hours_sub` | L.O.などの補足（不要なら削除） |
| `business_closed` | 定休日 |
| `area` | 対応エリア |
| `google_map_embed_url` | GoogleマップのiframeのsrcURL |
| `access_note` | 最寄り駅・徒歩情報 |
| `pagelink_service_label` | Page Linksのサービスへのラベル |
| `pagelink_contact_label` | Page Linksのお問い合わせへのラベル |
| `connect_0X_heading` | Contact Stripの各項目タイトル（01〜03） |
| `connect_0X_text` | Contact Stripの各項目説明文 |
| `connect_0X_btn_label` | Contact Stripのボタンラベル |
| `reserve_url` | 外部予約サイトのURL |
| `line_url` | LINE友だち追加URL（`https://lin.ee/...`） |
| `instagram_url` | InstagramのURL |

### SERVICE のみ

| フィールド名 | 説明 |
|---|---|
| `service_hero_en` | ページヒーローの英字ラベル |
| `service_hero_title` | ページヒーローのタイトル（h1） |
| `service_hero_sub` | ページヒーローのサブテキスト |
| `service_0X_name` | サービス名（h2、01〜05） |
| `service_0X_price` | 価格目安 |
| `service_0X_desc` | サービスの詳細説明文 |
| `service_0X_image_path` | サービス画像パス |
| `service_0X_image_alt` | サービス画像alt |
| `price_0X_name` | 料金項目名（01〜03） |
| `price_0X_price` | 料金 |
| `price_0X_note` | 備考・補足 |
| `price_note_bottom` | 料金表下部の注意書き |
| `flow_step_0X_title` | 利用の流れ ステップタイトル（01〜03） |
| `flow_step_0X_text` | 利用の流れ ステップ説明文 |
| `note_0X_heading` | 注意事項タイトル（01〜03） |
| `note_0X_text` | 注意事項説明文 |
| `cta_title` | CTA セクションのタイトル |
| `cta_lead` | CTA セクションのリード文 |
| `cta_note` | CTA 下部の補足 |

### CONTACT のみ

| フィールド名 | 説明 |
|---|---|
| `contact_hero_en` | ページヒーローの英字ラベル |
| `contact_hero_title` | ページヒーローのタイトル（h1） |
| `contact_hero_sub` | ページヒーローのサブテキスト |
| `contact_methods_lead` | Contact Methods のリード文 |
| `contact_line_text` | LINE カードの説明文 |
| `contact_tel_text` | 電話カードの説明文 |
| `contact_instagram_text` | Instagram カードの説明文 |
| `before_contact_0X_text` | ご連絡前の案内テキスト（01〜03） |
| `final_cta_text` | Final CTA のリード文 |
| `final_cta_phone` | Final CTA の電話番号表示 |

### PRIVACY のみ

| フィールド名 | 説明 |
|---|---|
| `privacy_company_name` | プライバシーポリシー本文内の事業者名 |
| `privacy_date` | プライバシーポリシーの制定日 |

---

## CSS構成と変更ルール

| ファイル | 役割 | 変更可否 |
|---|---|---|
| `base.css` | CSS変数・リセット | **`:root`変数のみ変更可** |
| `layout.css` | ヘッダー・ナビ・フッター | 原則変更不可 |
| `components.css` | 再利用UIコンポーネント | 原則変更不可 |
| `pages.css` | ページ固有セクション | **案件差分のみ追記可** |
| `utilities.css` | ユーティリティ・アニメーション | 原則変更不可 |

### CSS変数の変更ルール

1. **テーマ変更** → `base.css` の `:root` 変数値のみを変更する
2. **案件固有の調整** → `pages.css` の末尾に追記する
3. **コンポーネントへの案件差分** → `pages.css` にスコープ付きで追記する（例: `.site--salon .c-btn`）
4. `!important` は絶対に使用しない
5. セレクタ詳細度を低く保つ（4階層以上のネストは禁止）

---

## JSフックのルール

JSからDOM操作するためのフック（セレクタ）は以下のみを使用します。

| フック | 役割 | 変更禁止 |
|---|---|---|
| `[data-js="menu-toggle"]` | ハンバーガーボタン | ✗ 変更不可 |
| `[data-js="mobile-nav"]` | SPナビオーバーレイ | ✗ 変更不可 |
| `[data-js="faq-button"]` | FAQアコーディオン（オプション） | ✗ 変更不可 |
| `.u-reveal` | スクロールリビール | ✗ 変更不可 |
| `[data-anim]` / `[data-anim-delay]` | 要素レベルアニメーション | ✗ 変更不可 |
| `.c-loader` | ページローダー | ✗ 変更不可 |

**デザインスタイルを当てているクラスをJSフックに使わないこと。**
**JSフックとして使うクラスにスタイルを当てないこと。**

---

## CONTACTの連絡導線ルール

CONTACTページは「既存連絡導線の整理」に集中させます。

### 入れてよいもの
- LINE友だち追加
- 電話番号（`tel:` リンク）
- メールアドレス（`mailto:` リンク）
- Instagram DM
- 外部予約サービスへのリンク
- Googleマップへの外部リンク（アクセスの補足として軽く）

### 入れてはいけないもの
- 問い合わせフォーム（GAS・Googleフォーム・新規実装）
- 地図埋め込み（HOMEのAccess/Mapセクションで扱う）
- Business Info（営業時間・定休日 → HOMEで扱う）
- フォームを送信できるように見せる表示

---

## 触ってよい箇所 / 触ってはいけない箇所

### 触ってよい箇所

- `base.css` の `:root` CSS変数の値
- `pages.css` への案件固有CSSの追記
- HTMLの `<!-- TEMPLATE FIELD: ... -->` でマークされたテキスト・URL・画像パス
- `assets/images/` フォルダ内の画像ファイル
- `<body>` の `site--template` クラス（案件IDに変更）
- GAのスクリプトタグ内の測定ID

### 触ってはいけない箇所

- `base.css` / `layout.css` / `components.css` / `utilities.css` の構造・セレクタ
- `main.js` の `data-js` 属性名・クラス名・ロジック
- HTML の `data-section` 属性（セクション判別に使用）
- `SECTION START` / `SECTION END` コメントの構造
- `u-reveal` / `data-anim` のHTML構造（削除は可、変更は不可）
- ナビゲーションのページ構成（HOME/SERVICE/CONTACT/PRIVACY以外を追加しない）

---

## 3ページミニサイトの制約ルール

以下は案件中に追加・変更しないこと。

- 主要ページ（HOME/SERVICE/CONTACT）以外のページを追加しない
- 会社概要・採用・ブログ・FAQ・WORKS ページを追加しない
- 問い合わせフォームを標準実装しない
- CONTACTにBusiness Info（営業時間・定休日）を追加しない
- CONTACTにAccess / Mapを追加しない
- 5ページHPのように作り込みすぎない

---

## 公開前確認項目

### HTML
- [ ] TEMPLATE FIELD がすべて差し替えられている（`○○○○` や `000-0000-0000` が残っていない）
- [ ] `<title>` が全ページで適切に設定されている
- [ ] `canonical` URLが正しいドメインになっている
- [ ] OGPタグが正しく設定されている
- [ ] GAのscriptタグの測定IDが正しい（不要なら削除している）
- [ ] `<body>` のクラスが案件IDになっている（`site--template` のまま放置しない）

### CSS
- [ ] `base.css` の `:root` 変数がテーマに合った値になっている
- [ ] `!important` が使用されていない
- [ ] スマホ表示（360px〜）が崩れていない

### JS
- [ ] ハンバーガーメニューが正しく開閉する
- [ ] スクロールアニメーションが動作する
- [ ] ローダーが表示・非表示になる（不要なら `div.c-loader` を削除している）

### リンク・画像
- [ ] すべてのナビゲーションリンクが正しく機能する
- [ ] `tel:` リンクが正しい番号になっている
- [ ] LINE・Instagram・予約サイトのURLが差し替えられている
- [ ] `href="#"` のプレースホルダーが残っていない
- [ ] すべての画像が表示されている
- [ ] `src="assets/images/..."` のパスが正しい
- [ ] Googleマップの埋め込みURLが差し替えられている（`YOUR_MAP_EMBED_URL` が残っていない）
