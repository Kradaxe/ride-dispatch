/*
  Warnings:

  - You are about to drop the column `area` on the `DemandRecord` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `DemandRecord` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleType` on the `DemandRecord` table. All the data in the column will be lost.
  - Added the required column `activeCaptains` to the `DemandRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avgFare` to the `DemandRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickupArea` to the `DemandRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rideRequests` to the `DemandRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DemandRecord" DROP COLUMN "area",
DROP COLUMN "month",
DROP COLUMN "vehicleType",
ADD COLUMN     "activeCaptains" INTEGER NOT NULL,
ADD COLUMN     "avgFare" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "pickupArea" TEXT NOT NULL,
ADD COLUMN     "rideRequests" INTEGER NOT NULL;
