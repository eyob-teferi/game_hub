import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'808a2b389b5241bb99b1d8bd52c106b9'
    }
})