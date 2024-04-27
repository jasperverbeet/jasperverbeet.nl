import SectionLatest from "@/modules/home/SectionLatest";
import SectionSocials from "@/modules/home/SectionSocials";

const HomePage = async () => {
  return (
    <>
      <SectionSocials />
      <SectionLatest />
    </>
  );
};

export default HomePage;
