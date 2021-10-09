const express = require('express');
const authorsRouter = express.Router();
function router(data){


var authors=[
    {
        title:'Joseph Barbera',
        impwork:'Tom n Jerry',
        catagory:'Animator',
        img:"jbarbera.jpg"
    },

    {
        title:'Charles Dickens',
        impwork:'Harry Potter',
        catagory:'English Writer',
        img:"charlesdick.jpg"
    },
    {
        title:'Muttath Varkey',
        impwork:'Phidil',
        catagory:'Indian Novelist',
        img:"mvarkey.jpg"
    },
]



authorsRouter.get('/',function(req,res)
{
    res.render("authors",{

    
    data:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/signin',name:'SignIn'},{link:'/signup',name:'SignUp'},{link:'/addbooks',name:'Add Books'}],
        data,title:'Library',authors
});
});
authorsRouter.get('/:id',function(req,res){
    const id=req.params.id;
res.render('author',{

    data:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/signin',name:'SignIn'},{link:'/signup',name:'SignUp'},{link:'/addbooks',name:'Add Books'}],
       data, title:'Library',
        author: authors[id]
})
})
return authorsRouter;
}
module.exports=router;