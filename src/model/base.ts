import type { User } from '@/model/user'

export interface BaseModel {
  id: string
  createTime: Date
  updateTime: Date
}

export interface TraceableModel extends BaseModel {
  createBy: User
  updateBy: User
}
