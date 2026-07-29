// hoisting là di chuyển phần khai báo lên đầu phạm vi (scope) trước khi thực thi

// var vừa khai báo vừa khởi tạo giá trị, hoisting nhận giá trị undefined
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// let được hoisted nhưng k được khởi tạo giá trị nào
console.log(x); // khai báo, chưa được khởi tạo
let x = 10; // khởi tạo giá trị
console.log(x); // 10

/*
 * 1. Cơ chế hoạt động của biến:
 * Vòng đời: khai báo -> khởi tạo -> gán giá trị
 * Xử lí qua 2 giai đoạn: khởi tạo -> thực thi
 * 2. So sánh
 * var khi hoisting vừa khai báo vừa khởi tạo nên ban đầu là undefined
 * let và const chỉ được khởi tạo giá trị khi chạy đến đúng dòng code
 */
