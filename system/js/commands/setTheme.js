function setTheme(themeName) {
    let dialogBox = document.querySelector(".dialog-box");

    // 테마별 이미지 매핑
    let themes = {
        "기본": "dialogue-10.svg",
        "생각": "dialogue-20.svg",
        "놀람": "dialogue-30.svg",
        "불쾌": "dialogue-40.svg",
        "그라데이션 박스": "dialogue-50.svg",
        "검정 박스": "dialogue-60.svg"
    };

    // 기존 테마 제거 후 새로운 테마 적용
    if (themes[themeName]) {
        dialogBox.style.backgroundImage = `url('assets/images/${themes[themeName]}')`;
    } else {
        console.warn("해당 테마를 찾을 수 없음:", themeName);
    }
}
