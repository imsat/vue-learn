<script>
import {computed, onMounted, ref, watch} from "vue";

export default {
  props: ['title'],
  setup(props) {
    const todoFromInput = ref('')
    const todoId = ref(4)
    const todos = ref([
      {id: 1, description: 'example description 1', isComplete: false},
      {id: 2, description: 'example description 2', isComplete: false},
      {id: 3, description: 'example description 3', isComplete: false},
      {id: 4, description: 'example description 4', isComplete: false},
      {id: 5, description: 'example description 5', isComplete: false},
    ])

    /*different way to define state*/
    // const state = reactive({
    //   todoFromINput: '',
    //   todoId: 4,
    //   todos: [
    //     {id: 1, description: 'example description 1', isComplete: false},
    //     {id: 2, description: 'example description 2', isComplete: false},
    //     {id: 3, description: 'example description 3', isComplete: false},
    //     {id: 4, description: 'example description 4', isComplete: false},
    //     {id: 5, description: 'example description 5', isComplete: false},
    //   ]
    // })

    const addTodo = () => {
      console.log('todoFromInput', todoFromInput)
      // todos.value.unshift({
      //   id: todoId.value,
      //   description: todoFromInput.value,
      //   isComplete: false
      // })
      //
      // todoId.value++
      // todoFromInput.value = ''
    }

    const deleteTodo = (id) => {
      confirm('are you sure!!')
      todos.value = todos.value.filter(todo => todo.id !== id)
    }

    const itemsLeft = computed(() => todos.value.filter(todo => !todo.isComplete).length)

    onMounted(() => {
      console.log('todo mounted')
      console.log(props.title)
    })

    watch(() => todoId.value, (newValue, oldValue) => {
      console.log('new value', newValue)
      console.log('old value', oldValue)
    })

    return {
      todoFromInput,
      todoId,
      todos,
      addTodo,
      deleteTodo,
      itemsLeft
    }
  }
}

</script>

<template>
  <div class="flex ">
    <p class="">{{ title }}</p>
    <input type="text" v-model="todoFromINput" @keyup.enter="addTodo" class="border"/>
    <ul class="block p-5">
      <li v-for="(todo, key) in todos" :key="key">{{ todo.description }} <span class="text-red-500 cursor-pointer"
                                                                               @click="deleteTodo(todo.id)">X</span>
      </li>
    </ul>
    <div class="">
      Items Left: {{ itemsLeft }}
    </div>
  </div>
</template>

<style scoped>
</style>
