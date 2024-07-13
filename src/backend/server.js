const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3001; // Porta para o servidor

const pool = new Pool({
    user:'nuvrecrutador',
    host: '186.202.152.178',
    database: 'nuvrecrutador',
    password: 'Nuvpesquisa12!',
    port: 3306,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-responses', async (req, res) => {
    const { user_id, responses } = req.body;

    try {
        await pool.query('BEGIN');
        
        for (const [question_id, response] of Object.entries(responses)) {
            if (Array.isArray(response)) {
                for (const option_id of response) {
                    await pool.query(
                        'INSERT INTO responses (user_id, question_id, option_id) VALUES ($1, $2, $3)',
                        [user_id, question_id, option_id]
                    );
                }
            } else {
                await pool.query(
                    'INSERT INTO responses (user_id, question_id, response_text) VALUES ($1, $2, $3)',
                    [user_id, question_id, response]
                );
            }
        }

        await pool.query('COMMIT');
        res.status(200).send('Responses submitted successfully');
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error(error);
        res.status(500).send('Error submitting responses');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
