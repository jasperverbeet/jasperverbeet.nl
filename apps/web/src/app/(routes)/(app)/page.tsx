import SectionLatest from "@/modules/home/SectionLatest";
import SectionSocials from "@/modules/home/SectionSocials";
import SectionPopular from "@/modules/home/SectionPopular";

const HomePage = async () => {
  return (
    <>
      <SectionSocials />
      <SectionLatest />
      <SectionPopular />
    </>
  );
};

export default HomePage;
