# Challenges and Insights from the Lab

## **Challenges Faced**

1. **Enhancing Functionality:**  
   - Refactored key functions (`addTaskItem`, `prioritizeTasks`, etc.) to improve efficiency while preventing unintended errors.  
   - Debugged parameter validation issues in `addTaskItem` to ensure smooth data processing.  

2. **Task Sorting Complexity:**  
   - Implemented a refined priority mapping system in `prioritizeTasks` for more accurate task sorting.  

3. **Handling Edge Cases:**  
   - Managed scenarios where tasks had missing properties (e.g., no `name` or `deadlineMinutes`).  
   - Ensured stability when dealing with empty task lists or unrealistic deadlines.  

4. **Timers & Delays Management:**  
   - Verified that `setTaskReminders` triggered reminders accurately, correctly converting minutes to milliseconds.  

## **Key Learnings**

1. **Code Structuring & Function Optimization:**  
   - Focused on improving function names and structuring for better clarity and maintainability.  
   - Strengthened understanding of intuitive naming conventions to enhance code readability.  

2. **Working with Arrays in JavaScript:**  
   - Applied advanced array methods (`filter`, `sort`, etc.) to manipulate task data effectively.  

3. **Error Handling Strategies:**  
   - Implemented validation mechanisms to catch errors early, ensuring robustness in `addTaskItem` and other functions.  

4. **Understanding Asynchronous Behavior:**  
   - Explored `setTimeout` and refined testing techniques for handling asynchronous operations.  

5. **Debugging & Edge Case Considerations:**  
   - Developed a systematic approach to debugging, testing against diverse input scenarios.  
   - Strengthened awareness of potential pitfalls, such as empty datasets or incorrectly formatted data.  

---  

## **Final Takeaway**

This lab provided hands-on experience in refining JavaScript functionality, mastering data handling, and optimizing task execution. Debugging and structured refactoring reinforced clean coding principles while strengthening problem-solving skills.
