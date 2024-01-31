<script setup lang="ts">
import type { DataTableColumns } from "naive-ui"
import { NButton } from "naive-ui"
import { v4 as uuidv4 } from 'uuid';
type Song = {
  no: number
  title: string
  length: string
}

const createColumns = ({
  play,
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: "No",
      key: "no",
    },
    {
      title: "Title",
      key: "title",
    },
    {
      title: "Length",
      key: "length",
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: "small",
            onClick: () => play(row),
          },
          { default: () => "Play" }
        )
      },
    },
  ]
}

const data: Song[] = [
  { no: 3, title: "Wonderwall", length: "4:18" },
  { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
  { no: 12, title: "Champagne Supernova", length: "7:27" },
]
const message = useMessage()
const columns = createColumns({
  play(row: Song) {
    message.info(`Play ${row.title}`)
  },
})
const pagination = false as const

const tags = ref([])
const showData = ()=>{
  console.log(tags.value,'-=-=-');
}
const onCreate= (label: string) => {
        return {
          label,
          value: uuidv4()
        }
      }
</script>

<template>
  <div class="w-1200px mx-auto">
    <div class="pt-50 pb-10">
      <n-dynamic-tags v-model:value="tags"  @create="onCreate"  />
      <n-button type="primary" @click="showData">添加</n-button>
    </div>
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :bordered="true"
    />
  </div>
</template>
