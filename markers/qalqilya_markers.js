 Qalqilya_markerData = [

       {
          lat: 32.1859621, lng: 35.1808503,
          title: "<h3> أماتين </h3> ",
       },
       {
          lat: 32.2066502, lng: 35.1238408,
          title: "<h3> باقة الحطب </h3> ",
       },
       {
          lat: 32.1318625, lng: 35.021907,
          title: "<h3> بيت أمين </h3> ",
       },
       {
          lat: 32.2140405, lng: 35.1898593,
          title: "<h3> جيت / جت </h3> ",
       },
       {
          lat: 32.2001117, lng: 35.1078068,
          title: "<h3> جيوس </h3> ",
       },
       {
          lat: 32.1644413, lng: 34.968216,
          title: "<h3> حبلة </h3> ",
       },
       {
          lat: 32.2010648, lng: 35.0857562,
          title: "<h3> خربة صير </h3> ",
       },
       {
          lat: 32.1291653, lng: 35.0649516,
          title: "<h3> سنيريا / سنيرية </h3> ",
       },
       {
          lat: 32.1757377, lng: 34.9978541,
          title: "<h3> عرب الرماضين الجنوبي </h3> ",
       },
       {
          lat: 32.199802, lng: 35.0098859,
          title: "<h3> عرب الرماضين الشمالي </h3> ",
       },
       {
          lat: 32.1770993, lng: 35.0734666,
          title: "<h3> عزون </h3> ",
       },
       {
          lat: 32.1236653, lng: 35.0359906,
          title: "<h3> عزون بن عَتْمَة </h3> ",
       },
       {
          lat: 32.1718295, lng: 35.032959,
          title: "<h3> عسلة </h3> ",
       },
       {
          lat: 32.1402105, lng: 35.020122,
          title: "<h3> عزبة الأشقر </h3> ",
       },
       {
          lat: 32.1821537, lng: 35.0378509,
          title: "<h3> عزبة الطبيب </h3> ",
       },
       {
          lat: 32.1505597, lng: 34.9958085,
          title: "<h3> عزبة جلعود </h3> ",
       },
       {
          lat: 32.142663, lng: 35.0077395,
          title: "<h3> عزبة سلمان </h3> ",
       },
       {
          lat: 32.2221933, lng: 35.0245754,
          title: "<h3> فلامية </h3> ",
       },
       {
          lat: 32.1527973, lng: 35.0627996,
          title: "<h3> كفر ثلث </h3> ",
       },
       {
          lat: 32.2227133, lng: 35.1606426,
          title: "<h3> كفر قدوم </h3> ",
       },
       {
          lat: 32.1824043, lng: 35.1080506,
          title: "<h3> كفر لاقف </h3> ",
       },
       {
          lat: 32.1667833, lng: 35.0031924,
          title: "<h3> وادي الرشا </h3> ",
       },



	//Missing places in pdf
/*


       {
          lat: 32.1846827, lng: 35.0899108,
          title: "<h3> النبي إلياس/ خربة النبي إلياس </h3> ",
       },
       {
          lat: 32.178611111111, lng: 35.129444444444,
          title: "<h3> جينصافوط </h3> ",
       },
       {
          lat: 32.177459, lng: 35.0103891,
          title: "<h3> عَرَب أبو فَرْدَة </h3> ",
       },
       {
          lat: 32.1307529, lng: 35.0116252,
          title: "<h3> عِزْبَة المُدَوَّر/ المُدَوَّر- العِزَبْ الغربية </h3> ",
       },

*/
       
     

   ];







for (let i = 0; i < Qalqilya_markerData.length; i++) {
    let QalqilyamarkerTitle = Qalqilya_markerData[i].title;

    QalqilyamarkerTitle = `<div style="max-width: 400px; padding: 0px; text-align: right;">${QalqilyamarkerTitle}</div>`;
    QalqilyamarkerTitle = QalqilyamarkerTitle.replace(/<p>(.*?)<\/p>/g, '<p style="font-size: 16px; margin-top: -8px; margin-bottom: 5px; text-indent: 28px; direction:rtl">$1</p>');
    QalqilyamarkerTitle = QalqilyamarkerTitle.replace(/<b>(.*?)<\/b>/g, '<b style="font-size: 15px; font-wight: bold;">$1</b>');
  

    Qalqilya_markerData[i].title = QalqilyamarkerTitle;
}