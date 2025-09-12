import express from "express"
import multer from "multer"
import path from "path"
const app = express()

app.set("view engine", "ejs")

app.set("views", "webservices/views");


app.use(express.json()); 

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.render("profilepic")
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const upload= multer({ storage: storage })

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.body)
  console.log(req.file)
  res.redirect("/")
})

app.get ("/uploads/:filename", (req, res) => {
    const filename = req.params.filename;
    const location=Path2D.join('./Day9/uploads', filename);
    res.download(location, filename, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("File downloaded successfully");
        }
    })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")

})
