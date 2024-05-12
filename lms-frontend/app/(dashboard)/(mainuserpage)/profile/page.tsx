"use client";

import connectToDB from "@/app/server/dbconfig/dbconfig";
import axios from "axios";
import { GetServerSideProps } from "next";
import { NextRequest } from "next/server";
import User from "./[userId]/page";

connectToDB();

const userIdPage = async ({
    params
}: { params: { userId: string } }) => {



    return (
        <div >
            {/* <User params={params.userId} /> */}
            {params.userId}
        </div>
    );
}

export default userIdPage;