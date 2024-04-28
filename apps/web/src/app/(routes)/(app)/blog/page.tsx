import SectionArchive from "@/modules/home/SectionArchive";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive",
};

const BlogArchivePage: React.FC = () => {
  return (
    <>
      <SectionArchive />
    </>
  );
};

export default BlogArchivePage;
