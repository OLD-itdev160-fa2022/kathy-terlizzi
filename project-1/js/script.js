(function(){

    var houseInfo = {
        address: '2020 North Street',
        cityState: 'Mukwonago, WI',
        startDate: 12,
        endDate: 31,
        month: 9,
        textMonth: 'October',
        year: '2021',
        startTime: '7:00',
        endTime:'11:00',
        cost: '10.00',
        open: false

    };



    addressEl = document.getElementById('address');
    cityStateEl = document.getElementById('city-state');
    datesEl = document.getElementById('dates');
    timeEl = document.getElementById('time');
    costEl = document.getElementById('cost');
    openEl = document.getElementById('open');

    addressEl.textContent = houseInfo.address;
    cityStateEl.textContent = houseInfo.cityState;
    datesEl.textContent = `${houseInfo.textMonth} ${houseInfo.startDate}-${houseInfo.endDate}`;
    timeEl.textContent = houseInfo.startTime +'pm -' +houseInfo.endTime+'pm';
    costEl.textContent = `\$${houseInfo.cost}`;
    

    // PART II: Calculate if House is OPEN and display if true.

    var todaysDate = new Date();
    var todaysMonth = todaysDate.getMonth();
    var todaysDate = todaysDate.getDate();

    if (todaysMonth == houseInfo.month){
        if((todaysDate >= houseInfo.startDate)&&(todaysDate <= houseInfo.endDate)){
            houseInfo.open = true;
            

        }
    }

    if (houseInfo.open==true){
        openEl.textContent= 'OPEN';
    }


}());