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
    // const users = await prisma.user.findMany({
    //     select: {
    //         name: true,
    //         age: true,
    //     },
    //     orderBy: {
    //         age: "desc",
    //     },
    //     take: 2, // Limit
    //     skip: 1, // Offset
    // });
    // console.log(users);
    // const users = await prisma.user.findMany({
    //     where: {
    //         // name: { not: "Shyam" },
    //         // name: { in: ["Kyle", "Sally"] },
    //         // name: { notIn: ["Kyle", "Sally"] },
    //         // age: { lt: 20 },
    //         // email: { contains: "@test.com" },
    //         // email: { endsWith: "@abc.com" },
    //         // email: { startsWith: "shyam" },
    //         email: { startsWith: "shyam" },
    //     },
    // });
    // console.log(users.length);
    // const users = await prisma.user.findMany({
    //     where: {
    //         writtenPosts: {
    //             // every: {
    //             //     title: 'Test'
    //             // },
    //             // some: {
    //             //     title: 'Test'
    //             // },
    //             none: {
    //                 title: 'Test'
    //             }
    //         }
    //     }
    // })
    // console.log(users);
    // const users = await prisma.post.findMany({
    //     where: {
    //         author: {
    //             is: {
    //                 age: 27
    //             }
    //         }
    //     },
    // });
    // console.log(users);
    // const user = await prisma.user.update({
    //     where: {
    //         email: "sally@test2.com",
    //     },
    //     data: {
    //         email: "sally@test3.com",
    //     },
    // });
    // console.log(user);
    // const user = await prisma.user.update({
    //     where: {
    //         name: 'Kyle',
    //         email: "kyle@test.com"
    //     },
    //     data: {
    //         userPreference:{
    //             connect: {
    //                 id: '19051123-4ff1-4045-962b-76d96f83e1d0'
    //             }
    //         }
    //     }
    // });
    // console.log(user)
    // const user = await prisma.user.findFirst({
    //     where: {
    //         name: "Kyle",
    //     },
    //     include: {
    //         userPreference: true,
    //     },
    // });
    // console.log(user);
    // const user = await prisma.user.update({
    //     where: {
    //         name: "Kyle",
    //         email: "kyle@test.com",
    //     },
    //     data: {
    //         userPreference: {
    //             disconnect: true,
    //         },
    //     },
    // });
    // console.log(user);
    // const user = await prisma.user.delete({
    //     where: {
    //         email: 'kyle@test.com'
    //     }
    // });
    // console.log(user)
    // await prisma.user.deleteMany();
    // await prisma.userPreference.deleteMany();
}

main()
    .catch((e) => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
