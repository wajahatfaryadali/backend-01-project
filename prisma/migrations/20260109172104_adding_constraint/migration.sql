/*
  Warnings:

  - A unique constraint covering the columns `[userID,movieID]` on the table `Watchlist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Watchlist_userID_movieID_key" ON "Watchlist"("userID", "movieID");
