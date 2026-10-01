interface Assignee {
    initials: string,
    style: string
}

interface Card {
    id: string,
    title: string,
    description?: string,
    label: string,
    labelStyle: string,
    dueDate?: string,
    completed?: boolean,
    assignee?: Assignee
}

interface Column {
    title: string,
    dotColor: string,
    cards: Card[]
}

export interface Board {
    id: string,
    titleDashboard: string,
    descriptionDashboard: string,
    backgroundDashboard: string,
    accent: string,
    updated: string,
    membersDashboard: string[],
}

export interface Project {
    board: Board,
    workspace: string,
    title: string,
    description: string,
    members: Assignee[],
    columns: Column[]
}