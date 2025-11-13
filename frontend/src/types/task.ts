//Clase para llamadas de creación/modificación al backend (el ID iría en la url, así que no hace falta ponerlo acá)
export interface TaskInput {
  title: string;
  description: string;
  completed: boolean;
}


export class Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createAt: Date;

  constructor(id: string, title: string, description: string, completed: boolean, createAt: Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createAt = createAt;
  }
}
