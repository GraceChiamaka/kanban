import { TaskDetails } from "@src/components";
import { useRouter } from "next/router";

export default function TasksDetailsPage() {
  const router = useRouter();
  const taskId = router.query?.id;
  return <TaskDetails hide={router.push("/tasks")} taskId={taskId} />;
}
