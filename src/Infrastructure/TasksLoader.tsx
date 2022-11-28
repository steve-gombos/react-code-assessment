import { ApiRequest, BadRenderTask, CounterTask, CSSTask, PropPassing, UseStateTask } from "../Tasks";
import "./Task.css"

export const TasksLoader: React.FC = () => {
    const tasks = [
        { name: "Counter", description: "Make the counter reset to 0 when it reaches 5", Component: CounterTask },
        { name: "Use State", description: "Make the text typed in the input show up as text outside the input", Component: UseStateTask },
        { name: "Prop Passing", description: "Make it so the child accepts properties to reveal a hidden message when the button is clicked", Component: PropPassing},
        { name: "API Request", description: "Make a component that renders a collection of data returned from the provided API endpoint", Component: ApiRequest},
        { name: "CSS", description: "Implement the static component shown in reference.png", Component: CSSTask},
        { name: "Bad Render", description: "Make it so that when the parent is rerendered, the counter does not reset", Component: BadRenderTask },
    ];

    return (
        <>
            {tasks.map(task => (
                <div className="taskContainer" key={task.name}>
                    <h1 className="taskTitle">{task.name}</h1>
                    <p className="taskDescription">{task.description}</p>
                    <task.Component />
                </div>
            ))}
        </>
    );
}