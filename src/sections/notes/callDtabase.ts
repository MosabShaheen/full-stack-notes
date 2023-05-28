import { sql } from "@vercel/postgres";

export async function CallDatabase(){
    const rows = await sql`SELECT * FROM note`
    return rows;
}