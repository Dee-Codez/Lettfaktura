import { useState,useEffect } from "react"

const UserFeed = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch("https://lettfaktura-backend.vercel.app/users")
            const users = await response.json()
            setUsers(users);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

  return (
    <div>
      <div className="mt-10">
        <div className="flex flex-col items-center">
        <table className="border-separate border-spacing-5 lg:w-[60vw]">
            <thead>
                <tr className="text-4xl text-black">
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody className="text-center text-black ">
                {users && users.map((user, index) => (
                    <tr key={index} className="">
                        <td className="border border-blue-950/20 rounded-full p-2 py-4 text-xl">{user.name}</td>
                        <td className="border border-blue-950/20 rounded-full p-2 py-4 text-xl">{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default UserFeed
