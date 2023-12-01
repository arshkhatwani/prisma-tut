import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // const user = await prisma.user.findUnique({
    //     where: {
    //         age_name: {
    //             name: "Kyle",
    //             age: 24,
    //         },
    //     },
    // });
    // console.log(user);

    // const user = await prisma.user.findFirst({
    //     where: {
    //         name: "Sally",
    //     },
    // });
    // console.log(user);

    const users = await prisma.user.findMany({
        select: {
            name: true,
            age: true,
        },
        orderBy: {
            age: "desc",
        },
        take: 2, // Limit
        skip: 1, // Offset
    });
    console.log(users);
}

main()
    .catch((e) => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
