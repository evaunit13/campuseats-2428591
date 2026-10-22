import { useState } from 'react'
import MenuItemCard from './MenuItemCard.jsx'

function MenuList({ items, onAdd }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  if (items.length === 0) {
    return <p className="muted">No items on this menu yet.</p>
  }

  // Derive unique categories from items
  const categories = ['All', ...new Set(items.map((item) => item.category))]
  const activeCategory = categories.includes(selectedCategory)
    ? selectedCategory
    : 'All'

  // Filter visible items
  const visibleItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory)

  return (
    <div>
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
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
            <MenuItemCard key={item.id} item={item} onAdd={onAdd} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MenuList
