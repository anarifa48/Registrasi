Feature('Registrasi');

Scenario('Registrasi User', ({ I }) => {
    I.amOnPage('https://qa-engineer.logique.co.id/')
    I.fillField('#customer_email','anarifa48+126@gmail.com')
    I.fillField('#customer_firstname','Nanik')
    I.fillField('#customer_lastname','Anarifah')
    I.fillField('#customer_address','Yogyakarta')
    I.fillField('#customer_city','Yogyakarta')
    I.fillField('#customer_phone','0294000777')
    I.fillField('#customer_mobile','0895348374')
    I. scrollPageToBottom()
    I.fillField('#customer_ktp','3344556677889900')
    I.fillField('#customer_sim','234565676543')
    I.click('#customer_status')
    I.selectOption('#customer_status','Wiraswasta')
    I.fillField('#company_name','Logique')
    I.fillField('#company_phone','039723435')
    I.fillField('#company_address','Jakarta')
    I.see('Metode Penyetoran Jaminan')
    I.attachFile('#customer_ktp_file','data/download.jpg')
    I.checkOption('#agreement')
    I.click('#wp-view')
    I.wait(10)
    I.see('Terimakasih telah mendaftar di website kami')
    
});
