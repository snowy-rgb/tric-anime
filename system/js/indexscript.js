// 코드 실행 기능
function runCode() {
    let code = document.getElementById("codeInput").value;
    try {
        eval(code);
    } catch (e) {
        alert("에러 발생: " + e.message);
    }
}
