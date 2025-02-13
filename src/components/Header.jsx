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
        <div className="flex items-center gap-2">
        <Link href="/">
            <img src="/engineer.png" alt="logo" className="h-10 w-10"/>
        </Link>
          <Link href="/">
              <h1 className="text-2xl">FIXIT</h1>
          </Link>
        </div>
        <div>
          <nav>
              <ul className="flex pt-1">
                  {loggedInUser ? (
                    <li className="flex gap-4">
                      <Link href='/profile'>
                      <img src="/user.png" alt="logo" width={20} height={20} className="h-10 w-10"/>
                      </Link>
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
        </div>
      </header>
  );
}

export default Navbar

