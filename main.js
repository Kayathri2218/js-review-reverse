let num = parseInt(prompt("Enter the number : "))
        let result = 0;
        while(num > 0) {
            let reverse = num % 10;
            num = (num-reverse)/10;
            result = (result * 10)+reverse;
        }
        document.write("Reverse Number : ",result);