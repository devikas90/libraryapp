const express = require('express');
const signinRouter = express.Router();
function router(data){

    
        signinRouter.get('/',function(req,res){
            res.render("signin",{
                data,
                title:'Library',
               
            });
});


return signinRouter;
}

module.exports=router;