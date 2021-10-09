const express = require('express');
const signupRouter = express.Router();
function router(data){


    
        signupRouter.get('/',function(req,res){
            res.render("signup",{
                data,
                title:'Library',
});
});

return signupRouter;
}
module.exports=router;