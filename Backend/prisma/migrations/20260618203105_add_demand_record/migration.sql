-- CreateTable
CREATE TABLE "DemandRecord" (
    "id" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "hour" INTEGER NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "vehicleType" "VehicleType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DemandRecord_pkey" PRIMARY KEY ("id")
);
