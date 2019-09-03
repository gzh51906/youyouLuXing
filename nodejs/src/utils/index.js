<<<<<<< HEAD
exports.formatData = function formData({code=1,data=[],msg='',success=true}={}){
    if(code === 0){
       success=false;
=======
exports.formatData = function formData({
    code = 1,
    data = [],
    msg = 'success'
} = {}) {


    if (code === 0) {
        msg = 'fail';
>>>>>>> laochen
    }

    return {
        code,
        data,
<<<<<<< HEAD
        msg,
        success
    }
=======
        msg
    }
}

const {
    create,
    verify
} = require('./token');

exports.token = {
    create,
    verify
>>>>>>> laochen
}