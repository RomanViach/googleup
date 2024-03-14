import React from 'react';
import {redirect} from "next/navigation";

const Page = () => {
    redirect('/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.com.ua%2F&ec=GAlAmgQ&hl=ru&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S520455428%3A1710420788140155&theme=mn')
    return (
        <div>
        </div>
    );
};

export default Page;