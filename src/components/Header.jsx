import Link from "next/link";
import { auth } from "@/auth";
import Logout from "@/components/SignOut";
import { getUsersByEmail } from "@/queries/users";

const Navbar = async () => {
  const session = await auth();
  const loggedInUser = session?.user;

  if (!loggedInUser) {
    return (
      <header className="group relative bg-gray-800 text-gray-300 px-10 py-3 transition-all shadow-xl overflow-hidden">
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
            <ul className="flex gap-7 text-xl font-medium">
              <Link href="/signin">SignIn</Link>
              <Link href="/signup">SignUp</Link>
              <Link href="/contact">Contact</Link>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  const user = await getUsersByEmail(loggedInUser.email);
  const profileLink = user?.service ? "/profile_em" : "/profile_cu";

  return (
    <header className="group relative bg-gray-800 text-gray-300 px-10 py-3 transition-all shadow-xl overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href="/">
            <img src="/engineer.png" alt="logo" className="h-12 w-12" />
          </Link>
          <Link href="/">
            <h1 className="text-3xl font-bold">FIXIT</h1>
          </Link>
        </div>
        <div >
          <ul className="flex items-center gap-5 text-lg font-medium">
            <Link href={profileLink} className="hover:opacity-80">
              <img src="/user.png" alt="Profile" className="h-10 w-10 rounded-full border-2 border-gray-400 bg-gray-700" />
            </Link>
            <Logout />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

