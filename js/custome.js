
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".hidden-section");

  function revealOnScroll() {
    sections.forEach(sec => {
      const secTop = sec.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100; // وقت الظهور

      if (secTop < triggerPoint) {
        sec.classList.add("show-section");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});









window.addEventListener("load", function() {
      const loaderWrapper = document.querySelector(".loader-wrapper");
      const content = document.getElementById("content");

      // بعد 3 ثواني من تحميل الصفحة
      setTimeout(() => {
        loaderWrapper.classList.add("hide"); // إضافة كلاس الإخفاء

        // بعد انتهاء الانتقال (1.5 ثانية)
        setTimeout(() => {
          loaderWrapper.style.display = "none"; // إزالة العنصر نهائيًا
          content.style.display = "block"; // إظهار المحتوى
        }, 100);
      }, 10000);
    });











    



    
    // const words = ["Functional Website", "Mobile App", "UI/UX Design", "Software", "Branding"];
    // let i = 0;
    // const el = document.getElementById("changing-word");

    // function typeWord() {
    //     let word = words[i];
    //     let j = 0;

    //     function typing() {
    //         if (j < word.length) {
    //             el.textContent += word[j];
    //             j++;
    //             setTimeout(typing, 80);
    //         } else {
    //             setTimeout(deleteWord, 1000);
    //         }
    //     }

    //     function deleteWord() {
    //         if (el.textContent.length > 0) {
    //             el.textContent = el.textContent.slice(0, -1);
    //             setTimeout(deleteWord, 40);
    //         } else {
    //             i = (i + 1) % words.length;
    //             typeWord();
    //         }
    //     }

    //     typing();
    // }

    // typeWord();

     
// <h1 class="type-title">
//   We create <span id="changing-word"></span>
// </h1>




// .type-title {
//     font-size: 40px;
//     color: #fff;
//     font-weight: 300;
// }

// #changing-word {
//     position: relative;
//     color: #fff;
//     border-right: 2px solid #00b7ff; 
//     padding-right: 5px;
//     animation: blink 0.6s infinite;
// }

// @keyframes blink {
//     0% { border-color: transparent; }
//     50% { border-color: #00b7ff; }
//     100% { border-color: transparent; }
// }
