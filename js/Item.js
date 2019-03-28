
class Component {
  constructor() {
    this._id = ++todoModule.nextComposantId;
    todoModule.componentRegistry[this._id] = this;
  }
}

class Item extends Component {

  constructor(props) {
    super();

    this.state = {
      text: props.text,
      dueDate: props.dueDate,
      isDue: props.isDue,
      isDone: props.isDone
    }



  }

    isDue() {
        this.state.isDue = true;
        return console.log('is Due called')
    }

    isItDue() {
        if (todoModule.today > this.dueDate) {
            this.isDue();
        }
        return console.log('isItDue called')
    }

    isDone() {
        this.state.isDone = true;
        todoModule.update(this._id, this)
        return console.log('isDone called')
    }

    render() {

            this.isItDue();
            return `<div id=${this._id} class="container">
                        <div class="card-group row">
                            <div class="card col-sm-6 ${this.state.isDone ? `text-white bg-success` : ``}">
                                <div class="card-body">
                                ${this.state.text}
                                </div>
                            </div>
                            <div class="card col-sm-3 ${this.state.isDone ? `text-white bg-success` : ``} ${this.state.isDue ? `bg-danger text-white` : ``}">
                                <div class="card-body text-right">
                                    <div>
                                    <span>${this.state.dueDate}</span>
                                    </div>
                                </div>
                                </div>
                                <div class="card col-sm-3 ${this.state.isDone ? `text-white bg-success` : ``}">
                                    <div class="card-body text-right">
                                    ${!this.state.isDone ? `<button class="btn btn-primary btn-sm" onclick="todoModule.componentRegistry[${this._id}].isDone()" >Done</button>` : `<button onclick="todoModule.deletE(${this._id})"class="btn btn-danger btn-sm">Delete</button>`}
                                    ${this.state.isDue ? `<button class="btn btn-secondary btn-sm">Procrastinate</button>` : ``}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
            
    }
    
}

