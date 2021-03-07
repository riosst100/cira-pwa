import { useRouter } from 'next/router'

const UserProfile = () => {
	const router = useRouter()
	return <div>Ini halaman user profile {router.query.id}</div>
};

export default UserProfile;