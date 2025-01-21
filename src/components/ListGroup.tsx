function ListGroup() {
  let subjects = [
    "Artificial Intelligence",
    "Digital Image Processing",
    "Digital Thinking",
    "DevOps",
    "Mobile Application Development",
  ];

  return (
    <div>
      <h1>Notes</h1>
      {subjects.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {subjects.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
