"use server";

import { redirect } from "next/navigation";

export async function search(formData: FormData) {
  const keyword = formData.get("keyword");

  if (typeof keyword !== "string" || !keyword) {
    redirect("/");
  }

  redirect(`/search/${keyword}`);
}
