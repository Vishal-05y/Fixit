import { doSignOut } from "@/app/actions"

const SignOut = () => {
  return (
    <form action={doSignOut}>
      <button className="bg-red-500 my-2 text-white p-2 rounded" type="sumbit">
        SignOut 
      </button>
    </form>
  )
}

export default SignOut