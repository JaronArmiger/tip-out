const FormInner = ({
  handleChange,
  handleSubmit,
  inputValues,
  setInputValues
}) => {
  const {
	  totalNetSales,
	  cashSales,
	  tips,
	  somm,
	  liquor,
	  beer,
	  wine,
	} = inputValues;

  return (
  	 <form
        className="w-full max-w-lg m-auto py-10 mt-10 px-10"
        onSubmit={handleSubmit}
      >
        <label className="block my-4">
          <span className="block text-sm font-medium text-slate-700">
  	        Total Sales
  	      </span>
  	      <input 
  	        type="number"
  	        step="0.01"
  	        min="0"
  	        name="totalNetSales"
  	        value={totalNetSales}
  	        className="mt-1 block w-full px-3 py-2 bg-white
  	          border border-slate-300 rounded-md text-sm placeholder-slate-200
  	          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	        "
  	        onChange={handleChange}
  	        required
  	      />
        </label>
        <label className="block my-4">
          <span className="block text-sm font-medium text-slate-700">
  	        Cash Sales Due the House
  	      </span>
  	      <input 
  	        type="number"
  	        step="0.01"
  	        min="0"
  	        name="cashSales"
  	        value={cashSales}
  	        className="mt-1 block w-full px-3 py-2 bg-white
  	          border border-slate-300 rounded-md text-sm placeholder-slate-200
  	          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	        "
  	        onChange={handleChange}
  	        required
  	      />
        </label>
        <label className="block my-4">
          <span className="block text-sm font-medium text-slate-700">
  	        Total Tips & Fees
  	      </span>
  	      <input 
  	        type="number"
  	        step="0.01"
  	        min="0"
  	        name="tips"
  	        value={tips}
  	        className="mt-1 block w-full px-3 py-2 bg-white
  	          border border-slate-300 rounded-md text-sm placeholder-slate-200
  	          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	        "
  	        onChange={handleChange}
  	        required
  	      />
        </label>
        <label className="block my-4">
          <span className="block text-sm font-medium text-slate-700">
  	        Sommelier 3%
  	      </span>
  	      <input 
  	        type="number"
  	        step="0.01"
  	        min="0"
  	        name="somm"
  	        value={somm}
  	        className="mt-1 block w-full px-3 py-2 bg-white
  	          border border-slate-300 rounded-md text-sm placeholder-slate-200
  	          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	        "
  	        onChange={handleChange}
  	        required
  	      />
        </label>
        <label className="block my-4">
          <span className="block text-sm font-medium text-slate-700">
  	        Liquor
  	      </span>
  	      <input 
  	        type="number"
  	        step="0.01"
  	        min="0"
  	        name="liquor"
  	        value={liquor}
  	        className="mt-1 block w-full px-3 py-2 bg-white
  	          border border-slate-300 rounded-md text-sm placeholder-slate-200
  	          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	        "
  	        onChange={handleChange}
  	        required
  	      />
        </label>
        <label className="block my-4">
          <span className="block text-sm font-medium text-slate-700">
  	        Beer
  	      </span>
  	      <input 
  	        type="number"
  	        step="0.01"
  	        min="0"
  	        name="beer"
  	        value={beer}
  	        className="mt-1 block w-full px-3 py-2 bg-white
  	          border border-slate-300 rounded-md text-sm placeholder-slate-200
  	          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	        "
  	        onChange={handleChange}
  	        required
  	      />
        </label>
        <label className="block my-4">
          <span className="block text-sm font-medium text-slate-700">
  	        Wine
  	      </span>
  	      <input 
  	        type="number"
  	        step="0.01"
  	        min="0"
  	        name="wine"
  	        value={wine}
  	        className="mt-1 block w-full px-3 py-2 bg-white
  	          border border-slate-300 rounded-md text-sm placeholder-slate-200
  	          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  	        "
  	        onChange={handleChange}
  	        required
  	      />
        </label>
        <button
	  	    type="submit"
	  	    className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full
	  	    "
	  	  >
	  	    Compute
	  	  </button>
      </form>
  );
}

export default FormInner