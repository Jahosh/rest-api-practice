import React from 'react';

const ResultsList = (props) => {
  const students = props.data;
  console.log(props);
  const studentEntry = students.map( (student, i) => {
    return <li key={i}> {student.name} </li>
  });
  return (
    <div>
     { studentEntry } 
    </div>
  );
};

export default ResultsList;