const bodyParser = require('body-parser')
const express=require('express')
const router=express.Router()
const LibraryController=require('../controllers/library')
const path=require('path')
router.use(bodyParser.urlencoded({extendes:false}))
router.use(express.static(path.join(__dirname,'..','views')))

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'))
})

router.post('/Books',LibraryController.postLibraryBooks)
router.get('/Books',LibraryController.getLibraryBooks)
router.put('/Books/:id',LibraryController.updateLibraryBooks)


module.exports=router;