import { type PropsWithChildren } from "react";
import NavBar from "./NavBar";

export default function PageLayout(props: PropsWithChildren) {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4">{props.children}</main>
    </>
  );
}
