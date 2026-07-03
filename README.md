# Master_3page_Minisite_Template

REMEDORAの「3ページミニサイトプラン」用マスターテンプレートです。

---

## このテンプレートの目的

案件ごとにゼロから作らず、3ページミニサイトの品質・構造を毎回SOP通りに揃えるためのマスターテンプレートです。

- 業種差し替え・テキスト差し替え・画像差し替えをしやすい設計
- Claude Codeなどの実装AIが機械的に編集しやすい構造
- 壊れにくく保守しやすいHTML/CSS/JavaScript

---

## 3ページミニサイトのページ構成

| ファイル | ページ名 | 種別 |
|---|---|---|
| `index.html` | HOME | 主要ページ |
| `service.html` | SERVICE | 主要ページ |
| `contact.html` | CONTACT | 主要ページ |
| `privacy.html` | PRIVACY | 付帯ページ |

### Privacyの扱い

Privacyは主要3ページには含まれません。フッターからのみリンクします。グローバルナビには表示しません。

---

## 案件コピー手順

1. `Master_3page_Minisite_Template` フォルダをコピーして案件フォルダとしてリネームする（例: `salon-shibuya-01`）
2. `TEMPLATE_GUIDE.md` の「TEMPLATE FIELD 一覧」を参照して、差し替え箇所を確認する
3. テキスト・画像・リンクを順番に差し替える（下記手順参照）
4. 公開前チェックリストを確認して納品する

---

## 色・フォント・余白の変更方法

すべて `assets/css/base.css` の `:root` 内のCSS変数で管理しています。

```css
:root {
  --color-bg:      #1a1714;   /* ← 背景色（暗い場合はこれを変更）*/
  --color-primary: #a08a50;   /* ← アクセントカラー（ゴールド）*/
  --color-text:    #e8e3da;   /* ← 本文テキスト色 */
  --font-serif:    "Noto Serif JP", "Yu Mincho", serif;
  --font-sans:     "Noto Sans JP", sans-serif;
}
```

**変更例（明るい和風テーマ）:**
```css
--color-bg:      #faf8f5;
--color-text:    #2c2420;
--color-primary: #8a6a3a;
```

変数値を変えるだけで全ページにテーマが適用されます。他のCSSファイルは触らなくてよいです。

---

## 画像差し替え手順

`assets/images/` フォルダ内の画像を差し替えます。

| ファイル名 | 用途 |
|---|---|
| `hero.jpg` | HOMEページのFirst Viewヒーロー画像 |
| `service1.jpg` | サービス画像01 |
| `service2.jpg` | サービス画像02 |
| `service3.jpg` | サービス画像03 |
| `interior1.jpg` | 店内・現場写真01 |
| `interior2.jpg` | 店内・現場写真02 |
| `interior3.jpg` | 店内・現場写真03 |
| `ogp.jpg` | OGP画像（SNSシェア時に表示、推奨: 1200×630px） |
| `favicon.ico` | ファビコン |
| `apple-touch-icon.png` | Apple Touch Icon（推奨: 180×180px） |

### 画像の命名規則

- ファイル名はすべて英数字・ハイフンのみ（日本語・スペース不可）
- 拡張子は `.jpg` / `.png` / `.webp` のいずれか
- OGP画像はアスペクト比 1200×630px を推奨

### ヒーロー画像のパスについて

`assets/css/pages.css` の `.p-home-hero` セクションで設定しています。

```css
.p-home-hero {
  background-image: url('../images/hero.jpg');
}
```

---

## テキスト差し替え手順

各HTMLファイルに `<!-- TEMPLATE FIELD: フィールド名 -->` のコメントが入っています。
このコメントを目印に、直後のテキストを差し替えてください。

**主な差し替えフィールド（全ページ共通）:**
- `business_name` — 店名・屋号
- `phone` — 電話番号（`tel:` リンクも合わせて変更）
- `address_postal` — 郵便番号
- `address_full` — 住所
- `copyright_year` — 著作権年
- `ga_id` — Google Analytics ID（不使用の場合はGA scriptタグを削除）
- `canonical_url` — 正規URLのドメイン部分

---

## 連絡導線の差し替え手順

### LINEリンク

```html
<!-- TEMPLATE FIELD: line_url -->
<a href="https://lin.ee/XXXXXXXXX" class="c-connect-item__btn">LINEで友だち追加する</a>
```

### 電話番号

```html
<a href="tel:09012345678" class="c-contact-card__btn">090-1234-5678</a>
```

### Instagramリンク

```html
<!-- TEMPLATE FIELD: instagram_url -->
<a href="https://www.instagram.com/アカウント名/" class="c-contact-card__btn">公式アカウントを見る</a>
```

### 外部予約サイト

`contact.html` の Contact Methods または `index.html` の Contact Strip に追加します。

### Googleマップ

`index.html` の Access / Map セクション内の `<iframe src="...">` を差し替えます。
GoogleマップのURLは `<!-- TEMPLATE FIELD: google_map_embed_url -->` のコメントを目印にしてください。

---

## CONTACTにフォームを標準実装しないこと

3ページミニサイトプランでは、問い合わせフォームを標準実装しません。

- GASフォームを前提にしない
- Googleフォームを標準にしない
- 送信できないフォームを送信できるように見せない
- CONTACTをフォーム中心にしない

CONTACTは「既存連絡導線の整理」です。LINE・電話・Instagram・外部予約サービスなどへの導線を並べてください。

---

## 公開前チェックリスト

### コンテンツ
- [ ] `business_name` がすべてのページで正しく差し替えられている
- [ ] `phone` がすべての箇所で正しく差し替えられている（`href="tel:"`も）
- [ ] `address_postal` / `address_full` が差し替えられている
- [ ] `copyright_year` が差し替えられている
- [ ] `meta description` がすべてのページで差し替えられている
- [ ] `canonical_url` がすべてのページで正しいURLになっている
- [ ] OGP画像（`ogp.jpg`）が配置されている
- [ ] `ga_id` が差し替えられている（不使用の場合はscriptタグを削除している）

### リンク・画像
- [ ] ナビゲーションのリンクがすべて正しく機能している
- [ ] フッターリンク（Privacy含む）が機能している
- [ ] 電話リンク（`tel:`）が正しい番号になっている
- [ ] LINE・Instagram・予約サイトのURLが差し替えられている
- [ ] Googleマップの埋め込みURLが正しい
- [ ] ヒーロー画像が表示されている
- [ ] すべての画像が表示されている（altテキストが設定されている）

### 表示・動作
- [ ] スマホ表示が崩れていない（実機またはDevToolsで確認）
- [ ] ハンバーガーメニューが開閉する
- [ ] ページ間の遷移が正しく動作する
- [ ] ローダーが表示・非表示になる（不要なら削除している）

### SEO・メタ情報
- [ ] すべてのページに`title`タグがある
- [ ] すべてのページに`meta description`がある
- [ ] すべてのページに`canonical`がある
- [ ] OGPタグが設定されている
- [ ] `favicon.ico`が配置されている
