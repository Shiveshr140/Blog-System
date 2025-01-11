import { useUser } from "../../contexts/UserContext";

function UserName() {
  const { username } = useUser();

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default UserName;
