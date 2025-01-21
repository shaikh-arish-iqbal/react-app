function ListGroup() {
  let subjects = [
    "Artificial Intelligence",
    "Digital Image Processing",
    "Digital Thinking",
    "DevOps",
    "Mobile Application Development",
  ];

  subjects = [];

  const message = subjects.length === 0 ? <p>No items found</p> : null;

  return (
    <div>
      <h1>Notes</h1>
      {message}
      <ul className="list-group">
        {subjects.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
