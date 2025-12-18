# Backend Projects

The following projects were developed to enhance my skills as a developer using platform

## Project list:

1. [Task Tracker CLI](#1-task-tracker-cli)

## 1. Task Tracker CLI

***Created by project https://roadmap.sh/projects/task-tracker***

Task tracker is a project used to track and manage your tasks. In this task, you will build a simple command line interface (CLI) to track what you need to do, what you have done, and what you are currently working on.

### Installation:
1. Install [Node.js](https://nodejs.org/en)
2. Open [Command Line Interface](https://en.wikipedia.org/wiki/Command-line_interface) provided by your operating system
3. Create folder and to copy [repository](git@github.com:DedRobin/test.git) to it

```
mkdir task-tracker-cli
cd task-tracker-cli
git clone git@github.com:DedRobin/test.git .
```

4. Install CLI application

```
npm i -g ./task-tracker-cli .
```

### Usage

The command template:
```
task-tracker-cli <command> [options]
```

#### The following  commands are available:

- **add \<description `string`>**: Creates a new task and adds it to the list.

```
task-tracker-cli add "New task"
```

- **update \<id> <description `string`>**: Modifies the details of an existing task. 

```
task-tracker-cli update 1 "Updated task"
```

- **delete \<id `number`>**: Removes a task permanently from the storage.

```
task-tracker-cli delete 1
```

- **list \<status `todo`|`in-progress`|`done`>(optional)**: Displays all task list. If \<status> option is provided the app displays tasks that have \<status> status. 

```
task-tracker-cli list
task-tracker-cli list todo
task-tracker-cli list in-progress
task-tracker-cli list done
```

- **mark-done \<id\>**: Updates the status of a specific task to "Done"

```
task-tracker-cli mark-done 1
```

- **mark-in-progress \<id `number`>**: Updates the status of a specific task to "In progress"

```
task-tracker-cli mark-in-progress 1
```
