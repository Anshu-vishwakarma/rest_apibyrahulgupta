const express = require("express");
const port = process.env.PORT || 8000
const app = express();
require("./connection/Connection");
app.use(express.json())
app.use(require("./Routers/Router"));





app.listen(port,()=>{ 
    console.log(`i am listening at the port no ${port}`);
})