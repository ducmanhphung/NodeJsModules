const express = require('express');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, file.fieldname + '-' + Date.now() + '.png');
    },
});

var upload = multer({ storage: storage });

const app = express();

app.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end(
        '<form action="/profile" method="post" enctype="multipart/form-data"> <input type="file" name="avatar" /> <input type="submit" value="Send"/> </form>'
    );
});

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file là 1 file `avatar` được upload
    // req.body sẽ giữ thông tin gắn kèm (vd: text fields), nếu có
    res.status(200).json('OKE');
});

app.listen(8080, () => {
    console.log(`app listen on port: ${8080}`);
});
