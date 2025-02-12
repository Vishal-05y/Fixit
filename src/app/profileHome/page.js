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
            <h1>Hi</h1>
        </div>
    );
}
export default ProfileHomePage;