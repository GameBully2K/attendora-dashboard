'use strict';

const dotenv = require('dotenv');
dotenv.config({ path: 'C:\\Users\\hp\\Desktop\\attendora-dashboard\\.env' });

const mysql = require('mysql2/promise');
const fs = require('fs');

console.log('Current working directory:', process.cwd());

console.log('DB_SSL_KEY:', process.env.DB_SSL_KEY);
console.log('DB_SSL_CERT:', process.env.DB_SSL_CERT);
console.log('DB_SSL_CA:', process.env.DB_SSL_CA);

const connectionConfig = {
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
};

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(connectionConfig);
    console.log('Connected to database');
    return connection;
  } catch (err) {
    console.error('Error connecting to database:', err);
    throw err;
  }
}

async function student() {
  try {
    const connection = await connectToDatabase();
    const [rows, fields] = await connection.execute('select NumeroCarteRFID, Prenom_etd, Nom_etd from Etudiant where filiere = "MTI"');
    console.log('Result:', rows);

    if (rows.length > 0) {
      console.log('First student:', rows[0]);
      console.log('First student name:', rows[0].Prenom_etd);
    }
  } catch (err) {
    console.error('Error fetching student data:', err);
  }
}

student();
