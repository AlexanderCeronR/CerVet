const {connection} = require('./conexiondb');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/',(req, res)=>{
    const filePath = path.join(__dirname,'..','index.html');
    res.sendFile(filePath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor ejecutado en http://localhost:${PORT}`)
})

app.post('/solicitud/cita',(req, res)=>{
    const {nombreMascota, razaMascota, edadMascota, fechaCita, horaCita, nombreDueno} = req.body;

    //creamos la consulta para la inserción de la base de datos

    const sql = 'INSERT INTO citas (nombre_mascota, raza_mascota, edad_mascota, fecha_cita, hora_cita, nombre_dueno) VALUES (?,?,?,?,?,?)';
    connection.query(sql, [nombreMascota, razaMascota, edadMascota, fechaCita, horaCita, nombreDueno], (err, result)=>{
        if(err){
            throw err;
        }
        console.log('Registro Exitoso');
        res.send('Cita agendada Correctamente');
    });
});
