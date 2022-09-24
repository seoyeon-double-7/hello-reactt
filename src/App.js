import CheckInReord from './CheckInReord';
import Student from './Student';
import logo from './logo.svg';
import './App.css';

function App() {
	// const name = "Cindy";
  // const element = <h1>My name is {name}!</h1>;
  // const element2 = <h1>1+ 1 = {1+1}</h1>

  return (
    <div>
      {/* <h1>Hello, World!</h1>
      {element}
      {element2} */}
      {/* 한줄짜리 주석 */}
      <h1>Today CheckIn Record</h1>


      <CheckInReord name = "Cindy Bae🐰" score = {4} comment = "오늘 공모전 시상식!"/>
      
      <CheckInReord name = "Judy Choi" score = {2} comment = "집가고 싶어요"/>

      <h1>Student List</h1>
      <Student name="Cindy Bae"/>
      <Student name="Judy Choi"/>
    </div>
  );
}

export default App;
