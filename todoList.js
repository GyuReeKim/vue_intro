Vue.component('todo-list', {
    // template는 html 코드를 저장함.
    template: `
        <div class="todo-list">
        <!-- todo-list 태그의 category 값이 {{category}}에 저장된다. -->
        <h1>{{category}}</h1>
        <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo">
        <button v-on:click="addTodo">+</button>
        <li v-for="todo in todos" v-bind:key="todo.id">
            <span>{{ todo.content }}</span>
            <button v-on:click="removeTodo(todo.id)">x</button>
        </li>
        </div>
    `,
    // 부모에게 받은 category 변수를 자식요소에서 사용한다.
    props: ['category'],
    data: function(){
        return {
        todos: [],
        newTodo: '',
        }
    },
    methods: {
        addTodo: function(e) {
        if (this.newTodo.length != 0) {
            this.todos.push({
            id: Date.now(),
            content: this.newTodo,
            completed: false,
            })
            this.newTodo = ''
        }
        },
        removeTodo: function(todoID) {
        this.todos = this.todos.filter(todo => {
            return todo.id !== todoID
        })
        }  
    }
})
