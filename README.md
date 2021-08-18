# 我的餐廳清單
提供精選餐廳評價星等、簡介、聯絡電話、地址...等相關資訊
- [X] 建立資料庫功能
* Create
   - [X] 新增餐廳資料
* Read
  - [X] 於首頁瀏覽所有餐廳
  - [X] 瀏覽個別餐廳
* Update
  - [X] 修改餐廳資料
* Delete
  - [X] 刪除餐廳資料  
<br>

- [X] 搜尋功能
  - [X] 搜尋餐廳名稱
  - [X] 搜尋餐廳類別

## 安裝方式 Installation
1. 將原始碼安裝至指定位置，你可以採取下列其中一種方法
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

2. 安裝伺服器至指定位置
   1. 下載 [MongoDB Community Server](https://www.mongodb.com/try/download/community) （專案使用 for MacOS的 4.2.15 版本），並解壓縮至指定位置，重新命名為「mongodb」
   2. 建立資料庫建立資料庫記錄資料夾，命名為「mongodb-data」
   3. 可以與專案原始碼資料夾不同位置，但「mongodb」(資料庫伺服器資料夾)及「mongodb-data」(資料庫資料夾)

<br>

### 開啟『終端機 Termial.app』，或在Ｗindows開啟『命令提示字元 cmd』執行以下指令  
<br>

1. 移動至伺服器資料夾「mongodb」，下一層執行檔資料夾「bin」

    ```
    cd 「mongodb(MongoDB Community Server) 資料夾路徑」\bin
    ```

2. 執行下列指令，啟動資料庫伺服器

- 瀏覽網站時，要保持資料庫伺服器運作，否則網站將無法讀取資料

   ```
   ./mongod --dbpath 「mongodb-data」(資料庫資料夾)完整路徑
   ```  
<br>

### 另外開啟一個終端機視窗，並保持資料庫伺服器持續執行中
<br>

1. 移動到專案資料夾  

```
cd 「專案資料夾路徑」 (資料夾名稱間的空格要用「 / 」隔開)
```
2. 建立種子資料，執行指令後，於終端機看到 `「播種完畢 <(￣︶￣)>」`訊息，即可按下 ` ⌃ (Ctrl) + c` 退出程式
```
npm run seed
```

3. 安裝本專案使用的套件
```
npm install
```
4. 輸入執行指令，開啟本地端應用程式伺服器及資料庫伺服器
```
npm run dev
```
- 當終端機顯示訊息 `NOW, Express is start listening on http://localhost:3000` ，表示已成功開啟應用程式伺服器
- 當終端機顯示訊息 `MongoDB Connected  ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡  ，表示已成功連線至資料庫伺服器

5. 於瀏覽器開啟網站
```
http://localhost:3000/
```

6. 記得在終端機按下 ` ⌃ (Ctrl) + c` 或是在命令提示字元 `ctrl + c` ，關閉本應用程式伺服器及資料庫伺服器

## 開發工具版本

後端框架
- Node.js: 10.15.0
  <br><br>
  語意化路由套件
  - Method-override: 3.0.0

後端套件
- Node Express: 4.17.1

資料庫
- Mongoose: 5.13.7

模板引擎
- Express Handlebars: 5.3.3

前端框架
- Bootstrap: 4.6.0

  Bootstrap JavaScript plugin
    - JQuery: 3.6.0
    - Popper: 2.9.1

圖示套件
- Font Awesome: 5.15.4
