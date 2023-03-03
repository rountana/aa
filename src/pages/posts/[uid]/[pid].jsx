import { useRouter } from 'next/router';
import {useAccount} from "wagmi";
import {Account} from "/src/components/Account";

const Post = () => {
    const { isConnected } = useAccount();

    const router = useRouter();
    const { uid, pid } = router.query;
    return (
        <div>
            <div>{isConnected && <Account />}</div>
            <div>uid: {uid} pid: {pid}</div>
    </div>

    )
};

export default Post;