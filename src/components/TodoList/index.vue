<template>

  <el-card style="height:440px">
    <div
      slot="header"
      class="clearfix"
    >
      <mallki
        class-name="mallki-text"
        text="待办事项"
      />
    </div>
    <section class="todoapp">
      <!-- header -->
      <header class="header">
        <input
          class="new-todo"
          autocomplete="off"
          placeholder="添加"
          @keyup.enter="addTodo"
        >
      </header>
      <!-- main section -->
      <section
        v-show="todos.length"
        class="main"
      >
        <input
          id="toggle-all"
          :checked="allChecked"
          class="toggle-all"
          type="checkbox"
          @change="toggleAll({ done: !allChecked })"
        >
        <label for="toggle-all" />
        <ul class="todo-list">
          <todo
            v-for="(todo, index) in filteredTodos"
            :key="index"
            :todo="todo"
            @toggleTodo="toggleTodo"
            @editTodo="editTodo"
            @deleteTodo="deleteTodo"
          />
        </ul>
      </section>
      <!-- footer -->
      <footer
        v-show="todos.length"
        class="footer"
      >
        <span class="todo-count">
          <strong>{{ remaining }}</strong>
          {{ remaining | pluralize('item') }} left
        </span>
        <ul class="filters">
          <li
            v-for="(val, key) in filters"
            :key="key"
          >
            <a
              :class="{ selected: visibility === key }"
              @click.prevent="visibility = key"
            >{{ key | capitalize }}</a>
          </li>
        </ul>
        <!-- <button class="clear-completed" v-show="todos.length > remaining" @click="clearCompleted">
        Clear completed
      </button> -->
      </footer>
    </section>
  </el-card>
</template>

<script>
import Todo from './Todo.vue'
import Mallki from '@/components/TextHoverEffect/Mallki'
const STORAGE_KEY = 'todos'
const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}
const defalutList = [
  { text: '完成毕业设计初稿', done: true },
  { text: '完成指导记录', done: false },
  { text: '完成中期报告', done: true },
  { text: '学习vue', done: true },
  { text: '学习element-ui', done: true }
]
export default {
  components: { Todo, Mallki },
  filters: {
    pluralize: (n, w) => n === 1 ? w : w + 's',
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  },
  data() {
    return {
      visibility: 'all',
      filters,
      // todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || defalutList
      todos: defalutList
    }
  },
  computed: {
    allChecked() {
      return this.todos.every(todo => todo.done)
    },
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
    remaining() {
      return this.todos.filter(todo => !todo.done).length
    }
  },
  methods: {
    setLocalStorage() {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
    },
    addTodo(e) {
      const text = e.target.value
      if (text.trim()) {
        this.todos.push({
          text,
          done: false
        })
        this.setLocalStorage()
      }
      e.target.value = ''
    },
    toggleTodo(val) {
      val.done = !val.done
      this.setLocalStorage()
    },
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
      this.setLocalStorage()
    },
    editTodo({ todo, value }) {
      todo.text = value
      this.setLocalStorage()
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.done)
      this.setLocalStorage()
    },
    toggleAll({ done }) {
      this.todos.forEach(todo => {
        todo.done = done
        this.setLocalStorage()
      })
    }
  }
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
