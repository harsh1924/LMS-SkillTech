import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" });

export const ourFileRouter = {
    courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(async ({ req }) => {
            const user = await auth(req);
            if (!user) throw new UploadThingError("Unauthorized");
            return { userId: user.id };
        })
        .onUploadComplete(() => { }),
    courseAttachment: f(['text', 'image', 'video', 'audio', 'pdf'])
    .middleware(async ({ req }) => {
        const user = await auth(req);
        if (!user) throw new UploadThingError("Unauthorized");
        return { userId: user.id };
    })
    .onUploadComplete(() => { }),
    chapterVideo: f({video: {maxFileCount: 1, maxFileSize: '512GB'}})
    .middleware(async ({ req }) => {
        const user = await auth(req);
        if (!user) throw new UploadThingError("Unauthorized");
        return { userId: user.id };
    })
    .onUploadComplete(() => { }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;