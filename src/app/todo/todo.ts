export class Todo {
  constructor(
    public status: 'todo' | 'inProgress' | 'done',
    public priority: string,
    public title: string,
    public date: string,
    public description: string
  ) {}
}
