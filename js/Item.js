const today = new Date();

class Item {
    constructor(text, dueDate, id) {
        this.id = id
        this.text = text;
        this.dueDate = dueDate;
        this.isDue = false;
        this.isDone = false;
    }
    isDateDue() {

        if (dueDate <= today) {
            this.isDue = true;
        }
    }

    done() {
        this.isDone = true;
    }

    render() {
    
            return `<div class="container">
                        <div class="card-group row ${this.isDone ? `text-grey` : ``}">
                        <div class="card col-sm-6">
                            <div class="card-body">
                            ${this.text}
                            </div>
                        </div>
                        <div class="card col-sm-3 ${this.isDue ? `bg-danger text-white` : ``}">
                            <div class="card-body text-right">
                                <div>
                                <span>${this.dueDate}</span>
                                </div>
                            </div>
                            </div>
                            <div class="card col-sm-3">
                                <div class="card-body text-right">
                                <button class="btn btn-primary btn-sm" onclick="${this.done()}" >Done</button>
                                ${this.isDue ? `<button id=${this.id} class="btn btn-secondary btn-sm">Procrastinate</button>` : ``}
                                </div>
                            </div>
                        </div>
                    </div>`
    }
}
