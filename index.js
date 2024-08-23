const readline = require('readline');

class Task {
    constructor(name, time, category) {
        this.name = name;
        this.time = time;
        this.date = new Date();
        this.category = category;
    }
}

class TaskManager {
    constructor() {
        this.tasks = new Map();
    }

    is_Exist(taskName) {
        return this.tasks.has(taskName);
    }

    addTask(name, time, category) {
        if (this.is_Exist(name)) {
            console.log("The task already exists!");
        } else {
            const task = new Task(name, time, category);
            this.tasks.set(name, task);
            console.log("Task added successfully!");
        }
    }

    updateTask(name, field, newValue) {
        if (this.is_Exist(name)) {
            const task = this.tasks.get(name);
            task[field] = newValue;
            console.log("Task updated successfully!");
        } else {
            console.log("Task not found!");
        }
    }

    remove(taskName) {
        if (this.is_Exist(taskName)) {
            this.tasks.delete(taskName);
            console.log("Task removed successfully!");
        } else {
            console.log("Task not found!");
        }
    }

    search(taskName) {
        if (this.is_Exist(taskName)) {
            const task = this.tasks.get(taskName);
            this.displayTask(taskName, task);
        } else {
            console.log("Task not found!");
        }
    }

    displayTask(name, task) {
        console.log(`Name: ${name}, Time: ${task.time}, Category: ${task.category}, Date: ${task.date}`);
    }

    displayTasks() {
        if (this.tasks.size === 0) {
            console.log("No tasks found.");
        } else {
            for (let [name, task] of this.tasks) {
                this.displayTask(name, task);
            }
        }
    }
}

const manager = new TaskManager();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function user() {
    rl.question('Enter command (add, remove, update, search, display, exit): ', command => {
        switch (command) {
            case 'add':
                rl.question("Enter Task name: ", name => {
                    rl.question("Enter Task time: ", time => {
                        rl.question("Enter Task category: ", category => {
                            manager.addTask(name, time, category);
                            user();
                        });
                    });
                });
                break;
            case 'remove':
                rl.question("Enter Task name: ", name => {
                    manager.remove(name);
                    user();
                });
                break;
            case 'update':
                rl.question("Enter Task name: ", name => {
                    rl.question("Enter Task field you want to update: ", field => {
                        rl.question("Enter Task New value: ", value => {
                            manager.updateTask(name, field, value);
                            user();
                        });
                    });
                });
                break;
            case 'search':
                rl.question("Enter Task name: ", name => {
                    manager.search(name);
                    user();
                });
                break;
            case 'display':
                manager.displayTasks();
                user();
                break;
            case 'exit':
                rl.close();
                return;
            default:
                console.log('Invalid command');
                user();
        }
    });
}

user();