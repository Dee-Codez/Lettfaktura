const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//Middleware
app.use(cors());
app.use(express.json()); //access the response


//Routes

//Create Article

app.post("/articles", async (req, res) => {
    try {
        const {descr} = req.body;
        const newArticle = await pool.query("INSERT INTO articles (descr) VALUES($1) RETURNING *", [descr]);
        res.json(newArticle.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//Get All Article

app.get("/articles", async (req, res) => {
    try {
        const allArticles = await pool.query("SELECT * FROM articles");
        res.json(allArticles.rows);
    } catch (error) {
        console.error(error.message);
    }

})

//Get An Article

app.get("/articles/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const articles = await pool.query("SELECT * FROM articles WHERE article_id = $1",[id]);
        res.json(articles.rows[0]);
    } catch (error) {
        console.error(error.message);
    }

})

//Update An Article 

app.put("/articles/:id",async(req,res) => {
    try {
        const {id} = req.params;
        const {descr} = req.body;
        const updateArticle = await pool.query("UPDATE articles SET descr = $1 WHERE article_id = $2",[descr,id]);
        res.json("Todo Updated");
    } catch (error) {
        console.error(error.message);
    }
})

//Delete An Article

app.delete("/articles/:id",async(req,res) => {
    try {
        const {id} = req.params;
        const deleteArticle = await pool.query("DELETE FROM articles WHERE article_id = $1",[id]);
        res.json("Todo Deleted");
    } catch (error) {
        console.error(error.message);
    }
})


app.listen(5000, () => {
    console.log('Server listening on port 5000');
}); 