import PropTypes from 'prop-types';
import { Table,Thead,TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => { 
    return (
        <Table>
            <Thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
             </Thead>

            <tbody>
                {transactions.map(transaction => (
                        <TableRow key={transaction.id}>
                            <td>{transaction.type }</td>
                            <td>{ transaction.amount}</td>
                            <td>{transaction.currency }</td>
                        </TableRow>
                ))}
            </tbody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}