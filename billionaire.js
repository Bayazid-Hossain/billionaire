const showAll = document.getElementById('show-all');
const spinner = document.getElementById('spinner');
let allData ;
//  all data load
const allDataLoadRichest =async(url)=>{
    spinner.classList.remove('d-none')
    const res = await fetch(url);
    const data = await res.json();
    allData = data;
    showAllDataRichest(data.slice(0,10))
    
};




// show add richest data

const showAllDataRichest= data =>{
    const richestContainer = document.getElementById('riched-container');
    richestContainer.innerHTML = '';
    // console.log(richestContainer);
    try{
        if(data.length <= 10){
            showAll.classList.remove('d-none');
        }else{
            showAll.classList.add('d-none');
        }
        data.slice(0,10)
        data.forEach(singleBillionaire => {
            spinner.classList.add('d-none')
            const {personName,countryOfCitizenship, city, squareImage,financialAssets,state} = singleBillionaire;
            richestContainer.innerHTML += `
            <div class="col  border border-primary p-2 bg-dark text-white rounded">
                <div>
                <h1 class="text-center fs-4 py-4">${personName}</h1>
                <div class="h-100 d-flex  justify-content-between">
                  <img style="width: 200px; height: 200px;" src="${squareImage}" class="img-fluid" alt="...">
                  <div class="card-body">
                    <h5>Citizenship : ${countryOfCitizenship}</h5>
                    <h5>State : ${state ? state : 'not available'}</h5>
                    <h5>City : ${city}</h5>
                    <h5>Total Shares : ${financialAssets ? financialAssets[0].numberOfShares : "not available"}</h5>
                    <h5>Share Price : ${financialAssets ? financialAssets[0].sharePrice : "not available"}</h5>
                  </div>
              </div>
                </div>
            </div>
            `
        });

       

    }catch(err){
        console.log(err);
    }
}

// show all richest 
const showAllRichest=()=>{
    console.log(allData);
    showAllDataRichest(allData)
}

const allBillionaires = ()=>{
    const url = `https://forbes400.onrender.com/api/forbes400?limit=15`
    allDataLoadRichest(url);
    
}
const richestByIndustry = ()=>{
    const url = `https://forbes400.onrender.com/api/forbes400/industries/technology`
    allDataLoadRichest(url);
}
const richestByState = ()=>{
    const url = `https://forbes400.onrender.com/api/forbes400/states/Texas`
    allDataLoadRichest(url);
}

