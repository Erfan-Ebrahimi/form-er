import { toast } from 'react-toastify';

export const notify = (text , type) =>{
    if(type === "success"){
        toast.success(text)
    }else{                      //masalan agar type error biad ino neshon mide
        toast.error(text)
    }
}