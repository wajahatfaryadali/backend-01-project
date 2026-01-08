-- CreateEnum
CREATE TYPE "WatchlistStatus" AS ENUM ('planned', 'watching', 'completed', 'dropped');

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "overviews" TEXT,
    "releaseYear" TEXT NOT NULL,
    "genres" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "runTime" INTEGER,
    "posterURL" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Watchlist" (
    "id" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "movieID" TEXT NOT NULL,
    "status" "WatchlistStatus" NOT NULL DEFAULT 'planned',
    "rating" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_movieID_fkey" FOREIGN KEY ("movieID") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
