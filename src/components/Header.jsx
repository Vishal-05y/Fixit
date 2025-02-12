import Link from "next/link"
import Image from "next/image";
import { auth } from "@/auth";
import Logout from '@/components/SignOut';


const Navbar = async () => {
  const session = await auth();
  const loggedInUser = session?.user;
  //console.log(loggedInUser);
  const userName = loggedInUser?.name;

  return (
      <header className="flex justify-between bg-gray-300 text-black p-2">
          <Link href="/">
              <h1 className="text-2xl">FIXIT</h1>
          </Link>
          <nav>
              <ul className="flex pt-1">
                  {loggedInUser ? (
                    <li className="flex">
                      <Logout/>
                    </li>
                  ) : (
                    <>
                    <div className="flex gap-5" >
                        <Link href='/signin'>Signin</Link>
                        <Link href='/signup'>Signup</Link>
                        <Link href='/contact'>Contact</Link>
                    </div>
                    </>
                  )}
              </ul>
          </nav>
      </header>
  );
}

export default Navbar

