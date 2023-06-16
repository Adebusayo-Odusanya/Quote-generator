const randomButton = document.getElementById('random');
const quoteSpacediv = document.getElementById('quoteSpace');
const goodButtonDiv = document.getElementById('goodButton');
const badButtonDiv = document.getElementById('badButton');
const titleDiv =  document.getElementById('title')



const randomMotivation = (number) => {
    number = Math.floor(Math.random() * 6) + 1;
 switch(number) {
   case 1:
     return "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson"
   case 2:
       return "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
   case 3:
       return "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. - Steve Jobs"
   case 4:
       return "Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma, which is living the result of other people's thinking. - Steve Jobs"
   case 5:
       return "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
   case 6:
       return "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
  break;
 }
}


const goodMood = (num) => {
   num = Math.floor(Math.random() * 7);
   if (num === 0) {
       return "A good mood is like a ray of sunshine that brightens every aspect of your life. Embrace it, spread it, and watch as the world around you transforms into a place of joy and possibility."
   } else if (num === 1) {
       return "Happiness is a gift that multiplies when shared. By continuing to be happy, you inspire others to find joy in their own lives and create a ripple effect of positivity."
   } else if (num === 2) {
       return "In a good mood, your heart dances to the rhythm of life's beautiful melodies. It unlocks your creativity, fuels your passions, and brings out the best version of yourself."
   } else if (num === 3) {
       return "Life is a journey, and happiness is the fuel that propels us forward. By choosing to remain happy, you embrace the present moment, cherish the beauty in everyday experiences, and create a fulfilling and meaningful life worth living."
   } else if (num === 4) {
       return "Being happy is not only a state of mind but also a powerful tool for personal growth and resilience. By embracing your happiness, you empower yourself to overcome challenges with a positive mindset and unlock your full potential."
   } else if (num === 5) {
       return "A good mood is a superpower that radiates positivity and attracts abundance. It sets the stage for success, strengthens relationships, and makes every day a celebration of life's blessings."
   } else if (num === 6) {
       return "A good mood is like a ray of sunshine that brightens every aspect of your life. Embrace it, spread it, and watch as the world around you transforms into a place of joy and possibility."
   }
}
//console.log(goodMood());

const badMood = (number) => {
   number = Math.floor(Math.random() * 6) + 1;
 switch(number) {
   case 1:
     return "Even in the darkest of times, remember that a bad mood is just a passing cloud. It doesn't define you, and it will eventually give way to brighter skies."
   case 2:
       return "When life gives you a bad mood, turn it into fuel for personal growth. Use it as a catalyst to discover your inner strength and resilience."
   case 3:
       return "Every storm runs out of rain, and every bad mood runs out of reasons. Stay strong, for the sun will shine on your spirit once again."
   case 4:
       return "Choosing not to be sad in a bad mood is an act of defiance against the challenges that life throws at you. It's a reminder that you have the power to rise above any circumstance."
   case 5:
       return "Being sad in a bad mood is like watering a weed instead of tending to the flowers. Choose joy instead, and watch as your spirit blossoms and flourishes despite the difficulties."
   case 6:
       return "Remember, a bad mood is not a life sentence. It's merely a temporary state that can be transformed by shifting your focus to gratitude, self-care, and the beauty that still exists in the world."
  break;
 }
}
//console.log(badMood())

goodButton.onclick = () => {
    quoteSpacediv.innerHTML = goodMood()
}

badButtonDiv.onclick = () => {
    quoteSpacediv.innerHTML = badMood()
}

randomButton.onClick = () => {
    quoteSpacediv.innerHTML = randomMotivation()
   
}
