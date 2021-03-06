var minersAddr = '0xa4A712179df587C2876B0b398439bfA0c4b45D14'; // test = '0x7f0446322a860Aca0E9DC1dDA9F1f4800Dbf6BA2';
var tokenAddr = '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82';
var lotteryAddr = '0xCeDDFb2c25786Fac9D5eEEC001Ce5d75FC50aFA4';
var lotteryWalletCheckerAddr = '0xf61Bae9d5D4041a2babC6FEF9Be119c8B0B5D199';


var minersAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"plan","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"ADDITIONAL_PERCENT_PLAN_1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADDITIONAL_PERCENT_PLAN_2","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADDITIONAL_PERCENT_PLAN_3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADDITIONAL_PERCENT_PLAN_4","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROJECT_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REFERRAL_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ceoAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ceoAddress2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ceoAddress3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSiteInfo","outputs":[{"internalType":"uint256","name":"_totalInvested","type":"uint256"},{"internalType":"uint256","name":"_totalBonus","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDepositsCount","outputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"totalDeposit","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"totalReferrals","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getUserPlanTotalAmount","outputs":[{"internalType":"uint256","name":"totalAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"amounterc","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAdditionalPercent_Plan1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAdditionalPercent_Plan2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAdditionalPercent_Plan3","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAdditionalPercent_Plan4","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"started","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token_CAKE","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

var tokenAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var lotteryAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLotteryWalletBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getMyDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountCAKE","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lotteryWalletAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxUserDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"setLotteryWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setMaxDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"start","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"started","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token_CAKE","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested_CAKE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
var lotteryWalletCheckerAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"codes","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"code","type":"uint16"}],"name":"sendCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"setWinner1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"setWinner2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"setWinner3","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"start","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"started","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"winner1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"winner2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"winner3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

var minersContract;
var tokenContract;
var lotteryContract;
var lotteryWalletCheckerContract;

var canSell = true;
var canHatch = true;



function approveCAKE(trx) {
	tokenContract.methods.approve(minersAddr, trx).send({ from: currentAddr });
}
function spendLimit(callback) {
	tokenContract.methods.allowance(currentAddr,minersAddr).call().then(result => {
		  callback(web3.utils.fromWei(result));
	  }).catch((err) => {
		  console.log(err)
	  });
  }
  
  function userBalance(callback){
    tokenContract.methods.balanceOf(currentAddr).call().then(result => {
			  var amt = web3.utils.fromWei(result)
				// console.log("balance" + amt)
        callback(amt);
				usrBal=amt;
    }).catch((err) => {
        console.log(err)
    });
}

// Done
function contractBalance(callback){
    // minersContract.methods.getContractBalance().call().then(result => {
			  // var amt = web3.utils.fromWei(result)
			//	console.log("balance" + amt)
        // callback(amt);
    // }).catch((err) => {
        // console.log(err)
    // });
	tokenContract.methods.balanceOf(minersAddr).call().then(result => {
	  callback(web3.utils.fromWei(result));
	}).catch((err) => {
	  console.log(err)
	});
}

// Done
function userTotalDeposits(callback) {
	minersContract.methods.getUserTotalDeposits(currentAddr).call().then(result => {
		var amt = web3.utils.fromWei(result)
		// console.log("balance" + amt)
		callback(amt);
	}).catch((err) => {
		console.log(err)
	});
}

// Done
function totalInvested(callback){
    minersContract.methods.totalInvested().call().then(result => {
		//var amt = result
		var amt = web3.utils.fromWei(result)
				// console.log("balance" + amt)
        callback(amt);
    }).catch((err) => {
        console.log(err)
    });
}

// Done, but not working or unable to test. NaN
function userDownlineCount(callback){
    minersContract.methods.getUserDownlineCount(currentAddr).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}



// Done
function userDividends(callback){
    minersContract.methods.getUserDividends(currentAddr).call().then(result => {
			  var amt = web3.utils.fromWei(result)
			  //var amt = result
        callback(amt);
    }).catch((err) => {
        console.log(err)
    });
}

// Done
function userAvailable(callback){
    minersContract.methods.getUserAvailable(currentAddr).call().then(result => {
			  var amt = web3.utils.fromWei(result)
        callback(amt);
    }).catch((err) => {
        console.log(err)
    });
}


