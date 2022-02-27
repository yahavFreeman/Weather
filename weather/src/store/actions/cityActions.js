import { CityService } from "../../services/CityService"

export function getCity(){
    var city
    return async (dispatch)=>{
        try{
            city= CityService.getCity()
            dispatch({type:'SET_USER',city})
        }catch(err){
            console.log(err);
        }
        
    }
}

export function setCity(){
    var city
    return async (dispatch)=>{
        try{
            city= CityService.getCity()
            dispatch({type:'SET_USER',city})
        }catch(err){
            console.log(err);
        }
        
    }
}
