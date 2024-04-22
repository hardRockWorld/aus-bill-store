import { Pill } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 w-full border-b border-s-zinc-200 bg-zinc-100 py-2">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Pill />
        </Link>
        <Link className={buttonVariants()} href="/sign-in">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
