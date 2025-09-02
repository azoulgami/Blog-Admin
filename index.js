import express from "express"
import bodyParser from "body-parser";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url"; 

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



let articles=[
    `<div class="a"><a href="/deafult-blog"><h3>The Mercy of Prophet Muhammad (PBUH): A Blessing for His Ummah</h3><h6>November 7, 2024</h6></a></div>`,
];
let questions=[
    `<div class="qa"><a href="/deafult-q&a"><h3>He fasts during Ramadan, but he does not pray. What is the ruling on his fasting?</h3><h6>March 12, 2014</h6></a></div>`,
]

//links
app.get("/",(req,res)=> {
    res.render("index.ejs",{articles,questions});
});
app.get("/add", (req, res) => {
  res.render("add.ejs");
});
app.get("/answer", (req, res) => {
  res.render("answer.ejs");
});
app.get("/all-articles", (req, res) => {
  res.render("all-articles.ejs",{articles});
});
app.get("/all-questions", (req, res) => {
  res.render("all-questions.ejs",{questions});
});


app.get("/deafult-blog", (req, res) => {
    const title="The Mercy of Prophet Muhammad (PBUH): A Blessing for His Ummah";
    const content="As-salāmu ʿalaykum. Know that our Prophet ﷺ is the purest mercy sent to all creation (21:107): his nature was gentleness (3:159), his character the highest (68:4), and his heart overflowed with concern for the believers (9:128). He strove to pull people away from the Fire like a man grasping them before the edge, praying for his Ummah until he wept and saying, “my Ummah, my Ummah,” and his Lord promised to please him regarding us. So recognize this blessing by loving him, sending abundant ṣalawāt upon him, following his Sunnah in compassion and justice, and clinging to what he left—the Qur’an and his Sunnah—so that we may all share in the mercy he brought.";
    const date="November 7,2024";
  res.render("deafult-blog.ejs",{date,title,content});
});
app.get("/deafult-q&a", (req, res) => {
    const question="He fasts during Ramadan, but he does not pray. What is the ruling on his fasting?";
    const answer="Prayer is the pillar of Islam and abandoning it is a major sin. The one who fasts while neglecting prayer undermines the very foundation of his worship. His fasting may be considered valid in outward form, but it is void of reward, for fasting without prayer is an empty ritual. It is upon such a person to repent sincerely and establish the daily prayers, for only then does his fasting carry its true meaning and acceptance.";
    const date="March 12,2024";
  res.render("deafult-q&a.ejs",{date,question,answer});
});


app.post("/submit",(req,res)=>{
    const title=req.body["title"];
    const content=req.body["content"]
    const date=new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date());
    const name=fileName(title);
    const html=`<div class="a"><a href="/${name}"><h3>${title}</h3><h6>${date}</h6></a></div>`;
    articles.unshift(html);
    
    

    fs.writeFile(`views/${name}.ejs`,`<%- include("./partials/blog.ejs") %>` , (err) => {
        if (err) {
            console.error("Error writing file:", err);
             return res.status(500).send("Failed to save file");
        }
    });
    app.get(`/${name}`,(req,res)=>{
        res.render(`${name}.ejs`,{date, title,content});
    });

    res.redirect("/");
});

app.post("/answer",(req,res)=>{
    const question=req.body["question"];
    const answer=req.body["answer"]
    const date=new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date());
    const name=fileName(question);
    const html=`<div class="a"><a href="/${name}"><h3>${question}</h3><h6>${date}</h6></a></div>`;
    questions.unshift(html);


    fs.writeFile(`views/${name}.ejs`,`<%- include("./partials/question.ejs") %>` , (err) => {
        if (err) {
            console.error("Error writing file:", err);
             return res.status(500).send("Failed to save file");
        }
    });
    app.get(`/${name}`,(req,res)=>{
        res.render(`${name}.ejs`,{date, question ,answer});
    });


    res.redirect("/");
});


    


app.listen(port,()=> {
    console.log(`Server ${port}`);
});





//helpers
function fileName(name) {
  return name
    .trim()
    .replace(/\s+/g, "-")         // spaces → dashes
    .replace(/[^a-zA-Z0-9.-]/g, ""); // remove weird characters
}