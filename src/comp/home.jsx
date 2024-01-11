'use strict';
const mysql = require('mysql2');
const fs = require('fs');

const conn = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    ssl: {
      key: fs.readFileSync(process.env.DB_SSL_KEY),
      cert: fs.readFileSync(process.env.DB_SSL_CERT),
      ca: fs.readFileSync(process.env.DB_SSL_CA)
    }
  },
  console.log("Connected to database"))

   async function  students () {
    const result = await conn.promise().query('select NumeroCarteRFID from Etudiant where filiere = "MTI" ');
    console.log(result);
    console.log(result[0]);
    firstname = result[0][0].Prenom_etd;
    lastname = result[0][0].Nom_etd;
    console.log(firstname);
    console.log(lastname);
  }

  students()
  