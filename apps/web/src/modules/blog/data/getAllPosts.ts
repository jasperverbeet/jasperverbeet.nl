import { readdir } from "node:fs/promises";
import { unstable_cache } from "next/cache";
import path from "node:path";
import getPost from "./getPost";

const getAllPosts = unstable_cache(async () => {
  const filenames = await readdir(path.join("src", "posts"));
  return await Promise.all(filenames.map(getPost));
}, ["getAllPosts"]);

export default getAllPosts;
