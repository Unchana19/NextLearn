"use client";

import { NextPage } from "next";
import { useFormState } from "react-dom";
import * as actions from "@/actions";

interface Props {}

const SnippetCreatePage: NextPage<Props> = () => {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <form action={action}>
      <h3 className="font-bold m-5 text-xl">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="border rounde p-2 w-full"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="border rounde p-2 w-full"
          />
        </div>

        {formState.message ? (
          <div className="my-2 p-2 bg-red-200 border roundedd border-red-400">
            {formState.message}
          </div>
        ) : null}

        <button type="submit" className="border rounded-2xl p-3 bg-blue-600">
          <p className="text-white font-bold">Create</p>
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
