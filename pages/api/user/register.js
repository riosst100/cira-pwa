import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                const user = await User.create(req.body);
                res.status(201).json({ authToken: user._id })
            } catch (error) {
                console.log(error)
                res.status(400).json({ authToken: '' });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}