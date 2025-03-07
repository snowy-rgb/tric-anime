function setEmotion(emotion) {
    let emotionWrap = document.querySelector(".emotion-wrap");

    // 기존 감정 아이콘이 있으면 제거
    if (emotionWrap) {
        emotionWrap.innerHTML = "";
    } else {
        // 없으면 새로 생성
        emotionWrap = document.createElement("div");
        emotionWrap.className = "emotion-wrap";
        document.querySelector(".namearea").appendChild(emotionWrap);
    }

    // 감정별 이미지 매핑
    let emotions = {
        "느낌표": "../../../assets/inGameImages/emotions/usedStoree/emotion-0-surprise.svg",
        "놀람": "emotion-0-surprise.svg",
        "생각": "emotion-3-surprise2b.svg",
        "긴장": "emotion-8-sweat.svg",
        "화남": "emotion-6-angry.svg",
        "한숨": "emotion-13-sigh.svg",
        "없음": "none"
    };

    // 감정이 '없음'이면 아이콘 숨기기
    if (emotion === "없음") {
        emotionWrap.style.display = "none";
    } else {
        // 감정 아이콘 생성 및 추가
        let emotionImg = document.createElement("img");
        emotionImg.src = `assets/images/${emotions[emotion]}`;
        emotionImg.alt = "emotion";
        emotionImg.className = "nametag-emotion";
        emotionImg.style.position = "absolute";
        emotionImg.style.right = "-20px"; // 네임택 오른쪽에 표시
        emotionImg.style.top = "5px";
        emotionImg.style.width = "30px";
        emotionImg.style.opacity = "1"; // 감정 아이콘 표시

        // 감정 아이콘 추가
        emotionWrap.appendChild(emotionImg);
        emotionWrap.style.display = "block";
    }
}
