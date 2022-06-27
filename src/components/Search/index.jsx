import styles from "./Search.module.scss";

import ClearIcon from "../../assets/img/clearIcon.svg";
import SearchIcon from "../../assets/img/searchIcon.svg";

export default function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        className={styles.input}
        placeholder="Поиск пиццы..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <img className={styles.icon} src={SearchIcon} alt="SearchIcon" />
      {searchValue && (
        <img
          onClick={() => setSearchValue("")}
          className={styles.clearIcon}
          src={ClearIcon}
          alt="clearIcon"
        />
      )}
    </div>
  );
}
