import Form from "@/components/Form";

export const metadata = {
  title: "create a new prompt",
};
const CreatPromptPage = () => {
  return <Form type={"Create"} data={{ prompt: "", tag: "" }} />;
};

export default CreatPromptPage;
