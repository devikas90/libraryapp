const express = require('express');
const addbookRouter = express.Router();
function router(data){


    
        addbookRouter.get('/',function(req,res){
            res.render("addbooks",{
                data,
                title:'Library',
});
});

return addbookRouter;
}
module.exports=router;