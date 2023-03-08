import { PrismaClient } from "@prisma/client";
import type { Exercise } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Exercise[]>
) {
  const exercises = await prisma.exercise.findMany();
  res.json(exercises);
}
