// let temp;
// function start() {
//     temp = prompt("Nhập nhiệt độ", "Độ C");
//     tempInput();
// }
// function tempInput() {
//     if (20 < temp && temp < 100) {
//         alert("Niệt độ nhập vào là: " + temp);
//         return;
//     } else if (temp > 100) {
//         do {
//             temp = prompt("Giảm bớt nhiệt đi anh");
//         } while (temp > 100);
//     } else if (temp < 20) {
//         do {
//             temp = prompt("Tăng nhiệt lên anh ei");
//         } while (temp < 20);
//     }
//     tempInput();
// }

function tempInput() {
    let temp = prompt("Nhập nhiệt độ:","Độ C");
    while (temp >= 100) {
        temp = prompt("Đời cô quanh, giảm lạnh đi anh");
    }
    while (temp <= 20) {
        temp = prompt("Nóng như thế này thì làm sao phải mặc, tăng nhiệt lên anh ei");
    }
    alert("Nhiệt độ nhập vào là: " + temp);
}

