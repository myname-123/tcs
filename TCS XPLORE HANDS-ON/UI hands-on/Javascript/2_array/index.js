const cars = [
    { carName: "Innova", price: 900000, year: 2016 },
    { carName: "Dzire", price: 700000, year: 2017 },
    { carName: "i20", price: 500000, year: 2013 },
    { carName: "i10", price: 400000, year: 2016 }
];

function displayCarDetails() {
    const selectedCarName = document.getElementById("selectCar").value;
    const car = cars.find(c => c.carName === selectedCarName);
    const det = document.getElementById("CarDetail");
    if (car) {
        det.textContent = `${car.carName}-${car.price}-${car.year}`;
    } else {
        det.textContent = "Select the car to view the details";
    }
}
document.getElementById("selectCar").addEventListener('change',displayCarDetails);