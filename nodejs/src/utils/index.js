exports.formatData = function formData({code=1,data=[],msg='',success=true}={}){
    if(code === 0){
       success=false;
    }

    return {
        code,
        data,
        msg,
        success
    }
}