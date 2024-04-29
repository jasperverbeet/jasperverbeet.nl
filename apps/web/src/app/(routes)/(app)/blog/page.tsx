import SectionArchive from "@/modules/home/SectionArchive";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive",
};

export const revalidate = 1800; // 30 minutes

const BlogArchivePage: React.FC = () => {
  return (
    <>
      <SectionArchive />
    </>
  );
};

export default BlogArchivePage;
