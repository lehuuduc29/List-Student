import React from 'react';
import './App.css';


class Students extends React.Component {
  constructor(props) {
    super(props);
    this.ArrStudent = [];
    this.state = {
      status: false
    };
  }


  Create = () => {
    const Student = {
      id: document.getElementById('id').value,
      name: document.getElementById('name').value,
      age: document.getElementById('age').value,
      address: document.getElementById('address').value
    }

    this.ArrStudent.push(Student)
    console.log(this.ArrStudent)

    this.setState({
      status: true
    })
  }

  render() {

    if (this.state.status) {
      return (
        <div>
          <input type='text' id='id' placeholder='ID' />
          <input type='text' id='name' placeholder='Name' />
          <input type='text' id='age' placeholder='Age' />
          <input type='text' id='address' placeholder='Address' />

          <button type='button' onClick={this.Create}>Add</button>

          <br />
          <br />
          <br />
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {
                this.ArrStudent.map((item) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.address}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div>
          <input type='text' id='id' placeholder='ID' />
          <input type='text' id='name' placeholder='Name' />
          <input type='text' id='age' placeholder='Age' />
          <input type='text' id='address' placeholder='Address' />

          <button type='button' onClick={this.Create}>Add</button>
        </div>
      )
    }

  }
}

export default Students;