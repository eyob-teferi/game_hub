import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";


const useScreenShot=(id:number)=>{
    const apiClient = new ApiClient<Screenshot>(`/games/${id}/screenshots`);
    return useQuery({
        queryKey: ["Game Screenshots",id],
        queryFn: () =>apiClient.getAll(),
      });
}

export default useScreenShot;