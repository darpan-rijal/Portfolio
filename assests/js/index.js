addEventListener("DOMContentLoaded", function () {
    textani = document.getElementById("typingAni");
    const a1 = ["YouTuber", "Video Editor", "Digital Marketer", "Content Writer", "Web Designer", "Web Developer", "Freelancer"];
    let i = 0;
    let j = 0;
    let tempV = "";
    setInterval(() => {
        let lengthOfa1 = Number(a1.length);
        let lengthOfa1Indx = Number(a1[i].length);
        tempV += a1[i][j++];
        textani.innerHTML = tempV;
        if (j == lengthOfa1Indx) {
            if (i == lengthOfa1 - 1) {
                i = 0;
                j = 0;
                tempV = "";
            }
            else {
                j = 0;
                i++;
                tempV = "";
            }
        }
    }, 250);
})