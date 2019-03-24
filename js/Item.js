const today = new Date();

class Item {
    constructor(text, dueDate) {
        this.text = text;
        this.dueDate = dueDate;
        this.isDue = false;
    }
    isDateDue() {

        if (dueDate <= today) {
            this.isDue = true;
        }
    }
    template() {
        let opening = `<div class="container">
        <div class="row">`;
        let closing = `</div>
        </div>`;
        let item = `<div class="col-sm-8">
               ${this.text}
             </div>
             <div class="col-sm-3">
               ${this.dueDate}
             </div>
             <div class="col-sm-1">`;
        let dueButton = `<button>Procrastinate</button>`;
        let doneButton = `<button>Done</button>
         </div>`;
        if (this.isDue)
            return opening + item + dueButton + doneButton + closing;
        else
            return opening + item + doneButton + closing;
    }
}
