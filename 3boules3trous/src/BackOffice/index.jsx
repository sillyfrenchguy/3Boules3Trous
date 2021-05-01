import React from 'react';
import './BackOffice.css';
import { userList } from '../datas/userList'
import ButtonAnimation from '../ButtonAnimation/index';
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
  <div className = "conteneur_Type">
    <h3>Quine </h3>
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
  <div className = "conteneur_Type">
    <h3>Carton Plein </h3>
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
  <ButtonAnimation type='NEW QUINE' titre = "Quine !" selectedValue={selectedValueQuine[selectedValueQuine.length - 1]} />
  <ButtonAnimation type='NEW CARTON' titre ="Carton plein !" selectedValue={selectedValueCarton[selectedValueCarton.length - 1]} />
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