import { db } from "@/lib/prisma";
import { auth , clerkClient} from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import {checkUser} from "@/lib/checkUser";



