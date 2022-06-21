import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const [computed, setComputed] = useState(false);
  const [name, setName] = useState('');
  const [totalNetSales, setTotalNetSales] = useState(0);
  const [totalNetSales, setTotalNetSales] = useState(0);
  const [cashSales, setCashSales] = useState(0);
  const [tips, setTips] = useState(0);
  const [somm, setSomm] = useState(0);
  const [liquor, setLiquor] = useState(0);
  const [beer, setBeer] = useState(0);
  const [wine, setWine] = useState(0);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const convertToDec = value => {
  	return parseInt(value.toFixed(2));
  }

  const onSubmit = data => {
    const {
      name,
      totalNetSales,
      cashSales,
      tips,
      somm,
      liquor,
      beer,
      wine
    } = data;

    totalNetSales = convertToDec(totalNetSales);
    cashSales = convertToDec(cashSales);
    tips = convertToDec(tips);
    somm = convertToDec(somm);
    liquor = convertToDec(liquor);
    beer = convertToDec(beer);
    wine = convertToDec(wine);

    setValues(values => {
      name,
      totalNetSales,
      cashSales,
      tips,
      somm,
      liquor,
      beer,
      wine
    })

    const creditCardSales = totalNetSales - cashSales;
    const ccFee = (creditCardSales * 0.015);
    const chargeTipAfterFee = creditCardSales - ccFee;
    const bar = (chargeTipAfterFee * .06);
    const serverAsst = (chargeTipAfterFee * .21);
    const runner = (chargeTipAfterFee * .13);
    const tipOutTotal = (bar + serverAsst + runner + somm);
	const netCcTipsDeclared = (chargeTipAfterFee - tipOutTotal);
    const liquorBeerWine = (liquor + beer + wine);
    setComputed(true);
    console.log(values);
  }

  return (
  	<>
  	{computed}
  	<form 
  	  onSubmit={handleSubmit(onSubmit)}
  	  className="w-full max-w-lg m-auto py-10 mt-10 px-10 border"
  	>
  	  <p>computed: {`${computed}`}</p>
  	  <label className="block my-4">
  	    <span className="block text-sm font-medium text-slate-700">
  	      Name
  	    </span>
  	    <input type="text"  className="peer mt-1 block w-full px-3 py-2 bg-white
  	      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-200
  	      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	      invalid:border-pink-500 invalid:text-pink-600
  	      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
  	      {...register(
  	      	"name",
  	      	{
  	      	  required: true,
  	      	}
  	      )}
  	    />
  	    {
  	      errors.name &&
  	      <p className="mt-1 peer-invalid:visible text-pink-600 text-sm">
  	        Please provide a valid name
  	      </p>
  	    }
  	  </label>
  	  <label className="block my-4">
  	    <span className="block text-sm font-medium text-slate-700">
  	      Total Net Sales
  	    </span>
  	    <input type="number"  className="peer mt-1 block w-full px-3 py-2 bg-white
  	      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-200
  	      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	      invalid:border-pink-500 invalid:text-pink-600
  	      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
  	      step="0.01"
  	      {...register(
  	      	"totalNetSales",
  	      	{
  	      	  required: true,
  	      	  min: 0,
  	      	  valueAsNumber: true
  	      	}
  	      )}
  	    />
  	    {
  	      errors.totalNetSales &&
  	      <p className="mt-1 peer-invalid:visible text-pink-600 text-sm">
  	        Invalid value
  	      </p>
  	    }
  	    </label>
  	    <label className="block my-4">
  	    <span className="block text-sm font-medium text-slate-700">
  	      Cash Sales Due the House
  	    </span>
  	    <input type="number"  className="peer mt-1 block w-full px-3 py-2 bg-white
  	      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-200
  	      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	      invalid:border-pink-500 invalid:text-pink-600
  	      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
  	      step="0.01"
  	      {...register(
  	      	"cashSales",
  	      	{
  	      	  required: true,
  	      	  min: 0,
  	      	  valueAsNumber: true
  	      	}
  	      )}
  	    />
  	    {
  	      errors.cashSales &&
  	      <p className="mt-1 peer-invalid:visible text-pink-600 text-sm">
  	        Invalid value
  	      </p>
  	    }
  	  </label>
  	  <label className="block my-4">
  	    <span className="block text-sm font-medium text-slate-700">
  	      Total Tips & Fees
  	    </span>
  	    <input type="number"  className="peer mt-1 block w-full px-3 py-2 bg-white
  	      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-200
  	      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	      invalid:border-pink-500 invalid:text-pink-600
  	      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
  	      step="0.01"
  	      {...register(
  	      	"tips",
  	      	{
  	      	  required: true,
  	      	  min: 0,
  	      	  valueAsNumber: true
  	      	}
  	      )}
  	    />
  	    {
  	      errors.tips &&
  	      <p className="mt-1 peer-invalid:visible text-pink-600 text-sm">
  	        Invalid value
  	      </p>
  	    }
  	  </label>

  	  <label className="block my-4">
  	    <span className="block text-sm font-medium text-slate-700">
  	      Sommelier 3%
  	    </span>
  	    <input type="number"  className="peer mt-1 block w-full px-3 py-2 bg-white
  	      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-200
  	      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	      invalid:border-pink-500 invalid:text-pink-600
  	      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
  	      step="0.01"
  	      {...register(
  	      	"somm",
  	      	{
  	      	  required: true,
  	      	  min: 0,
  	      	  valueAsNumber: true
  	      	}
  	      )}
  	    />
  	    {
  	      errors.somm &&
  	      <p className="mt-1 peer-invalid:visible text-pink-600 text-sm">
  	        Invalid value
  	      </p>
  	    }
  	  </label>

  	  <label className="block my-4">
  	    <span className="block text-sm font-medium text-slate-700">
  	      Liquor
  	    </span>
  	    <input type="number"  className="peer mt-1 block w-full px-3 py-2 bg-white
  	      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-200
  	      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	      invalid:border-pink-500 invalid:text-pink-600
  	      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
  	      step="0.01"
  	      {...register(
  	      	"liquor",
  	      	{
  	      	  required: true,
  	      	  min: 0,
  	      	  valueAsNumber: true
  	      	}
  	      )}
  	    />
  	    {
  	      errors.liquor &&
  	      <p className="mt-1 peer-invalid:visible text-pink-600 text-sm">
  	        Invalid value
  	      </p>
  	    }
  	  </label>

  	  <label className="block my-4">
  	    <span className="block text-sm font-medium text-slate-700">
  	      Beer
  	    </span>
  	    <input type="number"  className="peer mt-1 block w-full px-3 py-2 bg-white
  	      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-200
  	      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	      invalid:border-pink-500 invalid:text-pink-600
  	      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
  	      step="0.01"
  	      {...register(
  	      	"beer",
  	      	{
  	      	  required: true,
  	      	  min: 0,
  	      	  valueAsNumber: true
  	      	}
  	      )}
  	    />
  	    {
  	      errors.beer &&
  	      <p className="mt-1 peer-invalid:visible text-pink-600 text-sm">
  	        Invalid value
  	      </p>
  	    }
  	  </label>

  	  <label className="block my-4">
  	    <span className="block text-sm font-medium text-slate-700">
  	      Wine
  	    </span>
  	    <input type="number"  className="peer mt-1 block w-full px-3 py-2 bg-white
  	      border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-200
  	      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	      invalid:border-pink-500 invalid:text-pink-600
  	      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
  	      step="0.01"
  	      {...register(
  	      	"wine",
  	      	{
  	      	  required: true,
  	      	  min: 0,
  	      	  valueAsNumber: true
  	      	}
  	      )}
  	    />
  	    {
  	      errors.wine &&
  	      <p className="mt-1 peer-invalid:visible text-pink-600 text-sm">
  	        Invalid value
  	      </p>
  	    }
  	  </label>
  	  <button
  	    type="submit"
  	    className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full
  	    "
  	  >
  	    Compute
  	  </button>
  	{/*}
  	  <div className="flex flex-col bg-grey rounded-xl space-y-4">
  	    <div className="space-x-3">
	  	  <label className="text-purple-600 font-semibold" htmlFor="first">First Name</label>
	  	  <input className="form-input rounded-xl" type="text" id="first" name="first" required/>
	  	</div>
	  	<div className="space-x-3">
	  	  <label className="text-purple-600 font-semibold" htmlFor="last">Last Name</label>
	  	  <input className="form-input rounded-xl" type="text" id="last" name="last" required />
	  	</div>
	  	  <button className="py-1 px-4 text-purple-600 font-semibold rounded-full border border-purple-600 bg-purple-200" type="submit">Submit</button>
  	  </div>
  	 */}
  	</form>
  	</>
  )
}