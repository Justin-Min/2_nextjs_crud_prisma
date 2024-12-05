import { getEmployeelist } from '@/lib/action'

export default async function Employee({ query }: { query: string }) {
	const employees = await getEmployeelist(query)

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
			<tbody>
				{employees.map((rs, index) => (
					<tr key={rs.id} className='bg-white border-b'>
						<td className='py-3 px-6'>{index + 1}</td>
						<td className='py-3 px-6'>{rs.name}</td>
						<td className='py-3 px-6'>{rs.email}</td>
						<td className='py-3 px-6'>{rs.phone}</td>
						<td className='py-3 px-6'>{rs.createAt}</td>
						<td className='flex justify-center gap-1 py-3'>Edit | Delete</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
