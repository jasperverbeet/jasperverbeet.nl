import Footer from "@/modules/root/components/Footer";
import Header from "@/modules/root/components/Header";

const BlogLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="min-h-screen flex-1">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
