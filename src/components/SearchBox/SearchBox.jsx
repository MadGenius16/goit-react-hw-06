import css from '../SearchBox/SearchBox.module.css'

const SearchBox = ({value, handleFilter}) => {
  return (
    <div className={css.wrap}>
      <h2 className={css.title}>Find contacts by name</h2>
      <input className={css.search} type="text" value={value} onChange={handleFilter}/>
    </div>
  )
}

export default SearchBox