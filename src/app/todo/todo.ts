export class Todo {
  constructor(
    public status: 'todo' | 'in-progress' | 'done',
    public priority: string,
    public title: string,
    public date: string,
    public description: string
  ) {}
}
