import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publishers";



export interface Game {
  id: number;
  name: string;
  slug: string;
  publishers:Publisher[];
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  description_raw: string;
  rating_top: number;
  genres:Genre[]
}
