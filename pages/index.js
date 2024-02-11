<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Valentine's Day</title>
    <style>
        body {display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #3E0100; overflow: hidden;}
        div {text-align: center; position: relative;}
        button {font-size: 16px; padding: 10px 20px; margin: 5px; color: white; border: none; border-radius: 25px; cursor: pointer; transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);}
        #yesButton {background-image: linear-gradient(to right, #6FFF87, #4AE65C);}
        #noButton {background-image: linear-gradient(to right, #FF4E4F, #E73D3E);}
        button:hover {transform: scale(1.05);}
        @keyframes heartRain {0% {transform: translateY(-100vh) rotate(0deg); opacity: 0;} 100% {transform: translateY(100vh) rotate(360deg); opacity: 1;}}
        @keyframes heartRainAlternate {0% {transform: translateY(-100vh) rotate(0deg); opacity: 0;} 100% {transform: translateY(100vh) rotate(360deg); opacity: 1;}}
        .heart {position: absolute; font-size: 20px; animation: heartRain 4s linear infinite; opacity: 1; color: #fff;}
        .heart-alternate {position: absolute; font-size: 20px; animation: heartRainAlternate 4s linear infinite; opacity: 1; color: #fff;}
        #valentineText {color: #FF69B4;}
        video { position: absolute; top: 0; left: 0; object-fit: cover; width: 100%; height: 100%; z-index: -1; display: none; }
        #vids {position: fixed; bottom: 10px; right: 10px; color: white; opacity: 0.1;}
    </style>
</head>
<body>
    <div>
        <img id="valentineImage" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTd5cGFnNDBvYmlnc2UxdzU2aTFnM3hzZnFlMnZrNDNxd2ExYWJwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XWfNYMWrqXGJCcxp8a/source.gif" alt="Shy Cat GIF" />
        <p id="valentineText">Will you be my valentine?</p>
        <button id="yesButton" onclick="handleAnswer('yes')">Yes</button>
        <button id="noButton" onclick="handleAnswer('no')">No</button>
        <p id="vids">&#169;&#x41;&#x72;&#x74;&#x69;&#x78;&#x4B;&#x72;&#x69;&#x65;&#x67;&#x65;&#x72;</p>
    </div>
    <video id="videoBackground" loop autoplay>
        <source src="https://v1.pinimg.com/videos/mc/720p/e2/28/cf/e228cf41204f959a751a90cb37090f07.mp4" type="video/mp4" crossorigin="anonymous">
        Your browser doesn't support the video tag.
    </video>
    <script>
        const buttons = {yes: document.getElementById('yesButton'), no: document.getElementById('noButton')};
        let fontSize = 16, rejected = false, rejectionTexts = ["Why?", "You're breaking my heart", "Is it something I said?", "Please reconsider", "I thought we had a connection", "Are you playing hard to get?", "Maybe next time", "Is there someone else?", "Am I not your type?", "Did I do something wrong?"];
        const elements = {image: document.getElementById('valentineImage'), text: document.getElementById('valentineText')};
        function handleAnswer(answer) {if (answer === 'yes' && !rejected) acceptProposal(); else if (answer === 'no') rejectProposal(); if (rejected) hideRejectionText();}
        function acceptProposal() {celebrateValentine('Yay! Happy Valentine\'s Day!'); rejected = true; createHearts(); createAlternateHearts(); elements.image.style.display = 'none'; showVideoBackgroundForYes();}
        function rejectProposal() {const textToShow = rejectionTexts.shift() || 'Aww, how about now?'; buttons.no.textContent = textToShow; fontSize += 10; buttons.yes.style.fontSize = `${fontSize}px`; showVideoBackground();}
        function hideRejectionText() {buttons.yes.style.display = 'none'; buttons.no.style.display = 'none';}
        function createHearts() {setInterval(() => {const heart = document.createElement('div'); heart.className = 'heart'; heart.style.left = `${Math.random() * 100}vw`; heart.style.color = getRandomColor(); heart.innerHTML = '❥'; document.body.appendChild(heart); setTimeout(() => heart.remove(), 10000);}, 200);}
        function createAlternateHearts() {setInterval(() => {const heart = document.createElement('div'); heart.className = 'heart-alternate'; heart.style.left = `${Math.random() * 100}vw`; heart.style.color = getRandomColor(); heart.innerHTML = '♡'; document.body.appendChild(heart); setTimeout(() => heart.remove(), 10000);}, 200);}
        function getRandomColor() {const hexChars = '0123456789ABCDEF'; let color = '#'; for (let i = 0; i < 6; i++) color += hexChars[Math.floor(Math.random() * 16)]; return color;}
        function celebrateValentine(text, image) {elements.text.textContent = text; showImage(image);}
        function showImage(image) {elements.image.src = image;}
        function showVideoBackground() {
            const videoBackground = document.getElementById('videoBackground');
            videoBackground.style.display = 'block';
            elements.image.style.display = 'none';
            videoBackground.play();
        }
        function showVideoBackgroundForYes() {
            const yesVideoBackground = document.getElementById('videoBackground');
            yesVideoBackground.src = "https://v1.pinimg.com/videos/mc/720p/51/c2/38/51c238b123758e624dfd049c1b75350f.mp4";
            yesVideoBackground.style.display = 'block';
            elements.image.style.display = 'none';
            yesVideoBackground.play();
        }
    </script>
</body>
</html>
