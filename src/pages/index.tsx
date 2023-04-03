import { type NextPage } from "next";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: weapons } = api.weapons.getAll.useQuery();
  console.log(weapons);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
export default Home;
