# Backend Projects

The following projects were developed to enhance my skills as a developer using platform

## Project list:

1. [Task Tracker CLI](#1-task-tracker-cli)
2. [GitHub User Activity](#2-github-user-activity)

## Pre-installation:
1. Install [Node.js](https://nodejs.org/en)
2. Open [Command Line Interface](https://en.wikipedia.org/wiki/Command-line_interface) provided by your operating system
3. Create folder and to copy [repository](https://github.com/DedRobin/Node.js) to it

```
mkdir <folder-name>
cd <folder-name>
git clone git@github.com:DedRobin/Node.js.git .
```

## 1. Task Tracker CLI

***Created by project https://roadmap.sh/projects/task-tracker***

Task tracker is a project used to track and manage your tasks. In this task, you will build a simple command line interface (CLI) to track what you need to do, what you have done, and what you are currently working on.

### Installation:

Move to repository folder and enter the following command

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

## 2. GitHub User Activity

***Created by project https://roadmap.sh/projects/github-user-activity***

This application is a project for fetching the recent activity of a GitHub user and display it in the terminal.

### Installation:

Move to repository folder and enter the following command

```
npm i -g ./task-tracker-cli .
```

### Usage

The command template:
```
github-activity <username> page=<page> per-page=<per-page>
```

#### The description of options:

- **\<username `string`>** - The name of the user whose activity you want to display
- **\<page `number`>(optional)**: page number with list of events (default=1)
- **\<per-page `number`>(optional)**: number of events per page (default=100)

#### Examples

```
github-activity Foo page=1 per-page=5
```

```
github-activity Bar page=3 per-page=10
```

