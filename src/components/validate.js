export const validate = (data , type) =>{

    const errors ={};                                  // bayad yek obj khali bedahim n reshte chon ba reshte nemitavanad error ha ra besazad

    if(!data.email){
        errors.email = "Email required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Email address is invalid"
    }else{
        delete errors.email
    }

    if(!data.password){
        errors.password = "Password required"
    }else if(data.password.length < 6){
        errors.password = "Password should be 6 or more"
    }else{
        delete errors.password
    }


    if(type === "signup"){                             // if k neveshtim yani harmoghe sign Up bod bya in 3 ro ham hamrah on 2 tay bala anjam bede vali age type chiz dege bod faghat on 2 tay balaro anjam bede
        
        if(!data.name.trim()){                        // trim faseleha v spase ha ra hazf mikonad ma faghat sharte yek esme sade ra gozashtim
            errors.name = "Username required"
        }else{
            delete errors.name
        }

        if(!data.confirmPassword){
            errors.confirmPassword = "Confirm your password"
        }else if(data.confirmPassword !== data.password){
            errors.confirmPassword = "Password dont match"
        }else{
            delete errors.confirmPassword
        }

        if(data.isAccepted){
            delete errors.isAccepted
        }else{
            errors.isAccepted = "Accept the terms !!!!"
        }
    }


    return errors;                                    //bayad hatman return ra anjam bedahim
}