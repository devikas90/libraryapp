const express = require('express');
const addauthorRouter = express.Router();
function router(data){


    
        addauthorRouter.get('/',function(req,res){
            res.render("addauthors",{
                data,
                title:'Library',
});
});

return addauthorRouter;
}
module.exports=router;