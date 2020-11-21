// handle validate
class HandleValidate {
    constructor(formAdd, inputAdd) {
        this.formAdd = formAdd;
        this.inputAdd = inputAdd;
    }

    handleNulls() {
        this.formAdd.addEventListener('submit', function(e) {
            if(inputAdd.value.length === 0) {
                inputAdd.value = 'Not Have Data';
                inputAdd.style.color = "#f00";
                e.preventDefault();
            }
        })
    }

    handleColor() {
        this.inputAdd.addEventListener('change', function(e) {
            if(this.value === '') this.style.color = "#000";
        })
    }
}

var formAdd = document.querySelector('#form-add');
var inputAdd = document.querySelector('[name="name"]');
var validate = new HandleValidate(formAdd, inputAdd);

validate.handleNulls();
validate.handleColor();


