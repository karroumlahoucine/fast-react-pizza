import { useSelector } from 'react-redux';

function UserName() {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return null;
  return <p className="hidden text-sm font-semibold md:block">{userName}</p>;
}

export default UserName;
