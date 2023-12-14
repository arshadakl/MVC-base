

const LoginPageLoad = async(req,res)=>{
    res.render('login',{titile:"Login"})
}

const doLogin = async(req,res)=>{
    console.log(req.body);
}

const signupPageLoad= async(req,res)=>{
    res.render('signup',{titile:"Signup"})
}

module.exports={
    LoginPageLoad,
    doLogin,
    signupPageLoad
}