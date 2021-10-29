var modal
var modalContent
var lastNumEggs=-1
var lastNumMiners=-1
var lastSecondsUntilFull=100
lastHatchTime=0
var eggstohatch1=2592000
var lastUpdate=new Date().getTime()
var modalID=0
var baseNum = '';
var currentAddr = '';
var spend;
var usrBal;
var lotterySpendLimit = 0;

window.addEventListener('load', async function() {
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable() // Request access
        minersContract = await new web3.eth.Contract(minersAbi, minersAddr)
        tokenContract = await new web3.eth.Contract(tokenAbi, tokenAddr)
        lotteryContract = await new web3.eth.Contract(lotteryAbi, lotteryAddr)
        let accounts = await web3.eth.getAccounts()
        currentAddr = accounts[0]
        setTimeout(function(){
            controlLoop()
            controlLoopFaster()
        },1000);
      } catch (error) {
          // User denied account access...
          console.error(error)
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      minersContract = await new web3.eth.Contract(minersAbi, minersAddr)
      tokenContract = await new web3.eth.Contract(tokenAbi, tokenAddr)
	  lotteryContract = await new web3.eth.Contract(lotteryAbi, lotteryAddr)
      let accounts = await web3.eth.getAccounts()
      currentAddr = accounts[0]
      setTimeout(function(){
          controlLoop()
          controlLoopFaster()
      },1000);
    }
    
    var prldoc=document.getElementById('playerreflink')
    prldoc.textContent=window.location.origin+"?ref="+currentAddr
    var copyText = document.getElementById("playerreflink");
    copyText.value=prldoc.textContent
})

function approve() {
    var trxspenddoc=document.getElementById('spend-allowance')
    console.log(trxspenddoc);
    approveCAKE(web3.utils.toWei(trxspenddoc.value.toString()));
}

function controlLoop(){
    refreshData()
    setTimeout(controlLoop,5000)
}
function controlLoopFaster(){
    //liveUpdateEggs()
    // liveUpdatePeers()
    setTimeout(controlLoopFaster,30)
}

