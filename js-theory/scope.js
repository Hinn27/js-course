// scope quyết định khả năng truy cập của biến
// global scope: ở đâu cũng được
const globalVar = "đâu cũng được";
function global() {
  console.log(globalVar);
}

global();

// function scope: truy cập trong hàm
function func() {
  var funcVar = "khởi tạo ở đâu dùng ở đó";
  console.log(funcVar);
}
// console.log(funcVar); // nhốt k ra được
func();

// block scope: let và const bị nhốt trong nhà tù hình { } (như if, for, while)
{
  let blockLet = "tôi bị nhốt";
  const blockConst = "thả tao raaaaaa";
  var blockVar = "lêu lêu đồ bị nhốt =))";

  console.log(blockLet);
  console.log(blockConst);
  console.log(blockVar);
}

// console.log(blockLet);
// console.log(blockConst);
console.log(blockVar);

// lexical scope: định nghĩa toàn cục thì khi được gọi sẽ lấy giá tri toàn cục chứ không phải nơi hàm được gọi
const x = "toàn cục"; // định nghĩa global

function printX() {
  console.log(x); // lấy gtri global
}

function changeX() {
  const x = "cục bộ"; // gán lại x
  console.log(x); // vẫn nhận gtr đầu (toàn cục)
}

changeX();
