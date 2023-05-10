import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";


export async function POST(req, res) {
    try {
        const body = await req.json();
        await dbConn();
        await Contact.create(body);

        return NextResponse.json({
            message:"Message sent SucessFully!"
        },{
            status:200
        });
    } catch (error) {
        return NextResponse.json({
            message:"Serrver error!!!!!!!!"
        },{
            status:500
        });
    }
}