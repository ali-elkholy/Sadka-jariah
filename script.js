// عناصر DOM
const recipientNameInput = document.getElementById('recipientName');
const greetingTypeSelect = document.getElementById('greetingType');
const personalMessageInput = document.getElementById('personalMessage');
const generateCardButton = document.getElementById('generateCard');

// توليد البطاقة
generateCardButton.addEventListener('click', () => {
    const recipientName = recipientNameInput.value.trim();
    const greetingType = greetingTypeSelect.value;
    const personalMessage = personalMessageInput.value.trim();

    if (recipientName && greetingType && personalMessage) {
        const cardData = {
            title: `تهنئة بمناسبة ${greetingType}`,
            message: `عزيزي ${recipientName},\n\n${personalMessage}\n\nمع أطيب التمنيات!`
        };

        // حفظ البيانات في localStorage
        localStorage.setItem('cardData', JSON.stringify(cardData));

        // الانتقال إلى صفحة عرض البطاقة
        window.location.href = 'card.html';
    } else {
        alert('يرجى ملء جميع الحقول!');
    }
});
