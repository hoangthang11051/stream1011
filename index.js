const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views', './views');

app.get('/', (req,res)=> {
  res.render('home')
}); // neu co 1 cau lenh thi k can dau {}

app.listen(3000, () => console.log('server bat dau chay'));
