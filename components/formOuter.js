import { useState } from 'react';
import FormInner from './formInner';
import Display from './display';

const initialInputValues = {
  totalNetSales: '',
  cashSales: '',
  tips: '',
  somm: '',
  liquor: '',
  beer: '',
  wine: '',
}

const initialNumValues = {
  totalNetSales: 0,
  cashSales: 0,
  tips: 0,
  somm: 0,
  liquor: 0,
  beer: 0,
  wine: 0,
  creditCardSales: 0,
  ccFee: 0,
  chargeTipAfterFee: 0,
  bar: 0,
  serverAsst: 0,
  runner: 0,
  tipOutTotal: 0,
  netCcTipsDeclared: 0,
  liquorBeerWine: 0,
}

const FormOuter = () => {
	const [computed, setComputed] = useState(false);
	const [inputValues, setInputValues] = useState(initialInputValues);
	const [numValues, setNumValues] = useState(initialNumValues);

	const round2 = value => {
	  return Math.round((parseFloat(value) + Number.EPSILON) * 100) / 100;
    }

	const handleChange = e => {
	  setInputValues({
	    ...inputValues,
	    [e.target.name]: e.target.value
	  })
	}

	const handleSubmit = e => {
	  e.preventDefault();
	  // console.log('inputValues');
	  // console.log(inputValues);
	  const {
	  	totalNetSales,
	    cashSales,
	    tips,
	    somm,
	    liquor,
	    beer,
	    wine,
	  } = inputValues;

	  totalNetSales = round2(totalNetSales);
	  console.log(`totalNetSales: ${totalNetSales}`);
      cashSales = round2(cashSales);
      tips = round2(tips);
      somm = round2(somm);
      liquor = round2(liquor);
      beer = round2(beer);
      wine = round2(wine);

	  const creditCardSales = round2(totalNetSales - cashSales);
      const ccFee = round2((creditCardSales * 0.015));
      const chargeTipAfterFee = round2(tips - ccFee);
      const bar = round2((chargeTipAfterFee * .06));
      const serverAsst = round2((chargeTipAfterFee * .21));
      const runner = round2((chargeTipAfterFee * .13));
      const tipOutTotal = round2((bar + serverAsst + runner + somm));
	  const netCcTipsDeclared = round2((chargeTipAfterFee - tipOutTotal));
      const liquorBeerWine = round2((liquor + beer + wine));
      console.log(`creditCardSales: ${creditCardSales}`);
      console.log(`ccFee: ${ccFee}`);
      console.log(`chargeTipAfterFee: ${chargeTipAfterFee}`);
      console.log(`bar: ${bar}`);
      console.log(`serverAsst: ${serverAsst}`);
      console.log(`runner: ${runner}`);
      console.log(`tipOutTotal: ${tipOutTotal}`);
      console.log(`netCcTipsDeclared: ${creditCardSales}`);
      console.log(`liquorBeerWine: ${liquorBeerWine}`);
	  setNumValues({
	  	...numValues,
	  	totalNetSales,
		cashSales,
		tips,
		somm,
		liquor,
		beer,
		wine,
		creditCardSales,
        ccFee,
        chargeTipAfterFee,
        bar,
        serverAsst,
        runner,
        tipOutTotal,
        netCcTipsDeclared,
        liquorBeerWine,
	  })
	  setComputed(true);
	  console.log(numValues);
	  console.log(`totalNetSales: ${totalNetSales}`);
	}

	return (
	  <>
	     {computed &&  
	      <Display 
	        values={numValues}
	      />
	     }
	     <FormInner
	       handleChange={handleChange}
	       handleSubmit={handleSubmit}
	       inputValues={inputValues}
	       setInputValues={setInputValues}
	     />
       </>
	);
}

export default FormOuter;