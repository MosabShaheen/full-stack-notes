import { NextRequest, NextResponse } from "next/server";
import { createNote, db } from "@/lib/drizzle";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const data = await db.insert(createNote).values(body).returning();

    return new NextResponse(
        JSON.stringify({
            message: "Data Added",
            data,
        })
    )
}

// import { NextRequest, NextResponse } from "next/server";
// import { db, createNote } from "@/lib/drizzle";

// export async function POST(request: NextRequest){
//     const body = await request.json();
//     const data = await db.insert(createNote).values(body).returning();

//     return new NextResponse(
//         JSON.stringify({
//             message: "Data Added",
//             data,
//         })
//     )
// }