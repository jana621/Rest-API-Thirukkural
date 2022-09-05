function foo(){
    
    let cc = document.getElementById('text').value;
    console.log(cc);
    if(cc==""){
        alert("Invalid Input=>(Input should be from 1 to 1330)")
    }

    async function getdata(){
    let thirukkuralurl = await fetch(`https://api-thirukkural.vercel.app/api?num=${cc}`);
    let thirukkuraldata = await thirukkuralurl.json();
    // console.log(thirukkuraldata);
    let tamil = "Tamil: "+thirukkuraldata.line1+" "+thirukkuraldata.line2;
    let english = "English: "+thirukkuraldata.eng;
    let explanation = "Explanation: "+thirukkuraldata.eng_exp;

    let aa = document.createElement('ul');
    aa.innerHTML=`<h6><li>${tamil}</li> <li>${english}</li> <li>${explanation}</li></h6>`
    document.body.append(aa);
 
    }
    getdata();
};
