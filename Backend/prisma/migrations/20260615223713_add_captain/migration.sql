-- CreateEnum
CREATE TYPE "CaptainStatus" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "VehicleType" AS ENUM ('car', 'motorcycle', 'auto');

-- CreateTable
CREATE TABLE "Captain" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "socketId" TEXT,
    "status" "CaptainStatus" NOT NULL DEFAULT 'inactive',
    "vehicleColor" TEXT NOT NULL,
    "vehiclePlate" TEXT NOT NULL,
    "vehicleCapacity" INTEGER NOT NULL,
    "vehicleType" "VehicleType" NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Captain_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Captain_email_key" ON "Captain"("email");
