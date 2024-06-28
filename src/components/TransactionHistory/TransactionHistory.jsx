
import s from "./TransactionHistory.module.css"
const TransactionHistory = ({items}) => {
  return (
    <div className={s.containerTable}>
        <table className={s.table}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
        {items.map((item)=>{
            return <tr className={s.types}key={item.id}><td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
            </tr> 
        })}

  </tbody>
</table>
    </div>
  )
}

export default TransactionHistory;