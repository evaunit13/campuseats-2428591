import { useSearchParams } from 'react-router'
import MenuItemCard from './MenuItemCard.jsx'
import { useCart } from '../hooks/useCart.js'

function MenuList({ items }) {
  const { addToCart } = useCart()
  const [searchParams, setSearchParams] = useSearchParams()
  const catParam = searchParams.get('cat') || 'All'

  if (items.length === 0) {
    return <p className="muted">No items on this menu yet.</p>
  }

  // Derive unique categories from items
  const categories = ['All', ...new Set(items.map((item) => item.category))]
  const activeCategory = categories.includes(catParam) ? catParam : 'All'

  // Filter visible items
  const visibleItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory)

  function handleCategoryClick(cat) {
    if (cat === 'All') {
      searchParams.delete('cat')
      setSearchParams(searchParams)
    } else {
      setSearchParams({ cat })
    }
  }

  return (
    <div>
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {visibleItems.length === 0 ? (
        <p className="muted">No items in this category.</p>
      ) : (
        <div className="grid">
          {visibleItems.map((item) => (
            <MenuItemCard key={item.id} item={item} onAdd={addToCart} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MenuList
