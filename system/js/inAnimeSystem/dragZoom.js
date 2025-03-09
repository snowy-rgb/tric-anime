window.onload = () => {
    const posLayer = document.getElementById("pos-layer");
    const scaleLayer = document.getElementById("scale-layer");

    if (!posLayer || !scaleLayer) {
        console.error("🚨 'pos-layer' 또는 'scale-layer'가 HTML에서 찾을 수 없음!");
        return;
    }

    let isDragging = false;
    let startX, startY;
    let scale = 0.6; // 초기 확대 비율
    let posX = 0, posY = 0; // 초기 위치

    // 💡 초기 위치 중앙 배치
    function centerScreen() {
        let bounds = getBounds();
        posX = (bounds.width - posLayer.offsetWidth * scale) / 2;
        posY = (bounds.height - posLayer.offsetHeight * scale) / 2;
        updateTransform();
    }

    // 💡 화면 크기 및 이동 제한 계산
    function getBounds() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    function getLimitedPosition(x, y) {
        let bounds = getBounds();

        // 줌(확대) 비율을 고려한 이동 가능 영역 계산
        let maxOffsetX = (bounds.width / 2) * (scale - 1);
        let maxOffsetY = (bounds.height / 2) * (scale - 1);

        let maxX = maxOffsetX;
        let minX = -maxOffsetX;
        let maxY = maxOffsetY;
        let minY = -maxOffsetY;

        return {
            x: Math.min(Math.max(x, minX), maxX),
            y: Math.min(Math.max(y, minY), maxY)
        };
    }

    function updateTransform() {
        posLayer.style.transform = `translate(${posX}px, ${posY}px)`;
        scaleLayer.style.transform = `scale(${scale})`;
    }

    // 💡 마우스 누를 때 → 드래그 시작
    posLayer.addEventListener("mousedown", (event) => {
        isDragging = true;
        startX = event.clientX - posX;
        startY = event.clientY - posY;
    });

    // 💡 마우스 움직일 때 → 위치 업데이트 (경계 체크 추가)
    document.addEventListener("mousemove", (event) => {
        if (isDragging) {
            let newPosX = event.clientX - startX;
            let newPosY = event.clientY - startY;

            let limitedPos = getLimitedPosition(newPosX, newPosY);
            posX = limitedPos.x;
            posY = limitedPos.y;

            updateTransform();
        }
    });

    // 💡 마우스 뗄 때 → 드래그 종료
    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    // 💡 마우스 휠(스크롤) → 확대/축소 (경계 자동 조정)
    scaleLayer.addEventListener("wheel", (event) => {
        event.preventDefault(); // 기본 스크롤 방지
        let scaleFactor = 0.1;

        if (event.deltaY < 0) {
            scale += scaleFactor; // 확대
        } else {
            scale -= scaleFactor; // 축소
        }

        // 최대/최소 크기 제한 (0.5배 ~ 2배)
        scale = Math.min(Math.max(0.5, scale), 2);

        // 줌 조정 시 위치 다시 계산
        let limitedPos = getLimitedPosition(posX, posY);
        posX = limitedPos.x;
        posY = limitedPos.y;

        updateTransform();
    });

    // 💡 창 크기 변경 시 제한 반경 다시 계산 & 중앙 배치
    window.addEventListener("resize", () => {
        let limitedPos = getLimitedPosition(posX, posY);
        posX = limitedPos.x;
        posY = limitedPos.y;
        updateTransform();
    });

    // 💡 페이지 로드 시 중앙 배치 실행
    centerScreen();
};
