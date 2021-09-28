
document.getElementById("addbtn")?.addEventListener('click', function () {
    var data = JSON.stringify(document.getElementsByClassName("form-control")[0].value);
    

    chrome.tabs.query({currentWindow:true, active: true}, function(tabs) {
      var tab = tabs[0];
      
      chrome.tabs.executeScript(tab.id, {
        code: `
        let newdata = ${JSON.parse(data)}
        console.log(${JSON.parse(data)})
        newdata.map((item,index)=>{
        
        
        const nameinput = document.getElementsByClassName('namefield');
        const phoneinput = document.getElementsByClassName('phonefield');
        const roleinput = document.getElementsByClassName('rolefield');
        const emailinput = document.getElementsByClassName('emailinput');
        const addbtn = document.getElementsByClassName('add-role')[0];
        
        
        if(index!==0){
            document.getElementsByTagName('input')[document.getElementsByTagName('input').length-4].value=item.role
        };
        console.log('first')
        document.getElementsByTagName('input')[document.getElementsByTagName('input').length-3].value=item.name;
        document.getElementsByTagName('input')[document.getElementsByTagName('input').length-2].value=item.email;
        document.getElementsByTagName('input')[document.getElementsByTagName('input').length-1].value=item.phone;
        console.log('last')
        if(index!==newdata.length-1){
            addbtn.click();
            console.log('clicked')
        
        }
    
        })
        
        
        //send btn
        /* document.getElementsByClassName('add-role')[0].click(); */
  

        `
      });
    });
})

