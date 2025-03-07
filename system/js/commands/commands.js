// 동적으로 개별 명령어 파일을 불러오는 함수
function loadScript(url, callback) {
    let script = document.createElement("script");
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

// 개별 스크립트를 순서대로 불러오기
loadScript("system/js/commands/say.js", function() {
    loadScript("system/js/commands/echo.js", function() {
        loadScript("system/js/commands/background.js", function() {
            loadScript("system/js/commands/character.js", function() {
                // 모든 명령어가 로드된 후 등록
                window.say = say;
                window.echo = echo;
                window.setBG = setBG;
                window.setEmotion = setEmotion;
                window.setTheme = setTheme;
            });
        });
    });
});
