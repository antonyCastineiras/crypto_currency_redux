import React from 'react'

const Table = ({data=[]}) => {
	return(
		<table>
			<thead></thead>
			<tbody>
				{ data.map((d,i)=><tr key={i}></tr>) }
			</tbody>	
		</table>
	)
}

export default Table