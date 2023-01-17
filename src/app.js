const express = require("express");
const app = express ();


const path = require("path");
const hbs = require ("hbs");

const port = process.env.port || 3000

// public folder path set for static data or web pages

const staticpath = path.join(__dirname, "../public") 

const temp_path = path.join(__dirname, "../templates/views") 

const partialpath = path.join(__dirname, "../templates/partials") 


app.set('view engine', 'hbs');
app.set("views", temp_path);

app.use(express.static(staticpath));
hbs.registerPartials(partialpath);


// routing

app.get ("/", (req,res)=>{
    res.render("index")
});

app.get ("/about", (req,res)=>{
    res.render("about")
});

app.get ("/weather", (req,res)=>{
    res.render("weather")
});

app.get ("*", (req,res)=>{
    res.render("error",{
        eroorMessage : "opps! page not found"
    })
})

app.listen (port, ()=>{
 console.log(`listening to port ${port}`)
})