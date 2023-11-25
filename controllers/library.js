const Library=require('../models/library')

const postLibraryBooks=async (req,res)=>{
try{
    console.log(req.body)
    const bookname=req.body.bookname
    console.log("bookname>>>",bookname)
    
    const library=await Library.create({
        Bookname:bookname
    })
    res.status(201).json({libraryData:library,"message":"data posted successfully"})
}
catch(err){
    res.status(500).json({err:err,"message":"data post error"})
}
}

const getLibraryBooks=async(req,res)=>{
    try{
        const library=await Library.findAll()
        res.status(200).json({getBooks:library,"message":"fetched all books successfully"})
    }
    catch(err){
        res.status(500).json({err:err,"message":"error in fetching books"})
    }
}

const updateLibraryBooks=async(req,res)=>{
    const id=req.params.id
        console.log("id",id)
    try{
        
        const library=await Library.update({Status:true},{where:{id:id}})
        res.status(200).json({ success: true, message: "updated Successfuly"})
    }    
    catch(err){
        console.log(err);
          return res.status(500).json({ success: true, message: "Failed"})
      }
}



module.exports={postLibraryBooks,getLibraryBooks,updateLibraryBooks}