window.onload = () => {
    const posLayer = document.getElementById("mainview");
    const scaleLayer = document.getElementById("mainview");

    if (!posLayer || !scaleLayer) {
        console.error("🚨 'pos-layer' 또는 'scale-layer'가 HTML에서 찾을 수 없음!");
        return; // 오류 방지
    }

    let isDragging = false;
    let startX, startY;
    let posX = 162, posY = -122; // 초기 위치
    let scale = 0.6; // 초기 확대 비율

    // 💡 마우스 누를 때 → 드래그 시작
    posLayer.addEventListener("mousedown", (event) => {
        isDragging = true;
        startX = event.clientX - posX;
        startY = event.clientY - posY;
    });

    // 💡 마우스 움직일 때 → 위치 업데이트
    document.addEventListener("mousemove", (event) => {
        if (isDragging) {
            posX = event.clientX - startX;
            posY = event.clientY - startY;
            posLayer.style.transform = `translate(${posX}px, ${posY}px)`;
        }
    });

    // 💡 마우스 뗄 때 → 드래그 종료
    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    // 💡 마우스 휠(스크롤) → 확대/축소
    scaleLayer.addEventListener("wheel", (event) => {
        event.preventDefault(); // 기본 스크롤 방지
        let scaleFactor = 0.1;

        if (event.deltaY < 0) {
            scale += scaleFactor; // 확대
        } else {
            scale -= scaleFactor; // 축소
        }

        // 최대/최소 크기 제한 (0.3배 ~ 2배)
        scale = Math.min(Math.max(0.3, scale), 2);
        scaleLayer.style.transform = `scale(${scale})`;
    });

    // 💡 터치 이벤트(모바일)도 추가
    let touchStartX, touchStartY;
    let lastTouchDist = null;

    // 손가락 터치 시작
    posLayer.addEventListener("touchstart", (event) => {
        if (event.touches.length === 1) {
            isDragging = true;
            touchStartX = event.touches[0].clientX - posX;
            touchStartY = event.touches[0].clientY - posY;
        } else if (event.touches.length === 2) {
            lastTouchDist = getTouchDistance(event.touches);
        }
    });

    // 터치 드래그 이동
    posLayer.addEventListener("touchmove", (event) => {
        if (isDragging && event.touches.length === 1) {
            posX = event.touches[0].clientX - touchStartX;
            posY = event.touches[0].clientY - touchStartY;
            posLayer.style.transform = `translate(${posX}px, ${posY}px)`;
        } else if (event.touches.length === 2) {
            let newTouchDist = getTouchDistance(event.touches);
            if (lastTouchDist !== null) {
                let scaleFactor = newTouchDist / lastTouchDist;
                scale *= scaleFactor;
                scale = Math.min(Math.max(0.3, scale), 2);
                scaleLayer.style.transform = `scale(${scale})`;
            }
            lastTouchDist = newTouchDist;
        }
    });

    // 손가락 떼면 드래그 종료
    posLayer.addEventListener("touchend", () => {
        isDragging = false;
        lastTouchDist = null;
    });

    // 두 손가락 사이 거리 계산 (줌을 위해)
    function getTouchDistance(touches) {
        let dx = touches[0].clientX - touches[1].clientX;
        let dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }
};
