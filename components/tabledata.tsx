const Employee = async () => {
	return (
		<table className='table table-zebra'>
			<thead className='text-sm text-gray-700 uppercase bg-gray-50'>
				<tr>
					<th className='py-3 px-6'>#</th>
					<th className='py-3 px-6'>Name</th>
					<th className='py-3 px-6'>Email</th>
					<th className='py-3 px-6'>Phone Number</th>
					<th className='py-3 px-6'>Created At</th>
					<th className='py-3 px-6'>Actions</th>
				</tr>
			</thead>
		</table>
	)
}

export default Employee
