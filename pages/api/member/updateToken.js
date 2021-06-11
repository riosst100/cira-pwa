import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { updateAndroidMemberData } from '@/db/index';

const handler = nc();
handler.use(all);

handler.post(async (req, res) => {
    console.log(req.body.token)
    const user = await updateAndroidMemberData(req.db, {
        member_id: req.body.member_id,
        token: req.body.token
    });
    return res.json({ user });
});

export default handler;
