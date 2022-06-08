CREATE DATABASE projeto16

CREATE TABLE users (
    "id" serial NOT NULL,
    "name" varchar(255) NOT NULL,
    "email" varchar(255) NOT NULL UNIQUE,
    "password" varchar(255) NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT NOW(),
    CONSTRAINT users_pk PRIMARY KEY (id)
);

CREATE TABLE "links" (
    "id" serial NOT NULL,
    "completeLink" TEXT NOT NULL,
    "shortLink" TEXT NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT NOW(),
    CONSTRAINT links_pk PRIMARY KEY (id)
);

CREATE TABLE "usersLink" (
    "id" serial NOT NULL,
    "linksId" integer REFERENCES links(id),
    "usersId" integer REFERENCES users(id),
    "views" integer NOT NULL DEFAULT '0',
    "createdAt" timestamp NOT NULL DEFAULT NOW(),
    CONSTRAINT "usersLink_pk" PRIMARY KEY (id)
);