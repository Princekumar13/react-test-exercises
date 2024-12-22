export const ROUTES = {
    Home: '/',
    EXERCISE_TWO: '/exercise-two'
}

export const TodoStatuses = {
    ToDo: 'To Do',
    InProgress: 'In Progress',
    Done: 'Done'
}

export const TodoPriorities = {
    Low: 'Low',
    Medium: 'Medium',
    High: 'High',
}

export const TodoListData = [
    { id:1, task: "Go to  Gym", priority: TodoPriorities.High, status: TodoStatuses.InProgress, progress: 50 },
    { id:2, task: "Restart Learning Solid", priority: TodoPriorities.High, status: TodoStatuses.ToDo, progress: 0 },
    { id:3, task: "Change Slider to Scroll", priority: TodoPriorities.High, status: TodoStatuses.InProgress, progress: 50 },
    { id:4, task: "To Publish the article", priority: TodoPriorities.Medium, status: TodoStatuses.InProgress, progress: 50 },
    { id:5, task: "New Task Assignment Task", priority: TodoPriorities.High, status: TodoStatuses.ToDo, progress: 0 }
]

export const TextData = [
    { id: 1, noOfParticipants: 11, question: 'Question 1: What size(s) are you purchasing? Are you buying multiple sizes? Why or why not? Reminder you must buy them in Size 1, 2 or 3 only. Select the one(s) you typically use for daytime use. <br /> (Please also explain verbally)', answerOptions: ['1 (Regular, yellow wrapper)', '2 (Long Super, green wrapper)', '3 (Extra Long Super, blue wrapper)'], percentage: [45, 45.5, 18.2] },
    { id: 2, noOfParticipants: 8, question: 'Question 2: What was the main reason(s) you went to the restroom? Select up to 2 options <br /> (Please select all that apply)', answerOptions: ['To go to the bathroom', 'To check how full my pad was', 'To check the placement/bunching of my pad', 'It was convenient / $1 Incentive for Taking a Picture'], percentage: [75, 0, 25, 0] },
    { id: 3, noOfParticipants: 8, question: 'Question 3: What was your main activity between the previous bathroom visit? When you apply your first pad, please select Applying the Pad to my Panties. <br /> (Please select all that apply)', answerOptions: ['Standing / Walking', 'Sitting', 'Exercising (running, biking, etc.)', 'Lying Down (including sleeping)'], percentage: [20, 0, 0, 80] },
    { id: 4, noOfParticipants: 8, question: 'Question 4: Are you planning to change your pad? <br /> (Please select one option)', answerOptions: ['Yes', 'No, I will continue to use the pad I have on'], percentage: [12.5, 87.5] },
    { id: 5, noOfParticipants: 1, question: 'Question 5: How would you rate this pad on Feels Clean? <br /> (Please select one option)', answerOptions: ['Excellent', 'Very Good', 'Good', 'Fair'], percentage: [100, 0, 0, 0] },
];

export const OrderByValues = ['Task', 'Status', 'Priority'];