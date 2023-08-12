import { fetch } from "next/dist/compiled/@edge-runtime/primitives";
import Form from "@/components/Form";

export const metadata = {
  title: "edit prompt",
  description: "update description of your prompt",
};
const EditPromptPage = async ({ params }) => {
  const resp = await fetch(`http://localhost:3000/api/prompt/${params.id}`);
  if (resp && resp.ok) {
    const post = await resp.json();
    return <Form type={"Edit"} data={post} />;
  }
  return <div>Prompt Id is invalid</div>;
};

export default EditPromptPage;
