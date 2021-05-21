import { useCurrentUser } from '@/hooks/index';
import MemberList from '@/components/member/list';
import Layout from '@/components/layoutSub'

export default function MemberIndexPage() {
  return (
        <Layout title="Member Cira">
            <MemberList />
        </Layout>
    )
}
