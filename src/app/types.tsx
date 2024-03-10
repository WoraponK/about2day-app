export interface Finance {
    id: string;
    type: string;
    amount: number;
    date: string;
    model: string;
}

export interface Task {
    id: string;
    title: string;
    type: string;
    date: string;
    data: [];
}

export interface Data {
    id: string;
    type: string;
    num: number;
    date: string;
}

export interface BoutDay {
    hour: number;
    minute: number;
}