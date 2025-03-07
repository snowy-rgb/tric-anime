function setTheme(themeName) {
    let dialogBox = document.querySelector(".dialog-box");

    // 테마별 이미지 매핑
    let themes = {
        "기본": "https://snowy-rgb.github.io/tric-anime/assets/inGameImages/storyBoxes/w-n.svg",
        "생각": "https://snowy-rgb.github.io/tric-anime/assets/inGameImages/storyBoxes/w-th.svg",
        "놀람": "https://snowy-rgb.github.io/tric-anime/assets/inGameImages/storyBoxes/w-sh.svg",
        "t:기본": "https://snowy-rgb.github.io/tric-anime/assets/inGameImages/storyBoxes/tBox-n.svg",
        "t:생각": "https://snowy-rgb.github.io/tric-anime/assets/inGameImages/storyBoxes/tBox-th.svg",
        "t:놀람": "https://snowy-rgb.github.io/tric-anime/assets/inGameImages/storyBoxes/tBox-sh.svg",
    };

    // 기존 테마 제거 후 새로운 테마 적용
    if (themes[themeName]) {
        dialogBox.style.backgroundImage = `url('assets/images/${themes[themeName]}')`;
    } else {
        console.warn("해당 테마를 찾을 수 없음:", themeName);
    }
}
