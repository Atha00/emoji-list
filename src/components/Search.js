const Search = (props) => {
  return (
    <div>
      <h1>😎 EmojiSearch 😎</h1>
      <input
        type="text"
        value={props.search}
        onChange={(event) => {
          props.setSearch(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
