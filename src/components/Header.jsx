import Link from "next/link";
import { auth } from "@/auth";
import Logout from "@/components/SignOut";
import { getUsersByEmail } from "@/queries/users";

const Navbar = async () => {
  const session = await auth();
  const loggedInUser = session?.user;

  if (!loggedInUser) {
    return (
      <header className="bg-gray-300 text-black py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img src="/engineer.png" alt="logo" className="h-12 w-12" />
            </Link>
            <Link href="/">
              <h1 className="text-3xl font-bold">FIXIT</h1>
            </Link>
          </div>
          <nav>
            <ul className="flex gap-6 text-lg font-medium">
              <Link href="/signin" className="hover:text-blue-600">Signin</Link>
              <Link href="/signup" className="hover:text-blue-600">Signup</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  const user = await getUsersByEmail(loggedInUser.email);
  const profileLink = user?.service ? "/profile_em" : "/profile_cu";

  return (
    <header className="bg-gray-300 text-black py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href="/">
            <img src="/engineer.png" alt="logo" className="h-12 w-12" />
          </Link>
          <Link href="/">
            <h1 className="text-3xl font-bold">FIXIT</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            <Link href={profileLink} className="hover:opacity-80">
              <img src="/user.png" alt="Profile" className="h-12 w-12 rounded-full border-2 border-gray-400" />
            </Link>
            <Logout />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

