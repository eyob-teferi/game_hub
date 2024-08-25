import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";


export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient=new ApiClient<Genre>('genres')

const useGenres = () => {
  
  return useQuery({
    queryKey: ["genres"],
    queryFn:apiClient.get,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGenres;



