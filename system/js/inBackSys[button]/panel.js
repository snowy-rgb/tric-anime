document.addEventListener("DOMContentLoaded", () => {
    const panel = document.getElementById("sidePanel");
    const panelTitle = document.getElementById("panelTitle");
    const panelContent = document.getElementById("panelContent");
    const closePanelBtn = document.getElementById("closePanel");

    // 패널 닫기 버튼
    closePanelBtn.addEventListener("click", () => {
        panel.classList.remove("active");
    });

    // 기능별 내용 생성
    window.generatePanelContent = function(type) {
        switch (type) {
            case "settings":
                return `<p>설정 내용을 여기에 표시</p>`;
            case "characters":
                return `<p>캐릭터 목록 표시</p>`;
            case "backgrounds":
                return `<p>배경 선택</p>`;
            case "effects":
                return `<p>효과 설정</p>`;
            default:
                return `<p>알 수 없는 메뉴</p>`;
        }
    };
});
