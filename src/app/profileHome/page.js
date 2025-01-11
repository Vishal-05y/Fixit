import {auth} from '@/auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Logout from '@/components/SignOut';

const ProfileHomePage = async () => {
    const session = await auth();
    if (!session?.user) {
        redirect('/');
    }
    return (
        <div className="mt-20 flex justify-center">
            {
                session?.user?.image && session?.user?.name ? (
                <>
                    <h1>{session?.user?.name}</h1>
                    <Image 
                        src={session?.user?.image} 
                        alt={session?.user?.name} 
                        width={50} height={50} />
                </>
                ) : (<h1>{session?.user?.name}</h1>)
            }
            <h1>Pandagow</h1>
            <Logout/>
        </div>
    );
}
export default ProfileHomePage;