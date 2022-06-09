CREATE DATABASE projeto16

CREATE TABLE users (
    "id" serial NOT NULL,
    "name" varchar(255) NOT NULL,
    "email" varchar(255) NOT NULL UNIQUE,
    "password" varchar(255) NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT NOW(),
    CONSTRAINT users_pk PRIMARY KEY (id)
);

CREATE TABLE "sessions" (
    "id" serial NOT NULL,
    "token" text NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "userId" integer REFERENCES users(id),
    CONSTRAINT sessions_pk PRIMARY KEY (id)
);

CREATE TABLE "usersLink" (
    "id" serial NOT NULL,
    "linksId" integer REFERENCES links(id),
    "completeLink" TEXT NOT NULL,
    "shortLink" TEXT NOT NULL,
    "usersId" integer REFERENCES users(id),
    "views" integer NOT NULL DEFAULT '0',
    "createdAt" timestamp NOT NULL DEFAULT NOW(),
    CONSTRAINT "usersLink_pk" PRIMARY KEY (id)
);