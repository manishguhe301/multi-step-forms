import { ArrowRight, ClipboardList, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tasks = [
  {
    id: 1,
    title: "Create Project",
    description:
      "Create and configure a project with project details, billing, view, and permission settings.",
    icon: ClipboardList,
    path: "/task-1",
  },
  {
    id: 2,
    title: "Create Profile",
    description:
      "Create a user profile by completing the required profile information and preferences.",
    icon: UserRound,
    path: "/task-2",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-100 px-5 py-12 sm:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-4xl flex-col justify-center">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-500">
            Front-End Developer Test
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Choose a task
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Select one of the tasks below to view the implementation.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {tasks.map((task) => {
            const Icon = task.icon;

            return (
              <button
                key={task.id}
                type="button"
                onClick={() => navigate(task.path)}
                className="group flex cursor-pointer flex-col rounded-xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-blue-50">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      className="text-blue-500"
                    />
                  </div>

                  <span className="text-xs font-semibold text-gray-400">
                    TASK {task.id}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-gray-800">
                  {task.title}
                </h2>

                <p className="mt-2 min-h-12 text-sm leading-5 text-gray-500">
                  {task.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-500">
                  View task
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;

