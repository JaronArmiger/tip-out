const Display  = ({
  values
}) => {
  const {
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
  } = values;
  return (
  	<table className="table-auto border-collapse border border-slate-500">
  	  <tbody>
  	    <tr>
  	      <td className="border px-4 py-2 rounded-sm border-slate-200">
  	      	<span className="font-bold">Total Net Sales:</span> {' $'}
  	      	{totalNetSales.toFixed(2)}
  	      </td>
  	      <td className="border px-4 py-2 rounded-sm px-4 py-2 border-slate-200">
  	      	<span className="font-bold">Bar 6%</span> {' $'}
  	      	{bar.toFixed(2)}
  	      </td>
  	    </tr>
  	    <tr>
  	      <td className="border px-4 py-2 rounded-sm px-4 py-2 border-slate-200">
  	      	<span className="font-bold">Cash Sales Due the House:</span>{' $'}
  	      	{cashSales.toFixed(2)}
  	      </td>
  	      <td className="border px-4 py-2 rounded-sm border-slate-200">
  	      	<span className="font-bold">Server Assts 21%</span> {' $'}
  	      	{serverAsst.toFixed(2)}
  	      </td>
  	    </tr>
  	    <tr>
  	      <td className="border px-4 py-2 rounded-sm px-4 py-2 border-slate-200">
  	      	<span className="font-bold">Credit Card Sales:</span>{' $'}
  	      	{creditCardSales.toFixed(2)}
  	      </td>
  	      <td className="border px-4 py-2 rounded-sm border-slate-200">
  	      	<span className="font-bold">Runner 13%</span> {' $'}
  	      	{runner.toFixed(2)}
  	      </td>
  	    </tr>
  	    <tr>
  	      <td className="border px-4 py-2 rounded-sm px-4 py-2 border-slate-200">
  	      	<span className="font-bold">Charge Tips:</span>{' $'}
  	      	{tips.toFixed(2)}
  	      </td>
  	      <td className="border px-4 py-2 rounded-sm border-slate-200">
  	      	<span className="font-bold">Sommelier 3%: </span>{' $'}
  	      	{somm.toFixed(2)}
  	      </td>
  	    </tr>
  	    <tr>
  	      <td className="border px-4 py-2 rounded-sm px-4 py-2 border-slate-200">
  	      	<span className="font-bold">1.5 CC Fee:</span>{' $'}
  	      	{ccFee.toFixed(2)}
  	      </td>
  	      <td className="border px-4 py-2 rounded-sm border-slate-200">
  	      	
  	      </td>
  	    </tr>
  	    <tr>
  	      <td className="border px-4 py-2 rounded-sm px-4 py-2 border-slate-200">
  	      	<span className="font-bold">Charge Tip After Fee</span>{' $'}
  	      	{chargeTipAfterFee.toFixed(2)}
  	      </td>
  	      <td className="border px-4 py-2 rounded-sm border-slate-200">
  	      </td>
  	    </tr>
  	    <tr>
  	      <td className="border px-4 py-2 rounded-sm px-4 py-2 border-slate-200">
  	      	<span className="font-bold">Tips Paid Out: </span>{' $'}
  	      	{tipOutTotal.toFixed(2)}
  	      </td>
  	      <td className="border px-4 py-2 rounded-sm border-slate-200">
  	      	<span className="font-bold">Tip Out Total: </span>{' $'}
  	      	{tipOutTotal.toFixed(2)}
  	      </td>
  	    </tr>
  	    <tr>
  	      <td className="border px-4 py-2 rounded-sm px-4 py-2 border-slate-200">
  	      	<span className="font-bold">Net CC Tips Declared:</span> {' $'}
  	      	{netCcTipsDeclared.toFixed(2)}
  	      </td>
  	      <td className="border px-4 py-2 rounded-sm border-slate-200">
  	      	
  	      </td>
  	    </tr>
  	    <tr>
  	      <td className="border px-4 py-2 rounded-sm px-4 py-2 border-slate-200">
  	      	<span className="font-bold">Net Cash Tips:</span> {' $0'}
  	      </td>
  	      <td className="border px-4 py-2 rounded-sm border-slate-200">
  	      	
  	      </td>
  	    </tr>
  	    <tr>
  	      <td className="border px-4 py-2 rounded-sm px-4 py-2 border-slate-200">
  	      	<span className="font-bold">Total Tip Declared: </span>{' $'}
  	      	{netCcTipsDeclared.toFixed(2)}
  	      </td>
  	      <td className="border px-4 py-2 rounded-sm border-slate-200">
  	      	
  	      </td>
  	    </tr>
  	    <tr>
  	      <td className="border px-4 py-2 rounded-sm px-4 py-2 border-slate-200">
  	      	<span className="font-bold">Liquor, Beer, Wine Sales:</span>{' $'}
  	      	{liquorBeerWine.toFixed(2)}
  	      </td>
  	      <td className="border px-4 py-2 rounded-sm border-slate-200">
  	      	
  	      </td>
  	    </tr>
  	  </tbody>
  	</table>
  );
}

export default Display;