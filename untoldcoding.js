const text =
  "Happy Happy Anniversary to my most precious and most caring love 💕, thank you so much sa 1 year na pagsasama natin love its been like a while pero ang bilis ng panahon, im so happy that I have you in my life, im very thankful because God gave me you nothing compares to you my love, kahit anong mangyari kahit anong pag totoyo mo, pag tatampo mo or pag susungit mo love still be you no one else alam ko na minsan naiinis ka nalang sakin kasi diko nagagawa yung mg bagay na gusto mo pero para sayo love gagawin kong mabago yun kasi mahal na mahal kita as long as im here you will be loved, for you my love I gave the love that you deserve, I will treat you like a princess, a queen thats the treatment that you deserve, my love hindi ko man maibigay sayo lahat ngayon but I want you be at my side in my winning time and also in my bad time soon i will give you all love just be with me, i love you so much more than words my love mahal na mahal kita parang mundo parang earth, Again Happy 1st Anniversary my Love💕😘";

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
