// 재사용하기위해 component 사용
Vue.component('todo-card', {
  // 하나로 묶어서 랜더링 해야하므로 div로 묶어준다.
  template: `
    <div>
      <h1>{{title}}</h1>
      <h2>{{content}}</h2>
    </div>
  `,
  // data를 구분하기 위해서 function을 사용하여 독립적인 공간을 만들어준다.
  data: function(){
    return {

    }
  },
  methods: {

  },
  // template에 props를 사용하기 위해 적는다.
  // 부모(<div id="app">)가 자식(todo-list)에게 전달하기 위해 사용
  // props: ['title', 'content']
  props: {
    title: {
      type: String,
      required: true,
      // 개발자가 컴포넌트 간 데이터를 원활하게 전송하기 위해 사용
      // error가 발생하지만 영향이 크지는 않다.
      validator: function(input){
        if (input.length < 5) {
          return false
        }
        return true
      }
    },
    // type 정도는 명시하는 편
    content: String
  }
})