// import {
//   pgTable,
//   serial,
//   text,
//   varchar,
//   timestamp,
//   boolean,
// } from "drizzle-orm/pg-core";
// import { drizzle } from "drizzle-orm/vercel-postgres";
// import { InferModel } from "drizzle-orm";
// import { sql } from "@vercel/postgres";

// export const createNote = pgTable("note", {
//   id: serial("id").primaryKey(),
//   title: text("title"),
//   description: varchar("description"),
//   status: boolean("status").default(true).notNull(),
// });

// export type Note = InferModel<typeof createNote>;
// export type NewNote = InferModel<typeof createNote, "insert">;

// export const db = drizzle(sql);
import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const  createNote = pgTable("note", {
  id: serial("id").primaryKey(),
  title: text("title"),
  description: varchar("description"),
  status: boolean("status").default(true).notNull(),
});

export type Note = InferModel<typeof createNote>;
export type NewNote = InferModel<typeof createNote, "insert">;

export const db = drizzle(sql);
