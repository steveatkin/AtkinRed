function main(params) {
  var message = 'No discount offers';

  if(params.numberOfPolicies >= 2 && params.monthsSinceLastClaim >= 24) {
    // Offer 10% discount if customer will increase their deductible
    message = 'Offer a 10% discount for increasing deductible';
  }
  else if(params.monthsSinceLastClaim >= 12) {
    // offer 5% discount if customer will increase their deductible
    message = 'Offer a 5% discount for increasing deductible';
  }

  params.message = message;
  return params;
}
