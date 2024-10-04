import axios, { AxiosRequestConfig } from "axios";

export interface Response<T>{
    count:number,
    next:string | null,
    results:T[]
}

 export const apiClient=axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'808a2b389b5241bb99b1d8bd52c106b9'
    }
})


class ApiClient<T>{
    endpoint:string

    constructor(endpoint:string){
        this.endpoint=endpoint
    }

    getAll=(config?:AxiosRequestConfig)=>{
       return apiClient.get<Response<T>>(this.endpoint,config).then(res=>res.data)
    }
    
    get=()=>{
        return apiClient.get<T>(this.endpoint).then(res=>res.data)
    }
}

export default ApiClient