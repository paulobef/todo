
document.componentRegistry = { };
document.nextId = 0;
document.today = new Date();


class Component {
  constructor() {
    this._id = ++document.nextId;
    document.componentRegistry[this._id] = this;
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

    this.container = document.createElement('container');
    this.container.setAttribute('id', this._id);
    this.template = `
                    <div class="card-group row ${this.state.isDone ? `text-grey` : ``}">
                    <div class="card col-sm-6">
                        <div class="card-body">
                        ${this.state.text}
                        </div>
                    </div>
                    <div class="card col-sm-3 ${this.state.isDue ? `bg-danger text-white` : ``}">
                        <div class="card-body text-right">
                            <div>
                            <span>${this.state.dueDate}</span>
                            </div>
                        </div>
                        </div>
                        <div class="card col-sm-3">
                            <div class="card-body text-right">
                            <button class="btn btn-primary btn-sm" onclick="document.componentRegistry[${this._id}].isDone(this.value)" >Done</button>
                            ${this.state.isDue ? `<button id=${this.id} class="btn btn-secondary btn-sm">Procrastinate</button>` : ``}
                            </div>
                        </div>
                    </div>`
  }

    isDue() {
        this.state.isDue = true;
    }

    isItDue() {
        if (document.today > this.dueDate) {
            this.isDue();
        }

    }

    isDone() {
        this.state.isDone = true;
        this.update();
    }

    render() {

            this.isItDue();

            this.container.innerHTML = this.template;
            app.innerHTML += this.container.innerHTML
    }
    update() {
        document.getElementById(this._id).innerHTML = this.template;
    }

    
}

