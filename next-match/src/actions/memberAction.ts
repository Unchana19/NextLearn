"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { UserFilters } from "@/types";
import { Photo } from "@prisma/client";
import { addYears } from "date-fns";
import { getAuthUserId } from "./authAction";

export async function getMembers(searchParams: UserFilters) {
  const session = await auth();
  if (!session?.user) return null;

  const ageRange = searchParams?.ageRange?.toString()?.split(",") || [18, 100];
  const currentDate = new Date();
  const minDob = addYears(currentDate, -ageRange[1] - 1);
  const maxDob = addYears(currentDate, -ageRange[0]);

  let orderBySelector = searchParams?.orderBy || "updated";
  if (orderBySelector === "undefined") {
    orderBySelector = "updated";
  }

  const selectedGender = searchParams?.gender?.toString()?.split(",") || [
    "male",
    "female",
  ];

  try {
    return prisma.member.findMany({
      where: {
        AND: [
          { dateOfBirth: { gte: minDob } },
          { dateOfBirth: { lte: maxDob } },
          { gender: { in: selectedGender } },
        ],
        NOT: {
          userId: session.user.id,
        },
      },
      orderBy: { [orderBySelector]: "desc" },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getMemberByUserId(userId: string) {
  try {
    return prisma.member.findUnique({
      where: { userId },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getMemberPhotosByUserId(userId: string) {
  const member = await prisma.member.findUnique({
    where: { userId },
    select: {
      photos: true,
    },
  });

  if (!member) return null;

  try {
    return member.photos.map((p) => p) as Photo[];
  } catch (error) {
    console.log(error);
  }
}

export async function updateLastActive() {
  const userId = await getAuthUserId();

  try {
    return prisma.member.update({
      where: { userId },
      data: { updated: new Date() },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
