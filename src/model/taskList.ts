import type { TraceableModel } from '@/model/base'

export interface TaskList extends TraceableModel {
  name: string
  status: TaskListStatus
}

export enum TaskListStatus {
  CLOSE,
  ACTIVE
}


export interface CreateTaskListRequest extends Pick<TaskList, 'name'>{
}
