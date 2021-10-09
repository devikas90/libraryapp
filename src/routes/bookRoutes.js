const express = require('express');
const booksRouter = express.Router();
function router(data){


var books=[
    {
        title:'Tom n Jerry',
        author:'Joseph Barbera',
        genre:'Cartoon',
        img:"book1.jpg"
    },

    {
        title:'Harry Potter',
        author:'Charles Dickens',
        genre:'Fantacy',
        img:"harypotter.jpg"
    },
    {
        title:'Phidil',
        author:'Muttath Varkey',
        genre:'travelog',
        img:"phidil.jpg"
    },
]



booksRouter.get('/',function(req,res)
{
    res.render("books",{

    
    data:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        data,title:'Library',books
});
});
booksRouter.get('/:id',function(req,res){
    const id=req.params.id;
res.render('book',{

    data:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
       data, title:'Library',
        book: books[id]
})
})
return booksRouter;
}
module.exports=router;