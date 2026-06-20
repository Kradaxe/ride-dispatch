-- CreateEnum
CREATE TYPE "RideStatus" AS ENUM ('pending', 'accepted', 'ongoing', 'completed', 'cancelled');

-- CreateTable
CREATE TABLE "BlacklistToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlacklistToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ride" (
    "id" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "fare" DOUBLE PRECISION NOT NULL,
    "status" "RideStatus" NOT NULL DEFAULT 'pending',
    "duration" INTEGER,
    "distance" DOUBLE PRECISION,
    "paymentID" TEXT,
    "orderId" TEXT,
    "signature" TEXT,
    "otp" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "captainId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ride_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlacklistToken_token_key" ON "BlacklistToken"("token");

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_captainId_fkey" FOREIGN KEY ("captainId") REFERENCES "Captain"("id") ON DELETE SET NULL ON UPDATE CASCADE;
