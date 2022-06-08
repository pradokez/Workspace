import '../styles/ToDoList.scss';
import '../styles/reset.css'
const ToDoList = () => {
  return (
    <container>
      <div className="header">
        <h1 className="list-title">para hoje</h1>
        <h2 className="date-subtitle">junho | 06/06/2022</h2>
      </div>
      <div className="list-items">
        <ul>
          <li><input type="checkbox"/>teste</li>
          <li><input type="checkbox"/>teste</li>
          <li><input type="checkbox"/>teste</li>
        </ul>
      </div>
    </container>
  );
};

export default ToDoList;