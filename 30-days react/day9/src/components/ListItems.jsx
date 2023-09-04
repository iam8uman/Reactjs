const ListItems = () => {
  let ktaharu = ["suman", "samjhana", "makadoks", "bhopadike","khanxuKhana"];

  return (
    <>
      {ktaharu.map((kti) => (
        <ul className="list-group" key={kti}>
          <li className="list-group-item" >{kti}</li>
        </ul>
      ))}
    </>
  );
};

export default ListItems;
