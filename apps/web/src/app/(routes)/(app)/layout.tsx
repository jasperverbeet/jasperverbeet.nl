import Header from "@/modules/root/components/Header";

const BlogLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default BlogLayout;
