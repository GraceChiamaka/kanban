import { TaskDetails } from "@src/components";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export default function TasksDetailsPage({ id }) {
  const router = useRouter();
  const taskId = id;
  return <TaskDetails hide={router.push("/tasks")} taskId={taskId} />;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query?.id || null;
  return {
    props: { id },
  };
};
