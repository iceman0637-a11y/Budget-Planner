document.getElementById("calculate").addEventListener(
    "click", function(){
        // my 3 steps
        //take user input
        const input = Number(document.getElementById("paycheck").value);
        console.log(input);

        const needs = input * 0.5;
        const wants = input * 0.3;
        const savings = input * 0.2;
        console.log("needs: "+needs+"$");
        console.log("wants: "+wants+"$");
        console.log("savings: "+savings+"$");
    }
)