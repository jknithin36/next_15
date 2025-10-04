import { relations } from "drizzle-orm";
import {
  pgTable,
  varchar,
  boolean,
  timestamp,
  text,
  serial,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/* -------------------------- tables -------------------------- */

export const users = pgTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  emailVerified: boolean("email_verified").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  // Note: $onUpdate requires recent Drizzle; if your version lacks it,
  // update this column from app code or via a DB trigger.
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export const sessions = pgTable(
  "sessions",
  {
    id: varchar("id", { length: 255 }).primaryKey(),
    userId: varchar("user_id", { length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    token: varchar("token", { length: 255 }).notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    ipAddress: varchar("ip_address", { length: 255 }),
    userAgent: text("user_agent"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (t) => ({
    tokenUnique: uniqueIndex("sessions_token_unique").on(t.token),
    userIdx: index("sessions_user_idx").on(t.userId),
  })
);

export const accounts = pgTable(
  "accounts",
  {
    id: varchar("id", { length: 255 }).primaryKey(),
    userId: varchar("user_id", { length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    accountId: varchar("account_id", { length: 255 }).notNull(),
    providerId: varchar("provider_id", { length: 255 }).notNull(),
    password: text("password"), // keep nullable if using OAuth-only
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (t) => ({
    userIdx: index("accounts_user_idx").on(t.userId),
    // prevent the same external account from being linked twice
    providerAccountUnique: uniqueIndex("accounts_provider_account_unique").on(
      t.providerId,
      t.accountId
    ),
  })
);

export const posts = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    description: varchar("description", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    content: text("content").notNull(),
    authorId: varchar("author_id", { length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }), // one author per post
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (t) => ({
    authorIdx: index("posts_author_idx").on(t.authorId),
  })
);

/* ------------------------ relations ------------------------- */

// users → posts (one user has many posts)
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

// posts → user (each post has exactly one author)
export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));

// accounts → user (each account belongs to one user)
export const accountRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));

// sessions → user (each session belongs to one user)
export const sessionRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

/* ------------------------- export --------------------------- */

export const schema = {
  users,
  accounts,
  sessions,
  posts,
};
