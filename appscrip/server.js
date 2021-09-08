const express = require('express')
const moment = require('moment')
const { check, validationResult } = require('express-validator');
const cors = require('cors')
const fs = require('fs')
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)


const app = express();

app.use(cors())

app.use(express.json({ extended: false }))


app.get('/',async(req,res)=>{
    try {

        const fileData= await readFileAsync('./history.json', 'utf-8')
        const data = JSON.parse(fileData)
        res.send(data)
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error')
        
    }
})



app.post('/', async (req, res) => {
   
try {
    console.log(req.body,"body me h");
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    const { name, question1, answer1, question2, answer2 } = req.body;

    // answer2=answer2.split

    const data = await readFileAsync('./history.json', 'utf-8')

    if (data.length == 0) {
        var newData = [{
            name,
            question1,
            answer1,
            question2,
            answer2,
            time
        }]
    } else {
        newData = JSON.parse(data)
        newData.unshift({
            name,
            question1,
            answer1,
            question2,
            answer2,
            time
        })

    }
    const jsonData = JSON.stringify(newData, null, 3)

    await writeFileAsync('./history.json', jsonData)

    res.send('saved...')

} catch (err) {
    console.error(err);
    res.status(500).send('Server error!')
}


})






const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`server is running on port ${PORT}`))