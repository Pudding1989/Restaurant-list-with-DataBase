# 我的餐廳清單
提供台北市8家精選餐廳評分及相關資訊
- [X] 顯示評價星等、簡介、聯絡、地址...等資訊
- [X] 搜尋功能
  - [X] 搜尋餐廳名稱
  - [X] 搜尋餐廳類別

## 安裝方式 Installation
1. 將原始碼安裝指定位置，你可以採取下列其中一種方法
    1. 點選左上方綠色『Code』按鈕，選擇『Download ZIP』下載ZIP檔，並解壓縮至專案資料夾中。
    
    2. 開啟『終端機 Termial.app』，或在Ｗindows 開啟『命令提示字元 cmd』
 
    輸入指令，移動到該專案資料夾位置
    ```
    cd 「專案資料夾路徑」 (資料夾名稱間的空格要用「 / 」隔開)
    ```
    輸入指令將專案clone至專案資料夾
     ```
    git clone git@github.com:Pudding1989/Restaurant-List.git
    ```

開啟『終端機 Termial.app』，或在Ｗindows開啟『命令提示字元 cmd』執行以下指令

2. 安裝 Node Package Manager
```
npm install
```
3. 輸入執行指令，開啟本地端伺服器
```
npm run dev
```
當終端機顯示訊息 `NOW, Express is start listening on http://localhost:3000` ，表示已成功開啟本地端伺服器


4. 於瀏覽器開啟網站
```
http://localhost:3000/
```

5. 記得在終端機按下 `cmd + c` 或是在命令提示字元 `ctrl + c` ，關閉本地端伺服器

## 開發工具版本

後端框架
- Node.js: 10.15.0

後端套件
- Node Express: 4.17.1

模板引擎
- Express Handlebars: 5.3.3

前端框架
- Bootstrap: 4.6.0

  Bootstrap JavaScript plugin
    - JQuery: 3.6.0
    - Popper: 2.9.1

圖示套件
- Font Awesome: 5.15.4
