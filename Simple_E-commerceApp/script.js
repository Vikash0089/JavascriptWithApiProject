const images = [
    { src: 'image/p1.jpg', description: ' Horliks  1 kg Rs.560', additionalInfo: 'Store name(Jai Maa Ambey Pharma )', buttonText: 'Discount Rs.40', otpMessage: 'Your discount coupon for 1kg Horlicks  is: ' },
    { src: 'image/b1.jpg', description: ' Bournvita 1 kg Rs.406', additionalInfo: 'Store name(Jai Maa Ambey Pharma ) ', buttonText: 'Discount Rs.30', otpMessage: 'Your discount coupon for 1kg Bournvita  is:  ' },
    { src: 'image/c1.jpg', description: 'Complan 1kg Rs.430', additionalInfo: 'Store name(Jai Maa Ambey pharma )', buttonText: 'Discount Rs.30', otpMessage: 'Your discount coupon for 1kg Complan  is:  ' },
    { src: 'image/a1.jpg', description: 'Adult Daiper Rs.280', additionalInfo: 'Store name(Jai Maa Ambey Pharma )', buttonText: 'Discount Rs.30', otpMessage: 'Your discount coupon for Adult Huggies  is:  ' },
    { src: 'image/h2.jpg', description: '500g Horlicks Rs.284', additionalInfo: 'Store name(Jai Maa Ambey Pharma )', buttonText: 'Discount Rs.30', otpMessage: 'Your discount coupon for 500g Horlicks  is:  ' },
    { src: 'image/cg1o.jpg', description: 'Furtune Oil 1Lit. Rs.170', additionalInfo: 'Store name(Barnwal Kirana Store)', buttonText: 'Discount Rs.30', otpMessage: 'Your discount coupon for 1 lit. Oil  is: ' },
    { src: 'image/cgo1.jpg', description: 'Furtune Oil 1Lit. Rs.140', additionalInfo: 'Store name(Barnwal Kirana Store )', buttonText: 'Discount Rs.30', otpMessage: 'Your discount coupon for 1 lit.Oil  is:  ' },
    { src: 'image/N1.jpg', description: 'Haldiram Bhujia Rs.75', additionalInfo: 'Store name(Gupta Kirana Store )', buttonText: 'Discount Rs.30', otpMessage: 'Your discount coupon for 600g Namkin  is: ' },
    { src: 'image/N2.jpg', description: 'Haldiram Aloo Bhujia Rs.77', additionalInfo: 'Store name(Jaiswal Super Market )', buttonText: 'Discount Rs.30', otpMessage: 'Your discount coupon for 600g Namkin is: ' },
    { src: 'image/H1.jpg', description: 'Huggies Rs.399', additionalInfo: 'Store name(Jai Maa Ambey Pharma )', buttonText: 'Discount Rs.70', otpMessage: 'Your discount coupon for Baby Huggies  is:  ' }
];

const content = document.getElementById('content');

images.forEach((image, index) => {
    const imageBox = document.createElement('div');
    imageBox.className = 'image-box';

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = `Image ${index + 1}`;

    const description = document.createElement('p');
    description.textContent = image.description;

    const showBoxButton = document.createElement('button');
    showBoxButton.id = `showBoxButton${index}`;
    showBoxButton.textContent = image.buttonText;

    const moreInfoBox = document.createElement('div');
    moreInfoBox.className = 'more-info-box';
    moreInfoBox.id = `moreInfoBox${index}`;

    const moreInfoText = document.createElement('p');
    moreInfoText.textContent = image.additionalInfo;

    const generateOTPButton = document.createElement('button');
    generateOTPButton.id = `generateOTPButton${index}`;
    generateOTPButton.textContent = 'Discount Code';

    moreInfoBox.appendChild(moreInfoText);
    moreInfoBox.appendChild(generateOTPButton);

    imageBox.appendChild(img);
    imageBox.appendChild(description);
    imageBox.appendChild(showBoxButton);
    imageBox.appendChild(moreInfoBox);

    content.appendChild(imageBox);

    let otpGenerated = false;

    showBoxButton.addEventListener('click', () => {
        moreInfoBox.style.display = 'block';
    });

    generateOTPButton.addEventListener('click', () => {
        if (!otpGenerated) {
            const otp = Math.floor(1000 + Math.random() * 9000);
            alert(image.otpMessage + otp);
            otpGenerated = true;
            generateOTPButton.disabled = true;
        } else {
            alert('OTP has already been generated.');
        }
    });
});