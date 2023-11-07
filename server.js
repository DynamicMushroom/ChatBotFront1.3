// JavaScript source code
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import env from 'dotenv'; 

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = env.PORT || 3000;

const app = express();

//Serve static files from react app
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});

