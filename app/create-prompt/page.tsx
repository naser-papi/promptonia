import Form from "@/components/Form";

export const metadata = {
  title: "Create your prompt",
};
const CreatPromptPage = () => {
  return <Form type={"Create"} data={{ prompt: "", tag: "" }} />;
};

export default CreatPromptPage;
