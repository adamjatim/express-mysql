Core :
---
1. Node Js (Backend)

Database :
---
1. MySQL (Database)

Packages/Modules :
---
1. Express Js (Framework Based on NodeJs)
2. Express Session (Storing Session Messages)
3. Dotenv (Environment Variables)
4. Nodemon (Monitoring Server)
5. mysql2 (MySQL client for NodeJS)
6. Multer (Middleware multipart/form-data)

Command :
---
  1. `npm init`
  2. `npm i express dotenv nodemon mysql2 multer`

<br>

Basic Routing :
---

```js
app.method(path, handler);
```
`app.use()` bisa menggunakan semua method (GET, POST, dll) sehingga biasa digunakan sebagai middleware

```js
app.use("/", (req, res, next) => {
  res.send('Hello World'); // <-- memberikan respon text kepada client 
});
```

bisa juga lebih spesifik seperti GET dan POST
parameter next hanya bisa digunakan untuk middleware,
jadi tidak perlu dituliskan untuk method yang lebih
spesifik

```js
app.get("/", (req, res) => {
  res.send('Hello from GET');
});

app.post("/", (req, res) => {
  res.send('Hello from POST');
});

```

respon yang diberikan bisa juga dalam bentuk html, atau JSON
```js
app.get("/", (req, res) => {
  res.send('<h1>Hello with HTML</h1>');
});

app.post("/", (req, res) => {
  res.json({
    message: "Hello with JSON"
  });
});

```

untuk menjalankan node server perlu adanya port
```js

app.listen(4000, () => {
  console.log("Server berjalan di port 4000");
});
```

<br>

Struktur Folder Project :
---
./<br>
|-- node_modules<br>
|-- src/<br>              
    |-- config/       <-- setup database<br>
    |-- controller/   <-- sebuah fungsi yang digunakan didalam routes/<br>
    |-- middleware/   <-- middleware<br>
    |-- models/       <-- untuk menyimpan fungsi-fungsi call ke DB<br>
    |-- routes/       <-- mengumpulkan semua PATH, Users, Products, Sales, dst...<br>
    |-- ./index.js    <-- main project<br>
<br>

# HTTP Status Code : 

**Successful Responses (2xx)**
- 200 OK (GET, PATCH)
- 201 Created (POST, PUT)

**Client Error Responses (4xx)**
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 405 Method Not Allowed

**Server error responses (5xx)**
- 500 Internal Server Error

**Source**
- https://rapidapi.com/guides/http-status-code

