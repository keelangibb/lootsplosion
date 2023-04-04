import { type NextPage } from "next";
import NavBar from "~/components/NavBar";
import WeaponsCard from "~/components/WeaponsCard";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4">
        <WeaponsCard></WeaponsCard>
      </div>
    </>
  );
};
export default Home;
