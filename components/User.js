import { useSession, signIn,signOut } from "next-auth/react";
import Image from "next/image";
function User(className) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Image onClick={signOut} src={session.user.image} alt="" width={40} height={40} className={`rounded-full hover:bg-gray-200 cursor-pointer p-1 ml-auto ${className}`} />
      </>
    )
  }
  return (
    <>
      <button onClick={signIn} className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`} >Sign in</button>
    </>
  )
}

export default User;
