document.addEventListener("DOMContentLoaded", () => {
    const posLayer = document.getElementById("pos-layer");
    const scaleLayer = document.getElementById("scale-layer");

    let isDragging = false;
    let startX, startY;
    let posX = 162, posY = -122; // 초기 위치
    let scale = 0.6; // 초기 확대 비율

    // 마우스 누를 때
    posLayer.addEventListener("mousedown", (event) => {
        isDragging = true;
        startX = event.clientX - posX;
        startY = event.clientY - posY;
    });

    // 마우스 이동할 때
    document.addEventListener("mousemove", (event) => {
        if (isDragging) {
            posX = event.clientX - startX;
            posY = event.clientY - startY;
            posLayer.style.transform = `translate(${posX}px, ${posY}px)`;
        }
    });

    // 마우스 뗄 때
    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    // 스크롤(휠)로 확대/축소
    scaleLayer.addEventListener("wheel", (event) => {
        event.preventDefault();
        let scaleFactor = 0.1;
        if (event.deltaY < 0) {
            scale += scaleFactor; // 확대
        } else {
            scale -= scaleFactor; // 축소
        }
        scale = Math.min(Math.max(0.3, scale), 2); // 최소 0.3배, 최대 2배 제한
        scaleLayer.style.transform = `scale(${scale})`;
    });
});
