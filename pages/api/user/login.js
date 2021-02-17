import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    try {
        const phone = req.body.phone;
        const password = req.body.password;

        const user = await User.find({ phone: phone, password: password });
        res.status(201).json({ success: true, data: user })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false });
    }
}