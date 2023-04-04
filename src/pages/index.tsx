import { type NextPage } from "next";
import WeaponsCard from "~/components/WeaponsCard";

const Home: NextPage = () => {
  // BEFORE
  return (
    <div>
      <h1>Home</h1>
      <WeaponsCard></WeaponsCard>
    </div>
  );
};
export default Home;
