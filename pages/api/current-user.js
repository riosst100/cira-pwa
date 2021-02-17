import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            res.status(400).json({ success: false });
            break;
        case 'POST':
            try {
                const userid = req.body.userid
                const user = await User.findById(userid);
                res.status(201).json({ success: true, current_user: user })
            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}