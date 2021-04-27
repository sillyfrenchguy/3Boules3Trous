import React from 'react';
import './BackOffice.css';
import { userList } from '../datas/userList'
import Select from 'react-select'; 

export const BackOffice = ({selectedValueQuine, setSelectedValueQuine, selectedValueCarton, setSelectedValueCarton}) => {
  
  const handleChangeQuine = (e) => {
    setSelectedValueQuine(Array.isArray(e) ? e.map(x => x.value) : []); 
  };
  const handleChangeCarton = (e) => {
    setSelectedValueCarton(Array.isArray(e) ? e.map(x => x.value) : []); 
  };

  return (
  <div id="backOffice">
    <h1> BackOffice </h1>
  <div class = "conteneur_Type">
    <h2> Gestion Quine </h2>
    <Select
      defaultValue={[]}
      isMulti
      name="users"
      options={userList}
      className="basic-multi-select"
      classNamePrefix="select"
      value={userList.filter(obj => selectedValueQuine.includes(obj.value))}
      onChange={handleChangeQuine}
    /> 
  </div>
  <div class = "conteneur_Type">
    <h2> Gestion Carton plein </h2>
    <Select
      defaultValue={[]}
      isMulti
      name="users"
      options={userList}
      className="basic-multi-select"
      classNamePrefix="select"
      value={userList.filter(obj => selectedValueCarton.includes(obj.value))}
      onChange={handleChangeCarton}
    /> 
  </div>
  </div>
)







    /*
    const inputKeyPress = (event) => {
      if (event.charCode === 13) {
        updateInputText([...inputText, event.target.value]);
      }
    };
  
    return (
      <div id="backOffice">
          <div>
            <h2>Le jouli Back Office</h2>
            <label>
                Quine :
                <input type="text" onKeyPress={inputKeyPress} />
            </label>
          </div>
      </div>
    );

    */
  };
  export default BackOffice;