// The filters shown on the game listings page

import Tag from "@/src/components/Tag.jsx";

function FilterSelect({ label, options, value, onChange, name, icon }) {
  return (
    <div>
      <img src={icon} alt={label} />
      <label>
        {label}
        <select value={value} onChange={onChange} name={name}>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option === "" ? "All" : option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default function Filters({ filters, setFilters }) {
  const handleSelectionChange = (event, name) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: event.target.value,
    }));
  };

  const updateField = (type, value) => {
    setFilters({ ...filters, [type]: value });
  };

  return (
    <section className="filter">
      <details className="filter-menu">
        <summary>
          <img src="/filter.svg" alt="filter" />
          <div>
            <p>Games</p>
            <p>Sorted by {filters.sort || "Rating"}</p>
          </div>
        </summary>

        <form
          method="GET"
          onSubmit={(event) => {
            event.preventDefault();
            event.target.parentNode.removeAttribute("open");
          }}
        >
          <FilterSelect
            label="Genre"
            options={[
              "",
              "Action RPG",
              "Adventure",
              "Shooter",
              "Platformer",
              "Open World",
              "Strategy",
              "RPG",
              "Fighting",
              "Racing",
              "Puzzle",
              "Horror",
              "Simulation",
              "Sports",
              "Stealth",
            ]}
            value={filters.genre}
            onChange={(event) => handleSelectionChange(event, "genre")}
            name="genre"
            icon="/food.svg"
          />

          <FilterSelect
            label="Developer"
            options={[
              "",
              "FromSoftware",
              "Nintendo",
              "CD Projekt Red",
              "Santa Monica Studio",
              "Bethesda Game Studios",
              "Rockstar Games",
              "Valve",
              "Naughty Dog",
              "Sucker Punch Productions",
              "Guerrilla Games",
              "Insomniac Games",
              "Capcom",
              "Square Enix",
              "Ubisoft",
              "Electronic Arts",
            ]}
            value={filters.developer}
            onChange={(event) => handleSelectionChange(event, "developer")}
            name="developer"
            icon="/location.svg"
          />

          <FilterSelect
            label="Price"
            options={["", "$", "$$", "$$$", "$$$$"]}
            value={filters.price}
            onChange={(event) => handleSelectionChange(event, "price")}
            name="price"
            icon="/price.svg"
          />

          <FilterSelect
            label="Sort"
            options={["Rating", "Review"]}
            value={filters.sort}
            onChange={(event) => handleSelectionChange(event, "sort")}
            name="sort"
            icon="/sortBy.svg"
          />

          <footer>
            <menu>
              <button
                className="button--cancel"
                type="reset"
                onClick={() => {
                  setFilters({
                    developer: "",
                    genre: "",
                    price: "",
                    sort: "",
                  });
                }}
              >
                Reset
              </button>
              <button type="submit" className="button--confirm">
                Submit
              </button>
            </menu>
          </footer>
        </form>
      </details>

      <div className="tags">
        {Object.entries(filters).map(([type, value]) => {
          // The main filter bar already specifies what
          // sorting is being used. So skip showing the
          // sorting as a 'tag'
          if (type == "sort" || value == "") {
            return null;
          }
          return (
            <Tag
              key={value}
              type={type}
              value={value}
              updateField={updateField}
            />
          );
        })}
      </div>
    </section>
  );
}
