import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

dbConnect();

export default async (req, res) => {
	const authToken = req.headers['auth-token']
	
	if (authToken) {
		const user = await User.findById(authToken);
		res.status(200).json({ user: user })
	} else if (!req.headers.authToken) {
		res.status(200).json({ error: 'Authentication required' })
	} else {
		res.status(200).json({ error: 'Not permitted' })
	}
}
