import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCategories,
  selectError,
  selectLoading,
  selectTransactions,
} from 'redux/transactions/selectors';
import Loader from 'components/Loader/Loader';
import {
  StyledHeaderTr,
  StyledMobileWrapper,
  StyledTable,
  StyledTableWrapper,
  StyledTbodyTable,
  StyledTdCategory,
  StyledTdComment,
  StyledTdDate,
  StyledTdSum,
  StyledTdType,
  StyledThCategory,
  StyledThComment,
  StyledThDate,
  StyledThSum,
  StyledThType,
  StyledTr,
  StyledTransactionsList,
} from './TransactionsList.styled';
import {
  StyledBtnBox,
  StyledDeleteBtn,
  StyledEditBtn,
} from 'components/TransactionsItem/TransactionsItem.styled';
import TransactionsItem from 'components/TransactionsItem/TransactionsItem';
import sprite from '../../images/sprite.svg';

const TransactionsList = ({ handleDelete }) => {
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <StyledTransactionsList>
      <StyledMobileWrapper>
        {loading && <Loader />}
        {error && <h1>Something went wrong... 😢</h1>}
        {transactions.length > 0 ? (
          transactions.map(transaction => (
            <TransactionsItem key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <h3>Oh, you don't have transactions yet. Let's create one!</h3>
        )}
      </StyledMobileWrapper>

      <StyledTableWrapper>
        {loading && <Loader />}
        {error && <h1>Something went wrong... 😢</h1>}
        <StyledTable>
          <thead>
            <StyledHeaderTr>
              <StyledThDate>Date</StyledThDate>
              <StyledThType>Type</StyledThType>
              <StyledThCategory>Category</StyledThCategory>
              <StyledThComment>Comment</StyledThComment>
              <StyledThSum>Sum</StyledThSum>
            </StyledHeaderTr>
          </thead>
          <StyledTbodyTable>
            {transactions.length > 0 ? (
              transactions.map(transaction => (
                <StyledTr key={transaction.id}>
                  <StyledTdDate>
                    {formatDate(transaction.transactionDate)}
                  </StyledTdDate>
                  <StyledTdType>
                    {transaction.type === 'INCOME' ? '+' : '-'}
                  </StyledTdType>
                  <StyledTdCategory>
                    {categories.find(cat => cat.id === transaction.categoryId)
                      ?.name || '-'}
                  </StyledTdCategory>
                  <StyledTdComment>{transaction.comment}</StyledTdComment>
                  <StyledTdSum
                    style={{
                      color:
                        transaction.type === 'INCOME' ? '#FFB627' : '#FF868D',
                    }}
                  >
                    {transaction.amount}
                  </StyledTdSum>
                  <td>
                    <StyledBtnBox>
                      <StyledEditBtn>
                        <svg width="14" height="14">
                          <use href={`${sprite}#edit`} />
                        </svg>
                      </StyledEditBtn>
                      <StyledDeleteBtn>Delete</StyledDeleteBtn>
                    </StyledBtnBox>
                  </td>
                </StyledTr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No transactions found.</td>
              </tr>
            )}
          </StyledTbodyTable>
        </StyledTable>
      </StyledTableWrapper>
    </StyledTransactionsList>
  );
};
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}.${month}.${year}`;
}

export default TransactionsList;
