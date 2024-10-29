document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("screen");
    const buttons = document.querySelectorAll(".button");
    let currentInput = ""; // Kullanıcının girdiği değerleri tutar
    let lastInput = ""; // En son basılan tuşu takip eder
    const operators = ["+", "-", "*", "/", "(", ")"]; // İşlem karakterleri
    let isOpenParenthesis = false; // Parantez açık mı?
    let isCloseParenthesis = false; // Kapatma parantezi kullanıldı mı?

    function addToExpression(value) {
        const display = document.getElementById("display"); // Ekran elementini al

        // Açma parantezini kontrol et
        if (value === '(') {
            if (!isOpenParenthesis) { // Eğer parantez açılmadıysa
                display.value += value; // Ekrana açma parantezini ekle
                isOpenParenthesis = true; // Parantez açıldı
                isCloseParenthesis = false; // Kapatma parantezi kullanılmadı
            }
        } 
        // Kapatma parantezini kontrol et
        else if (value === ')') {
            if (isOpenParenthesis && !isCloseParenthesis) { // Açma parantezi varsa ve kapanmamışsa
                display.value += value; // Ekrana kapama parantezini ekle
                isCloseParenthesis = true; // Kapatma parantezi kullanıldı
            }
        } 
        // Diğer değerleri ekle
        else {
            display.value += value; // Diğer değerleri ekle
        }
    }

    // Temizleme fonksiyonu, tüm durumları sıfırlar
    function clearDisplay() {
        const display = document.getElementById("display");
        display.value = ""; // Ekranı temizle
        isOpenParenthesis = false; // Parantez durumunu sıfırla
        isCloseParenthesis = false; // Kapatma durumu sıfırla
    }

    function calculate() {
        const display = document.getElementById("display");
        // Hesaplama işlemleri burada yapılacak
    }


    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.innerText;

            if (value === "C") {
                // "C" butonuna basıldığında temizleme işlemi
                currentInput = "";
                screen.innerText = "0";
                lastInput = "";
            } else if (value === "=") {
                // "=" butonuna basıldığında işlemi hesapla
                try {
                    currentInput = eval(currentInput); // İşlemi hesapla
                    screen.innerText = currentInput;
                    lastInput = currentInput; // Sonuç son input olur
                } catch (error) {
                    screen.innerText = "Hata";
                    currentInput = "";
                }
            } else {
                // Eğer son basılan tuş bir işlemse ve şu anki değer de işlemse
                if (operators.includes(lastInput) && operators.includes(value) && value !== "(" && lastInput !== ")") {
                    // Yeni işlem karakterini eklemeden önce önceki işlemi sil
                    currentInput = currentInput.slice(0, -1);
                }

                // İşlemi güncelle ve ekrana yazdır
                currentInput += value;
                screen.innerText = currentInput;
                lastInput = value; // Son basılan tuşu güncelle
            }
            let isOpenParenthesis = false; // Parantez açık mı?
            let isCloseParenthesis = false; // Kapatma parantezi kullanıldı mı?

            function addToExpression(value) {
                const display = document.getElementById("screen"); // Ekran elementini al

                // Açma parantezini kontrol et
                if (value === '(') {
                    if (!isOpenParenthesis) { // Eğer parantez açılmadıysa
                        display.value += value; // Ekrana açma parantezini ekle
                        isOpenParenthesis = true; // Parantez açıldı
                        isCloseParenthesis = false; // Kapatma parantezi kullanılmadı
                    }
                } 
                // Kapatma parantezini kontrol et
                else if (value === ')') {
                    if (isOpenParenthesis && !isCloseParenthesis) { // Açma parantezi varsa ve kapanmamışsa
                        display.value += value; // Ekrana kapama parantezini ekle
                        isCloseParenthesis = true; // Kapatma parantezi kullanıldı
                    }
                } 
                // Diğer değerleri ekle
                else {
                    display.value += value; // Diğer değerleri ekle
                    // Eğer işlem yapılırsa kapama parantezi durumu sıfırlanır
                    if (isCloseParenthesis) {
                        isCloseParenthesis = false; // Kapatma durumu sıfırla
                    }
                }
            }

            // Temizleme fonksiyonu, tüm durumları sıfırlar
            function clearDisplay() {
                const display = document.getElementById("screen");
                display.value = ""; // Ekranı temizle
                isOpenParenthesis = false; // Parantez durumunu sıfırla
                isCloseParenthesis = false; // Kapatma durumu sıfırla
            }



        });
    });
});
