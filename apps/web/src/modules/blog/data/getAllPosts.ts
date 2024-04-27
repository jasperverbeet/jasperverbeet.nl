import { readdir } from "node:fs/promises";
import path from "node:path";
import getPost from "./getPost";
import { cache } from "@/modules/root/utils/cache";

const getAllPosts = cache(async () => {
  const filenames = await readdir(path.join("src", "posts"));
  return await Promise.all(filenames.map(getPost));
}, ["getAllPosts"]);

export default getAllPosts;
