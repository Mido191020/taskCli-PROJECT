# Task Manager

Task Manager is a simple command-line application for managing tasks. It allows users to add, remove, update, search, and display tasks.

## Features

- Add new tasks with a name, time, and category
- Remove existing tasks
- Update task details
- Search for specific tasks
- Display all tasks
- Interactive command-line interface

## Requirements

- Node.js (version 12 or higher recommended)

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies (readline).

## Usage

To start the application, run:

```
node task_manager.js
```

Once the application is running, you can use the following commands:

- `add`: Add a new task
- `remove`: Remove an existing task
- `update`: Update an existing task
- `search`: Search for a specific task
- `display`: Display all tasks
- `exit`: Exit the application

Follow the prompts to enter task details or perform operations.

## Code Structure

The application consists of two main classes:

1. `Task`: Represents a single task with properties like name, time, category, and date.
2. `TaskManager`: Manages the collection of tasks and provides methods for adding, removing, updating, searching, and displaying tasks.

The main program uses the `readline` module to create an interactive command-line interface.

## Example Usage

```
Enter command (add, remove, update, search, display, exit): add
Enter Task name: Complete project
Enter Task time: 2 hours
Enter Task category: Work
Task added successfully!

Enter command (add, remove, update, search, display, exit): display
Name: Complete project, Time: 2 hours, Category: Work, Date: [current date and time]

Enter command (add, remove, update, search, display, exit): exit
```

## Limitations

- Tasks are stored in memory and will be lost when the application is closed.
- There's no persistence mechanism (like file or database storage) implemented.
- The date is automatically set to the current date and time when a task is created and cannot be manually set.

## Future Improvements

- Implement data persistence (e.g., saving tasks to a file or database)
- Add due dates for tasks
- Implement task prioritization
- Add sorting and filtering options for task display
- Improve error handling and input validation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
