function SumOfSeries() {
    let a = 0, b = 1;
    let sum = 0;

    while (a < 100) {
        sum += a;
        let next = a + b;
        a = b;
        b = next;
    }

    // Set the numeric sum directly as the text content of the result element
    document.getElementById("result").innerText = sum;
}

// Attach the function to the button click event (optional if the test doesn't require it)
if (document.getElementById("generate")) {
    document.getElementById("generate").addEventListener("click", SumOfSeries);
}
