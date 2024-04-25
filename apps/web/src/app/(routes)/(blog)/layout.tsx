import Header from "@/app/_shared/components/Header";

const BlogLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default BlogLayout;
