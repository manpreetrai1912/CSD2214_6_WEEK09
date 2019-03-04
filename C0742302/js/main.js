// Your code here!
let addnumbers = {
   
    StartNumber=1109,
    StepDownNo=11,
    endNumber=119,
    adder: function () {
        var sum = 0;

        for (var i = this.StartNumber; i >= this.endNumber;) {
            sum += i;
            i -= this.StepDownNo;
        }
        document.write("sum is:" + sum);

    }

}
