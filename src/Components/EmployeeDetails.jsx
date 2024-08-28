function EmployeeDetails(props) {
  return (
    <div>
      <p>Emp No: {props.eno} and Name is {props.ename}</p>
    </div>
  );
}

EmployeeDetails.defaultProps = {
    eno: 'N/A',
    ename: 'N/A'
    }

export default EmployeeDetails;