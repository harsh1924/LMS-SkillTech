"use client";

import connectToDB from "@/app/server/dbconfig/dbconfig";
import axios from "axios";
import { GetServerSideProps } from "next";
import { NextRequest } from "next/server";

connectToDB();

const userIdPage = async ({
    params
}: { params: { userId: string } }) => {



    return (
        <div>
            qwkjeq
            {params.userId}
        </div>
    );
}

export default userIdPage;