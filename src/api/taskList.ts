import { request } from '@/api/request'
import type { CreateTaskListRequest, TaskList } from '@/model/taskList'

export const createTaskList = (createTaskListRequest: CreateTaskListRequest) => {
  return request.post<TaskList>('/task-lists', createTaskListRequest)
}
