import { Platform } from "./Platform";

export interface Game {
  description_raw: string;
  slug: string;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
