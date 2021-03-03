import Cookies from 'js-cookie'

export function UserID() {
    const userid = Cookies.get('cira_userid');

    console.log('userid')

    if (userid) {
        return userid;
    }

    return false;
}