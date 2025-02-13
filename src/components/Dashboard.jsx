import { auth } from "@/auth";
import { getUserByEmail } from "@/queries/users";

const Dashboard = async () => {

    const session = await auth();
    const loggedInUser = session?.user;
    
    const user = await getUserByEmail(loggedInUser.email);

  return (
    <div className="flex flex-col justify-center items-center p-8">
      {/* Display Workers */}
      <div className="mt-6 w-full max-w-2xl">
          <ul className="space-y-4">
            {loggedInUser? (
              <li className="border p-4 rounded-lg shadow-md">
                <p>Email: {user.email}</p>
                <p>Username: {user.username}</p>
                <p>Phone: {user.phone}</p>
                {
                  user.service ? (
                    <>
                      <p>Category: {user.category}</p>
                      <p>Service: {user.service}</p>
                    </>
                  ) : (
                    <>
                      <p>Street: {user.street}</p>
                      <p>City: {user.city}</p>
                      <p>State: {user.state}</p>
                    </>
                  )
                }
              </li>
            ):(
                <p>Sign in to view workers</p>
            )}
          </ul>
      </div>
    </div>
  );
};

export default Dashboard;




