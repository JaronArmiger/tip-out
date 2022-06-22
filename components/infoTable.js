

export default function infoTable() {
  return (
  	<div>
  	  <table className="border-collapse border border-slate-500">
  	    <tbody>
  	      <tr>
  	        <td className="border border-slate-500">Total Sales: {`${totalNetSales}`}</td>
  	      </tr>
  	    </tbody>
  	  </table>
  	</div>
  );
}