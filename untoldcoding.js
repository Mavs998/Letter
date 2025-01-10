const text =
  "'Happy Happy Anniversary to my most precious and most caring love 💕! Thank you so much sa 1 year na pagsasama natin, love. Parang kailan lang pero ang bilis ng panahon. I’m so happy and blessed to have you in my life. I’m beyond thankful because God gave me you—someone so special, irreplaceable, and the most beautiful part of my world. Kahit anong mangyari, kahit anong pagtotoyo mo, pagtatampo mo, or pagsusungit mo, love, you will always be the one I choose—no one else. Alam ko na minsan, naiinis ka na lang sa akin kasi hindi ko nagagawa ang mga bagay na gusto mo, pero love, para sayo, I will do my best to improve. You deserve my efforts, my love, because mahal na mahal kita. As long as Im here, you will always be loved and cared for in the way you truly deserve. For you, my love, I give everything I can. I will love you unconditionally, treat you like a princess, like a queen—because thats what you are to me. Alam kong hindi ko man maibigay sayo lahat ngayon, pero darating ang araw na I will fulfill all my promises to you. I will work hard to make sure na maramdaman mo ang pagmamahal at seguridad na gusto kong maibigay para sa atin. Gusto ko lang malaman mo na sa bawat moment ng buhay ko, ang gusto ko lang ay ikaw ang kasama ko. Sa lahat ng victories ko, gusto ko ikaw ang dahilan ng mga ngiti ko. Sa mga paghihirap at problema, gusto kong ikaw ang lakas ko. You are not just my partner, love—you are my home, my happiness, and my greatest blessing. Darating ang araw, love, I will give you the life you have always dreamed of. Just stay with me, believe in me, and trust our love. Alam kong kaya natin lahat ng pagsubok, kasi mahal na mahal kita, parang mundo parang earth!! Isa ka sa mga dahilan kung bakit ako nagpapakatatag at nagpupursige sa lahat ng ginagawa ko. Ikaw ang isa sa inspiration ko, ang dahilan ng mga pangarap ko. Lagi mong tatandaan na wala akong ibang gusto kundi ikaw—ang kaligayahan mo, ang ngiti mo, at ang pagmamahal mo. Again, Happy 1st Anniversary, my Love. I am so excited for all the memories we will create, for all the challenges we will overcome, and for the beautiful life we will build together. Mahal na mahal kita nang higit pa sa mga salita. Heres to forever with you. 💖💍'";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
