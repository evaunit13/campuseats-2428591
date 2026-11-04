import { Link } from 'react-router'
import { useCart } from '../hooks/useCart.js'

function OrdersPage() {
  const { orders } = useCart()

  if (!orders || orders.length === 0) {
    return (
      <div className="card">
        <h2>Your Orders</h2>
        <p className="muted">No orders placed yet.</p>
        <Link to="/" className="btn" style={{ display: 'inline-block', width: 'auto', marginTop: '1rem', textDecoration: 'none' }}>
          Back to vendors
        </Link>
      </div>
    )
  }

  return (
    <section>
      <h2>Your Orders</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        {orders.map((order) => (
          <div key={order.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <h3>Order #{order.id.slice(-6)}</h3>
              <span className="muted">
                {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <p>
              Pickup at <strong>{order.pickupTime}</strong> ({order.mahallah}) for <strong>{order.name}</strong>
            </p>
            <ul className="cart-list" style={{ margin: '0.75rem 0' }}>
              {order.items.map((line) => (
                <li key={line.item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid #eee' }}>
                  <span>{line.item.name} × {line.qty}</span>
                  <span>RM {(line.item.price * line.qty).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="cart-total" style={{ marginTop: '0.5rem' }}>
              Total: RM {order.total.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OrdersPage
