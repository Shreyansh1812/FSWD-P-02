const taskItem = {
    name: "Submit Assignment",
    deadlineMinutes: 10,
    urgencyLevel: "High",
};
export const taskList = [];
function addTaskItem(task) {
    try {
        if (!task.name || !task.deadlineMinutes || !task.urgencyLevel) {
            throw new Error("Task must have name, deadlineMinutes, and urgencyLevel.");
        }
        taskList.push(task);
        console.log("Task added successfully!");
    } catch (error) {
        console.error(error.message);
    }
}
function prioritizeTasks() {
    taskList.sort((a, b) => {
        const urgencyOrder = { High: 1, Medium: 2, Low: 3 };
        return urgencyOrder[a.urgencyLevel] - urgencyOrder[b.urgencyLevel];
    });
    console.log("Tasks prioritized by urgency:", taskList);
}
function fetchTasksDueSoon(minutes) {
    const currentTime = 0;
    const imminentTasks = taskList.filter(task => task.deadlineMinutes <= currentTime + minutes);
    console.log(`Tasks due within ${minutes} minutes:`, imminentTasks);
    return imminentTasks;
}
function setTaskReminders() {
    taskList.forEach(task => {
        setTimeout(() => {
            console.log(`Reminder: Task "${task.name}" is due now!`);
        }, task.deadlineMinutes * 60000);
    });
}
try {
    addTaskItem({ name: "Incomplete Task" });
} catch (error) {
    console.error("Error adding task:", error.message);
}
export { addTaskItem, prioritizeTasks, fetchTasksDueSoon, setTaskReminders };