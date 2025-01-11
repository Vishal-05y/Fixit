import { doSignOut } from "../actions/signinaction";

export default function SignOutPage() {
    const handleSignOut = async (event) => {
        event.preventDefault();
        await doSignOut();
    };

    return (
        <div className="pt-10">
            <div className="mt-10 flex justify-center">
                <form onSubmit={handleSignOut}>
                    <button type="submit" className="bg-black text-white p-2 rounded w-20">
                        Sign Out
                    </button>
                </form>
            </div>
        </div>
    );
}