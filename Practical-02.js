import { addTaskItem, prioritizeTasks, fetchTasksDueSoon, setTaskReminders } from './tasks.js';

addTaskItem({ name: "Submit Report", deadlineMinutes: 5, urgencyLevel: "High" });
addTaskItem({ name: "Prepare Meeting Slides", deadlineMinutes: 15, urgencyLevel: "Medium" });

prioritizeTasks();

fetchTasksDueSoon(10);

setTaskReminders();