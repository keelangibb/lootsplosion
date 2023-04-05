import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { PageLayout } from "~/components/PageLayout";
import WeaponListCard from "~/components/WeaponListCard";

const Home: NextPage = () => {
  const { isLoaded: userIsLoaded, isSignedIn: userIsSignedIn } = useUser();

  if (!userIsLoaded) return <div />;
  return (
    <PageLayout>
      {userIsSignedIn ? (
        <SignOutButton>
          <button className="btn">Sign out</button>
        </SignOutButton>
      ) : (
        <SignInButton mode="modal">
          <button className="btn">Sign in</button>
        </SignInButton>
      )}
      <WeaponListCard />
    </PageLayout>
  );
};
export default Home;
