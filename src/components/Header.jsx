import Link from "next/link";
import { auth } from "@/auth";
import Logout from "@/components/SignOut";
import { getUsersByEmail } from "@/queries/users";

const Navbar = async () => {
  const session = await auth();
  const loggedInUser = session?.user;

  if (!loggedInUser) {
    return (
      <header className="flex justify-between bg-gray-300 text-black p-2">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img src="/engineer.png" alt="logo" className="h-10 w-10" />
          </Link>
          <Link href="/">
            <h1 className="text-2xl">FIXIT</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-5 pt-1">
            <Link href="/signin">Signin</Link>
            <Link href="/signup">Signup</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </nav>
      </header>
    );
  }

  const user = await getUsersByEmail(loggedInUser.email);
  const profileLink = user?.service ? "/profile_em" : "/profile_cu";

  return (
    <header className="flex justify-between bg-gray-300 text-black p-2">
      <div className="flex items-center gap-2">
        <Link href="/">
          <img src="/engineer.png" alt="logo" className="h-10 w-10" />
        </Link>
        <Link href="/">
          <h1 className="text-2xl">FIXIT</h1>
        </Link>
      </div>
      <nav>
        <ul className="flex items-center gap-4 pt-1">
          <Link href={profileLink}>
            <img src="/user.png" alt="Profile" className="h-10 w-10" />
          </Link>
          <Logout />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
