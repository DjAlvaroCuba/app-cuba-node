const express  = require('express');
const app = express();
const path = require('path')


app.use(express.static(path.join(__dirname, 'static')));

app.get('/clientes',(req,res)=>
{
    res.sendFile(path.join(__dirname , 'static','clientes.html'))
})
app.get('/productos',(req,res)=>
{
    res.sendFile(path.join(__dirname , 'static','productos.html'))
})


const PORT = process.env.PORT || 3000;
app.listen(PORT , () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
})