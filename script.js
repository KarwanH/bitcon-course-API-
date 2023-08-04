const apiKey = 'C0Z70I8KPOQY75O0';
let dates = ['2021-12-31','2022-01-31','2022-02-28','2022-03-31','2022-04-30','2022-05-31','2022-06-30','2022-07-31','2022-08-31','2022-09-30','2022-10-31','2022-11-30','2022-12-31','2023-01-31','2023-02-28','2023-03-31','2023-04-30','2023-05-31','2023-06-30','2023-07-31'];
let course = [];


async function init(){
    chartJs();
    await loadCousre();
    await loadMontlyCourse();

}

async function loadCousre() {
    url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=${apiKey}`;
    const  response = await fetch(url);
    const responsAsJson = await response.json();
    const currentCourse =  parseFloat(responsAsJson['Realtime Currency Exchange Rate']['5. Exchange Rate']);
    const courseInEur = currentCourse.toLocaleString('de-DE', {
        style: 'currency', 
        currency: 'EUR', 
        minimumFractionDigits: 2
    });

    document.getElementById('course').innerHTML = courseInEur;
}


async function loadMontlyCourse() {
    url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=EUR&apikey=${apiKey}`
    const  response = await fetch(url);
    const responsAsJson = await response.json();
    const monthlyCourse = responsAsJson['Time Series (Digital Currency Monthly)'];

    for (let i = 0; i < dates.length; i++) {
        const coursetEachMonth = monthlyCourse[dates[i]]['1a. open(EUR)'].toLocaleString('de-DE', {
            style: 'currency', 
            currency: 'EUR', 
            minimumFractionDigits: 2
        });

        course.push(coursetEachMonth);
        
    }

}


