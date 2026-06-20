const prisma = require('../db/db');

async function main() {
    const count = await prisma.demandRecord.count();
    console.log(count);
}

main();