export default function Items({ persons, splitter, setSplitter }) {
  function personOnClick(person) {
    if (splitter === "") {
      setSplitter(person);
    } else if (splitter !== "") {
      if (splitter === person) {
        setSplitter("");
      } else {
        setSplitter(person);
      }
    }
  }
  console.log(persons);

  return (
    <>
      {persons.map((person) => (
        <div className="item-box" key={person.name}>
          <>
            <div>
              <p className="person-name">{person.name}</p>
              <p className="person-balance">
                {person.balance == 0
                  ? `${person.name} and you are even`
                  : person.balance < 0
                  ? `${person.name} owes you $${-person.balance}`
                  : `you owes $${person.balance} to ${person.name}`}
              </p>
            </div>

            <button
              className="add-item-btn add-btn"
              onClick={() => {
                personOnClick(person.name);
              }}
            >
              {splitter === person.name ? "Close" : "Select"}
            </button>
          </>
        </div>
      ))}
    </>
  );
}
