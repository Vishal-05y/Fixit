import { doSocialSignIn } from '@/app/actions';

const SocialSignIn = () => {
    return (
        <div className="rounded-lg">
        <div className='pt-2'>
            <form action={doSocialSignIn}>
                <div className='flex gap-6 pt-5'>
                    <button type='submit' name='action' value='google' className='w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Google
                    </button>
                    <button type='submit' name='action' value='github' className='w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        GitHub
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
}
export default SocialSignIn;