function stripDecimals(str, num){
	if (str.indexOf('.') > -1){
		var left = str.split('.')[0];
		var right = str.split('.')[1];
		return left + '.' + right.slice(0,num);
	}
	else {
		return str;
	}
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function refreshData(){

    var balanceElem = document.getElementById('contract-balance');
    var baseNum = 0;
    contractBalance(function(result){
        rawStr = numberWithCommas(Number(result).toFixed(2));
        balanceElem.textContent = stripDecimals(rawStr, 2) + ' CAKE';
    });

    // UserTotalDeposits 
    var userDepositElem = document.getElementById('user-deposits');
    var baseNum = 0;
    userTotalDeposits(function(result){
        rawStr = numberWithCommas(Number(result).toFixed(2));
        userDepositElem.textContent = stripDecimals(rawStr, 3) + ' CAKE';
    });

    var investedElem = document.getElementById('total-invested');
    var baseNum = 0;
    totalInvested(function (result) {
        rawStr = numberWithCommas(Number(result).toFixed(2));
        investedElem.textContent = stripDecimals(rawStr, 2) + ' CAKE';
    });


    // var userDownlineCountElem = document.getElementById('user-downline-count');
    // userDownlineCount(function(result){
        // rawStr = Number(result).toFixed(0);
        // userDownlineCountElem.textContent = stripDecimals(rawStr);
    // });

   // userDividends

    // var userDividendsElem = document.getElementById('user-dividends');
    // userDividends(function(result){
        // rawStr = Number(result).toFixed(3);
        // userDividendsElem.textContent = stripDecimals(rawStr) + ' CAKE';
    // });

    var userAvailableElem = document.getElementById('user-available');
    userAvailable(function(result){
        rawStr = Number(result).toFixed(3);
        userAvailableElem.textContent = stripDecimals(rawStr) + ' CAKE';
    });


    // var userAmountOfDepositsElem = document.getElementById('user-amount-of-deposits');
    // userAvailable(function(result){
        // rawStr = Number(result).toFixed(0);
        // userAmountOfDepositsElem.textContent = stripDecimals(rawStr) + ' CAKE';
    // });

    var userTotalWithdrawnElem = document.getElementById('user-total-withdrawn');
    userTotalWithdrawn(function(result){
        rawStr = Number(result).toFixed(3);
        userTotalWithdrawnElem.textContent = stripDecimals(rawStr) + ' CAKE';
    });

    var userReferralTotalBonusElem = document.getElementById('user-referral-total-bonus');
    userReferralTotalBonus(function(result){
        rawStr = Number(result).toFixed(3);
        userReferralTotalBonusElem.textContent = stripDecimals(rawStr) + ' CAKE';
    });

    
    // var userTotalReferralsElem = document.getElementById('user-total-referrals');
    // userTotalReferrals(function(result){
        // rawStr = Number(result).toFixed(3);
        // userTotalReferralsElem.textContent = rawStr.toLocaleString() + " CAKE";
    // });

    var spentLimitElem = document.getElementById('spend-limit');
    spendLimit(function(result){
        rawStr = Number(result).toFixed(3);
        spentLimitElem.textContent = rawStr.toLocaleString() + " CAKE";
		spend = Number(result);
    });

    var userBalanceElem = document.getElementById('user-balance');
    userBalance(function(result){
        rawStr = Number(result).toFixed(3);
        userBalanceElem.textContent = rawStr.toLocaleString() + " CAKE";
    });
	
	var myInvestPlan1Elem = document.getElementById('my-invest-plan1');
	var plan = 1;
	/*userPlanTotalAmount(plan-1, function(result){
		if(result){
			var amount = web3.utils.fromWei(result);
			rawStr = Number(amount).toFixed(3);
			myInvestPlan1Elem.textContent = "Balance: " + rawStr.toLocaleString() + " CAKE";
		}
    });*/
	DrawPlanAmount(plan-1, myInvestPlan1Elem);
	
	var myInvestPlan2Elem = document.getElementById('my-invest-plan2');
	var plan = 2;
	/*userPlanTotalAmount(plan-1, function(result){
		if(result){
			var amount = web3.utils.fromWei(result);
			rawStr = Number(amount).toFixed(3);
			myInvestPlan2Elem.textContent = "Balance: " + rawStr.toLocaleString() + " CAKE";
		}
    });	*/
	DrawPlanAmount(plan-1, myInvestPlan2Elem);
	
	var myInvestPlan3Elem = document.getElementById('my-invest-plan3');
	var plan = 3;
	/*userPlanTotalAmount(plan-1, function(result){
		if(result){
			var amount = web3.utils.fromWei(result);
			rawStr = Number(amount).toFixed(3);
			myInvestPlan3Elem.textContent = "Balance: " + rawStr.toLocaleString() + " CAKE";
		}
    });*/
	DrawPlanAmount(plan-1, myInvestPlan3Elem);
	
	var myInvestPlan4Elem = document.getElementById('my-invest-plan4');
	var plan = 4;
	/*userPlanTotalAmount(plan-1, function(result){
		if(result){
			var amount = web3.utils.fromWei(result);
			rawStr = Number(amount).toFixed(3);
			myInvestPlan4Elem.textContent = "Balance: " + rawStr.toLocaleString() + " CAKE";
		}
    });*/
	DrawPlanAmount(plan-1, myInvestPlan4Elem);
	
	if(document.getElementById("lottery-invest-btn")){
		lottery_spendLimit(function(limit){
			lotterySpendLimit = limit;
			if( limit > 0 ){
				$("#lottery-invest-btn").prop('disabled', false);
				
				lottery_getMyInvest(function(result){			
					
					var amount = web3.utils.fromWei(result);

					var tickets = parseInt(amount);
					$("#lottery-invest").text(Number(amount).toFixed(3) + " (" + tickets + " tickets)");
					var currentSpendAmount = new Number(document.getElementById('lottery-spend-cake').value);
					
					if( new Number(amount) + currentSpendAmount <= 3 ){
						$("#lottery-invest-btn").prop('disabled', false);
						$("#lottery_warning_msg").text("");
					}else{
						$("#lottery-invest-btn").prop('disabled', true);
						$("#lottery_warning_msg").text("limit reached! 3 tickets max!");
					}
				});
				
			}else{
				$("#lottery-invest-btn").prop('disabled', true);
				$("#lottery_warning_msg").text("please approve");
			}
		});
		
		// if(lotterySpendLimit > 0 ){

		// }
		
		lottery_getLotteryWalletBalance(function(result){
			var amount = web3.utils.fromWei(result);

			$("#lottery-invest-total").text(Number(amount).toFixed(3));

		});
	}

}



function investInPlan1(){
    var trxspenddoc=document.getElementById('eth-to-spend1');
    ref=getQueryVariable('ref');
    //console.log("REF:" + ref);
    if (!web3.utils.isAddress(ref)){ref=currentAddr}
    //console.log(trxspenddoc.value)
    invest(ref, 0, trxspenddoc.value,  function(){
        displayTransactionMessage();
    });
}

function investInPlan2(){
    var trxspenddoc=document.getElementById('eth-to-spend2');
    ref=getQueryVariable('ref');

    //console.log("REF:" + ref);
    if (!web3.utils.isAddress(ref)){ref=currentAddr}
    invest(ref, 1, trxspenddoc.value,  function(){
        displayTransactionMessage();
    });
}

function investInPlan3(){
    var trxspenddoc=document.getElementById('eth-to-spend3');
    ref=getQueryVariable('ref');
    //console.log("REF:" + ref);
    if (!web3.utils.isAddress(ref)){ref=currentAddr}
    invest(ref, 2, trxspenddoc.value,  function(){
        displayTransactionMessage();
    });
}

function investInPlan4(){
    var trxspenddoc=document.getElementById('eth-to-spend4');
    ref=getQueryVariable('ref');
    //console.log("REF:" + ref);
    if (!web3.utils.isAddress(ref)){ref=currentAddr}
    invest(ref, 3, trxspenddoc.value,  function(){
        displayTransactionMessage();
    });
}





function removeModal2(){
    $('#adModal').modal('toggle');
}
function removeModal(){
        modalContent.innerHTML=""
        modal.style.display = "none";
}
function displayTransactionMessage(){
    displayModalMessage("Transaction Submitted")
}
function displayModalMessage(message){
    // modal.style.display = "block";
    // modalContent.textContent=message;
    // setTimeout(removeModal,3000)
}
function formatTrxValue(trxstr){
    return parseFloat(parseFloat(trxstr).toFixed(3));
}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
function secondsToString(seconds)
{
    seconds=Math.max(seconds,0)
    var numdays = Math.floor(seconds / 86400);

    var numhours = Math.floor((seconds % 86400) / 3600);

    var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);

    var numseconds = ((seconds % 86400) % 3600) % 60;
    var endstr=""

    return numhours + "h " + numminutes + "m "//+numseconds+"s";
}
function disableButtons(){
    var allnumminers=document.getElementsByClassName('btn-lg')
    for(var i=0;i<allnumminers.length;i++){
        if(allnumminers[i]){
            allnumminers[i].style.display="none"
        }
    }
    var allnumminers=document.getElementsByClassName('btn-md')
    for(var i=0;i<allnumminers.length;i++){
        if(allnumminers[i]){
            allnumminers[i].style.display="none"
        }
    }
}
function enableButtons(){
    var allnumminers=document.getElementsByClassName('btn-lg')
    for(var i=0;i<allnumminers.length;i++){
        if(allnumminers[i]){
            allnumminers[i].style.display="inline-block"
        }
    }
        var allnumminers=document.getElementsByClassName('btn-md')
    for(var i=0;i<allnumminers.length;i++){
        if(allnumminers[i]){
            allnumminers[i].style.display="inline-block"
        }
    }
}
function onlyLetters(text){
    return text.replace(/[^0-9a-zA-Z\s\.!?,]/gi, '')
}
function checkOnlyLetters(str){
    var pattern=new RegExp('^[0-9a-zA-Z\s\.!?,]*$')
      if(!pattern.test(str)) {
        return false;
      } else {
        return true;
      }
}
function onlyurl(str){
     return str.replace(/[^0-9a-zA-Z\.?&\/\+#=\-_:]/gi, '')
}
function validurlsimple(str){
    var pattern=new RegExp('^[a-z0-9\.?&\/\+#=\-_:]*$')
      if(!pattern.test(str)) {
        return false;
      } else {
        return true;
      }
}
function ValidURL(str) {
  var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
    '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
    '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
    '(\#[-a-z\d_]*)?$','i'); // fragment locater
  if(!pattern.test(str)) {
    alert("Please enter a valid URL.");
    return false;
  } else {
    return true;
  }
}
function callbackClosure(i, callback) {
    return function() {
        return callback(i);
    }
}
