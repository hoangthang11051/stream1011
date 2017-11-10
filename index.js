const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views', './views');
app.use(express.static('public'));
app.get('/', (req,res)=> res.render('home')); // neu co 1 cau lenh thi k can dau {}

app.listen(process.env.POST || 3000, () => console.log('server bat dau chay'));
