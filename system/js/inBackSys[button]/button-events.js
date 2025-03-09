document.addEventListener("DOMContentLoaded", () => {
    const panel = document.getElementById("sidePanel");
    const panelTitle = document.getElementById("panelTitle");
    const panelContent = document.getElementById("panelContent");

    // 기능 버튼 클릭 이벤트
    document.querySelectorAll(".func-button").forEach(button => {
        button.addEventListener("click", () => {
            const panelType = button.getAttribute("data-panel");

            // 제목 변경
            panelTitle.textContent = button.textContent;

            // 내용 변경
            panelContent.innerHTML = generatePanelContent(panelType);

            // 패널 열기
            panel.classList.add("active");
        });
    });
});
