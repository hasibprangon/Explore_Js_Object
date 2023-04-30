const student = {
    name: 'Hasib',
    money: 1700,
    study: 'cse',
    subjects: ['C-programming', 'Java-programming', 'Data-Structure', 'Algorithm'],
    exam: function () {
        return (this.name + ' ' + 'is giving exam')
    },
    improveExam: function(sub){
        this.exam();
        return `${this.name} is giving improvement exam on ${sub}`
    },
    treat: function(ammount){
        this.money = this.money - ammount;
        return this.money;
    }
}
const output = student.exam();
// console.log(output);
const result = student.improveExam();
// console.log(result);
const remainingBlalance = student.treat(100);
console.log(remainingBlalance);