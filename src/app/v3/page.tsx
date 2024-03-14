'use client'
import React from 'react';
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()
    return (
        <div>
            <h1 style={{paddingTop: '500px'}} onClick={()=>router.push('v3/signin/challenge/pwd')}>dsagsdgsdgdsg</h1>
        </div>
    );
};

export default Page;