# [MagicalDiary](https://magical-diary.netlify.app/login)


---

## 環境構築

1. `git clone https://github.com/Conken-NitKit/MagicalDiary.git && cd MagicalDiary`
2. `yarn install`
3. `yarn start`

---

## ブランチ

### 命名

- スタイリング
  `git branch ui/{ページ名}`
- ロジック
  `git branch logic/{ページ名}`
- 修正
  `git branch fix/{ページ名}`

### 補足

- 各自のブランチに push 後は Develop ブランチにプルリクを送ってください
- 現状ESlintとprettierによる自動テストを実行しています. [husky](https://github.com/Conken-NitKit/MagicalDiary/tree/Develop/.husky)
