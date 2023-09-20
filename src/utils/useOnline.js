import { useEffect, useState } from "react";
const useOnline=()=>{
const [isonline,setIsonline] = useState(true)

useEffect(()=>{
    window.addEventListener('online',()=>{
        setIsonline(true)
        })
        window.addEventListener('offline',()=>{
            setIsonline(false)
            })
},[])


return isonline;
}
export default useOnline;

//Created custom hook isOnline to check directly status revert back JSX accordingly.