// Done, not working
function userAmountOfDeposits(callback){
    minersContract.methods.getUserAmountOfDeposits(currentAddr).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

// Done, needs inputs
function planInfo(callback){
    minersContract.methods.getPlanInfo(_plan).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

// Done, think working
function userTotalWithdrawn(callback){
    minersContract.methods.getUserTotalWithdrawn(currentAddr).call().then(result => {
		var amt = web3.utils.fromWei(result)
        callback(amt);
    }).catch((err) => {
        console.log(err)
    });
}

function userReferralTotalBonus(callback){
    minersContract.methods.getUserReferralTotalBonus(currentAddr).call().then(result => {
		var amt = web3.utils.fromWei(result)
        callback(amt);
    }).catch((err) => {
        console.log(err)
    });
}

function userTotalReferrals(callback){
    minersContract.methods.getUserTotalReferrals(currentAddr).call().then(result => {
		//var amt = web3.utils.fromWei(result)
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}


function userDepositInfo(indexnumber, callback){

   minersContract.methods.getUserDepositInfo(currentAddr, indexnumber).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}


function userPlanTotalAmount(plan, callback){

   minersContract.methods.getUserPlanTotalAmount(currentAddr, plan).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

function userDepositsCount(callback){

   minersContract.methods.getUserDepositsCount(currentAddr).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

const promisify = (inner) =>
	new Promise((resolve, reject) =>
		inner((res, err) => {
			if (err) {
				reject(err)
			} else {
				resolve(res);
			}
		})
);
	
function DrawPlanAmount(plan, targetNode, transactionsTargetnode){

    userDepositsCount(function(depositCount){
		
		let promises = [];		
        for(let i = 0; i < depositCount; i++){			
			promises.push(promisify(callback => minersContract.methods.getUserDepositInfo(currentAddr, i).call().then(callback)));			
        }
		
		Promise.all(promises).then(function (results) {
			//console.log("Promise.all results: ", results, arguments)
			
			let planAmountTotal = 0;
			let transactionsTxt = "<div class=\"post-date\">History</div>";
			
			for(let x  = 0; x < results.length; x++){
				/*
					amount: "1000000000000000000"??????
					finish: "2498928189"				??????
					percent: "50"				??????
					plan: "0"				??????
					start: "1634928189"
				*/
				let deposit = results[x];
				
				if(deposit.plan == plan){
					let currentAmount = new Number(web3.utils.fromWei(deposit.amount));				
					let start = new Date(deposit.start*1000);
					let finish = new Date(deposit.finish*1000);	
					let finishDays = ((finish.getTime() - (new Date()).getTime()) / 1000 / 60 / 60 / 24).toFixed(1);
					
					let color = "color: black";
					if( finishDays < 0 ){
						finishDays = 0;
						color = "color: gray";
					}
					
					if( finishDays > 0 ){
						planAmountTotal += currentAmount;
					}
					
					if( plan > 0){ // plan with and without end. 0 = forever
						transactionsTxt = transactionsTxt + "<div style=\"border-bottom:1px solid gray; margin-bottom: 4px; "+ color +"\"><b>" + start.toLocaleString() + "</b><br>Amount: " + currentAmount + " CAKE<br>" + finishDays + " days left</div>";
					}else{
						transactionsTxt = transactionsTxt + "<div style=\"border-bottom:1px solid gray; margin-bottom: 4px; "+ color +"\"><b>" + start.toLocaleString() + "</b><br>Amount: " + currentAmount + " CAKE</div>";
					}
				}
			}
			
			targetNode.innerHTML = "Balance: " + planAmountTotal + " CAKE";			
			
			if(transactionsTargetnode && planAmountTotal > 0){
				transactionsTargetnode.innerHTML = transactionsTxt;
			}
		});
		
    })
}



function withdraw(callback){
    if (canSell) {
        canSell = false;
        console.log('Selling');
        minersContract.methods.withdraw().send({from:currentAddr}).then(result => {
            callback();
        }).catch((err) => {
            console.log(err)
        });
        setTimeout(function(){
            canSell = true;
        },10000);
    } else {
        console.log('Cannot sell yet...')
    };
}

function invest(ref, plan, trx, callback){

	if(trx < 1 ){
		alert("You have to spend at least 1 CAKE");
		return;
	}
	
	if(+trx > +usrBal) {
		alert("You don't have " + trx + " CAKE in your wallet");
		return;
	}
	else if(+trx > +spend) {
		alert("Approve spending " + trx + " CAKE first");
	} else {
			minersContract.methods.invest(ref,plan, web3.utils.toWei(trx))
				.send({ from:currentAddr})
				.then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });
	}
}

function lottery_approveCAKE(trx) {
	tokenContract.methods.approve(lotteryAddr, web3.utils.toWei(trx)).send({ from: currentAddr });
}

function lottery_Invest(trx, callback){
	if(+trx > +usrBal) {
		alert("You don't have " + trx + " CAKE in your wallet");
	}
	
	if(trx < 1 ){
		alert("You have to spend at least 1 CAKE");
		return;
	}
	lotteryContract.methods.invest(web3.utils.toWei(trx))
		.send({ from:currentAddr})
		.then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });
	
}

function lottery_spendLimit(callback) {
	tokenContract.methods.allowance(currentAddr,lotteryAddr).call().then(result => {
		  callback(web3.utils.fromWei(result));
	  }).catch((err) => {
		  console.log(err)
	  });
}
  
function lottery_getMyInvest(callback){

   lotteryContract.methods.getMyDeposits(currentAddr).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

function lottery_getLotteryWalletBalance(callback){

   lotteryContract.methods.getLotteryWalletBalance().call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

function lottery_WalletChecker_sendCode(code, callback){

	if(code < 1 ){
		alert("Missing Code!");
		return;
	}
	lotteryWalletCheckerContract.methods.sendCode(code)
		.send({ from:currentAddr})
		.then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });
}

function statistic_createPlanStatistic(walletAddresses){
	var planStatistics = [0,0,0,0];

	for( let i = 0; i < walletAddresses.length; i++){
		let address = walletAddresses[i];

		minersContract.methods.getUserDepositsCount(address).call().then(numberOfDeposits => {
			let i_numberOfDeposits = parseInt(numberOfDeposits);
			for( let x = 0; x < i_numberOfDeposits; x++){
				minersContract.methods.getUserDepositInfo(address, x).call().then(result => {
					console.log(result);
					planStatistics[parseInt(result.plan)] = planStatistics[parseInt(result.plan)] + new Number(web3.utils.fromWei(result.amount));
					
				}).catch((err) => {
					console.log(err)
				});
			}
		}).catch((err) => {
			console.log(err)
		});	
	}
}



