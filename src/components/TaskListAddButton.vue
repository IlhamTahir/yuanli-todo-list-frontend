<script setup lang="ts">
import { createTaskList } from '@/api/taskList'

const handleClick = async () => {
  const result = await createTaskList({
    name: '空白任务列表'
  })
  console.log(result)
}
</script>

<template>
  <div class="w-[80px] h-[80px] rounded-full bg-blue-400 fixed bottom-10 left-[calc(50%-40px)] border-4 border-black p-2 hover:scale-[1.1] transition-all" @click="handleClick">
    <img src="@/assets/svg/plus.svg" />
  </div>
</template>

<style scoped>

</style>
