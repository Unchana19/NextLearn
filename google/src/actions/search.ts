"use server";

import { redirect } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export async function search(formData: FormData) {
  const search = formData.get("search");

  if (typeof search !== "string" || !search) {
    redirect("/");
  }

  redirect(`/search/web?searchTerm=${search}`);
}
